const express = require('express')
const Busboy = require('busboy')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  res.send({message: 'Show me the parties'})
})

app.post('/promotion', (req, res) => {

})

app.listen(port, () => {
  console.log('Listening for parties on port: ', port)
})

module.exports = app
