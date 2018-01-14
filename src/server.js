const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const qr = require('qr-image')

const app = express();

const {
  addPromotion,
  addVisitor,
  getAllFlyers,
  getFlyer,
  addPromoter,
  isValidRedemtion,
  addRedemtion
} = require('./database/queries')

const port = process.env.PORT || 3000

const ROOT_DIR = path.resolve(__dirname, "./");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(`${ROOT_DIR}/public`));
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/promotion', (req, res) => {
  console.log('req.body:', req.body)

  addPromotion(req.body)
    .then((promotionId) => {
      res.redirect(`/details/${promotionId}`)
  })
})

app.get('/', (req, res) => {
  // res.render('flyers')
  getAllFlyers()
    .then((flyers) => {
      // console.log('flyers', flyers)
      res.render('flyers', {flyers})
    })
    .catch(console.error)
})


app.get('/details/:id', (req, res) => {
  // res.render('flyer')
  // console.log('req.params', req.params)

  getFlyer(req.params.id)
    .then((flyer) => {
      console.log('flyer', flyer[0])
      res.render('flyer', {flyer: flyer[0]})
    })
    .catch(console.error)
})
  
app.post('/promoter/:eventId', (req, res) => {
  console.log('req.body:', req.body)

  const { eventId } = req.params

  addPromoter(req.body)
    .then((promoterId) => {
      const detailsLink = `/details/${eventId}/${promoterId}`

      const promotersEmail = req.body.email

      // send detailsLink in email to promotersEmail

      res.redirect(`/details/${eventId}`)
    })
})

app.get('/visitor/:promoterId', (req, res) => {
  // render form to accept visitor's email
  res.render('promotion-form')
  // form action should include promoterId
})


app.post('/visitor/:promotionId/:promoterId?', (req, res) => {
  const { visitorEmail } = req.body
  const { promoterId } = req.params

  const flyersPromoterId = 123

  addVisitor(visitorEmail)
    .then((visitorId) => {
      const redeemUrl = `/redeem/${promotionId}/${promoterId || flyersPromoterId}/${visitorId}`
      const qrImage = qr.image(redeemUrl, { type: 'png' })

      // send email to visitorEmail with qrImage
      qrImage.pipe(require('fs').createWriteStream('qrImage.png'))

      res.send(`an email has been sent to ${visitorEmail} with a qr code`)
    })
})


app.get('/redeem/:promotionId/:promoterId/:visitorId', (req, res) => {
  if (isValidRedemtion(req.params)) {
    addRedemtion(req.params)
    res.send('Valid!')
  } else {
    res.send('Invalid!')
  }
})


app.listen(port, () => {
  console.log('Listening for parties on port: ', port)
})

module.exports = app
