const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const 

// const { addPromotion } from './database/actions'

const app = express()

const ROOT_DIR = path.resolve(__dirname, "./");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(`${ROOT_DIR}/public`));
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

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

app.post('/promotion', (req, res) => {
  console.log('req.body:', req.body)

  addPromotion(req.body)
})

app.listen(port, () => {
  console.log('Listening for parties on port: ', port)
})

module.exports = app
