const router = require('express').Router()

const { addPromoter } = require('../database/queries')

router.post('/:eventId', (req, res) => {
  console.log('req.body:', req.body)

  const { eventId } = req.params

  addPromoter(req.body)
    .then((promoterId) => {
      const detailsLink = `/details/${eventId}/${promoterId}`

      const promotersEmail = req.body.email

      // send detailsLink in email to promotersEmail

      res.redirect(`/details/${eventId}`)
    })
})

module.exports = router
