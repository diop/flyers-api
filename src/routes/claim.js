const router = require('express').Router()
const qr = require('qr-image')

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
    .then((visitorId) => {
      const redeemUrl = `/redeem/${eventId}/${promoterId || flyersPromoterId}/${visitorId}`
      const qrImage = qr.image(redeemUrl, { type: 'png' })

      sendQrCodeEmail(email, qrImage, eventId)

      res.redirect(`/details/${eventId}/${promoterId ? promoterId : ''}`)
    })
    .catch(console.error)
})

module.exports = router
