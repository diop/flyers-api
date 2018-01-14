const router = require('express').Router()

const { addPromoter } = require('../database/queries')
const { sendEventLinkEmail } = require('../utilities/email')

router.get('/:eventId', (req, res) => {
  res.render('promote-form', { flyerId: req.params.eventId })
})

router.post('/:eventId', (req, res) => {
  console.log('req.body:', req.body)

  const { eventId } = req.params

  addPromoter(req.body)
    .then((promoterId) => {
      const detailsLink = `/details/${eventId}/${promoterId}`

      const promoterEmail = req.body.email

      sendEventLinkEmail(promoterEmail, detailsLink)

      res.send(`email with your event link sent to ${promoterEmail}`)
      // res.redirect(`/details/${eventId}`)
    })
})

module.exports = router
