const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const qr = require('qr-image')

const indexRoute = require('./routes')
const detailsRoute = require('./routes/details')
const promoterRoute = require('./routes/promoter')
const promotionRoute = require('./routes/promotion')
const redeemRoute = require('./routes/redeem')
const visitorRoute = require('./routes/visitor')

const app = express();

const port = process.env.PORT || 3000

const ROOT_DIR = path.resolve(__dirname, "./");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(`${ROOT_DIR}/public`));
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/details', detailsRoute)
app.use('/promoter', promoterRoute)
app.use('/promotion', promotionRoute)
app.use('/redeem', redeemRoute)
app.use('/visitor', visitorRoute)

app.listen(port, () => {
  console.log('Listening for parties on port: ', port)
})

module.exports = app
