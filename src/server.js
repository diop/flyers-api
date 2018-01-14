const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')
const 

// const { addPromotion } from './database/actions'

const qr = require('qr-image')

const { addPromotion, addVisitor } = require('./database/queries')


const port = process.env.PORT || 3000


const ROOT_DIR = path.resolve(__dirname, "./");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(`${ROOT_DIR}/public`));
app.use(bodyParser.urlencoded({ extended: false }))

const app = express()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.render('flyers')
})

app.get('/details', (req, res) => {
  res.render('flyer')
})


app.get('/promote', (req, res) => {
  res.render('promote-form')
})

// app.get('/', (req, res, next) => {
//   res.send({message: 'Show me the parties'})
// })

app.post('/promotion', urlencodedParser, (req, res) => {

  console.log('req.body:', req.body)

  addPromotion(req.body)
    .then(() => {
      res.end() // redirect to homepage
    })
    .catch(console.error)
})

app.post('/visitor/:promoterCode?', urlencodedParser, (req, res) => {
  console.log('req.body:', req.body)
  console.log('req.parameters', req.params)

  addVisitor(req.body.email)

  // send email with qr code
  const qrImage = qr.image('data', { type: 'png' })
  qrImage.pipe(require('fs').createWriteStream('qrImage.png'))

  res.end()
})

app.post('/promoter', urlencodedParser, (req, res) => {
  console.log('req.body:', req.body)

  addVisitor(req.body)

  // generate and show link

  res.end()
})

app.listen(port, () => {
  console.log('Listening for parties on port: ', port)
})

module.exports = app
