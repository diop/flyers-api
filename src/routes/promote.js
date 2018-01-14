const router = require('express').Router()

const { addPromoter } = require('../database/queries')
const { sendEventLinkEmail } = require('../utilities/email')

router.get('/:eventId', (req, res) => {
  res.render('promote-form', { flyerId: req.params.eventId })
})

router.post('/:eventId', (req, res) => {
  const { eventId } = req.params

  addPromoter(req.body)
    .then((results) => {
      const promoterId = results[0].id

      const detailsLink = `http://www.flyers.ai/details/${eventId}/${promoterId}`

      const promoterEmail = req.body.email

      sendEventLinkEmail(promoterEmail, detailsLink, eventId)

      res.redirect(`/details/${eventId}`)
    })
    .catch(console.error)
})

module.exports = router
