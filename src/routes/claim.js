const router = require('express').Router()

const { addVisitor } = require('../database/queries')
const { sendQrCodeEmail } = require('../utilities/email')

router.get('/:eventId/:promoterId?', (req, res) => {
  const { eventId, promoterId } = req.params

  res.render('claim-form', { flyerId: eventId, promoterId: promoterId })
})

router.post('/:eventId/:promoterId?', (req, res) => {
  const { visitorEmail } = req.body
  const { eventId, promoterId } = req.params

  const flyersPromoterId = 1

  addVisitor(visitorEmail)
    .then((visitorId) => {
      const redeemUrl = `/redeem/${eventId}/${promoterId || flyersPromoterId}/${visitorId}`
      const qrImage = qr.image(redeemUrl, { type: 'png' })

      sendQrCodeEmail(visitorEmail, qrImage, eventId)

      res.send(`an email has been sent to ${visitorEmail} with a qr code`)
    })
})

module.exports = router
