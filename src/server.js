const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const qr = require('qr-image')

const indexRoute = require('./routes')
const detailsRoute = require('./routes/details')
const promoteRoute = require('./routes/promote')
const eventRoute = require('./routes/event')
const redeemRoute = require('./routes/redeem')
const claimRoute = require('./routes/claim')

const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(express.static('src/public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/details', detailsRoute)
app.use('/promote', promoteRoute)
app.use('/event', eventRoute)
app.use('/redeem', redeemRoute)
app.use('/claim', claimRoute)

app.listen(port, () => {
  console.log('Listening for parties on port:', port)
})

module.exports = app
