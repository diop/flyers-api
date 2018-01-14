const express = require('express')
const bodyParser = require('body-parser')

const { addPromotion, addVisitor } = require('./database/queries')

const port = process.env.PORT || 3000

const app = express()

const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res, next) => {
  res.send({message: 'Show me the parties'})
})

app.post('/promotion', urlencodedParser, (req, res) => {
  console.log('req.body:', req.body)

  addPromotion(req.body)
    .then(() => {
      res.end() // redirect to homepage
    })
    .catch(console.error)
})

app.post('/visitor', urlencodedParser, (req, res) => {
  console.log('req.body:', req.body)

  addVisitor(req.body.email)

  // send email with qr code

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
