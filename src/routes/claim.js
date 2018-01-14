const router = require('express').Router()

const { addVisitor } = require('../database/queries')

router.get('/:promoterId', (req, res) => {
  // render form to accept visitor's email
  res.render('event-form')
  // form action should include promoterId
})

router.post('/:eventId/:promoterId?', (req, res) => {
  const { visitorEmail } = req.body
  const { promoterId } = req.params

  const flyersPromoterId = 123

  addVisitor(visitorEmail)
    .then((visitorId) => {
      const redeemUrl = `/redeem/${eventId}/${promoterId || flyersPromoterId}/${visitorId}`
      const qrImage = qr.image(redeemUrl, { type: 'png' })

      // send email to visitorEmail with qrImage
      qrImage.pipe(require('fs').createWriteStream('qrImage.png'))

      res.send(`an email has been sent to ${visitorEmail} with a qr code`)
    })
})

module.exports = router
