const router = require('express').Router()
const qr = require('qr-image')
const toString = require('stream-to-string')

const { addVisitor } = require('../database/queries')
const { sendQrCodeEmail } = require('../utilities/email')

router.get('/:eventId/:promoterId?', (req, res) => {
  const { eventId, promoterId } = req.params

  res.render('claim-form', { flyerId: eventId, promoterId: promoterId })
})

router.post('/:eventId/:promoterId?', (req, res) => {
  const { email } = req.body
  const { eventId, promoterId } = req.params

  const flyersPromoterId = 1

  addVisitor(email)
    .then((results) => {
      const visitorId = results[0].id
      const redeemUrl = `http://flyers.ai/redeem/${eventId}/${promoterId || flyersPromoterId}/${visitorId}`
      const qrImage = qr.image(redeemUrl, { type: 'svg' })

      toString(qrImage)
        .then(svgString => {
          // sendQrCodeEmail(email, svgString, eventId)
          // res.redirect(`/details/${eventId}/${promoterId ? promoterId : ''}`)
          res.send(svgString)
        })
    })
    .catch(console.error)
})

module.exports = router
