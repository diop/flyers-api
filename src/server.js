const express = require('express')
const bodyParser = require('body-parser')

const { addPromotion } from './database/actions'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  res.send({message: 'Show me the parties'})
})

app.post('/promotion', (req, res) => {
  console.log('req.body:', req.body)

  addPromotion(req.body)
})

app.listen(port, () => {
  console.log('Listening for parties on port: ', port)
})

module.exports = app
