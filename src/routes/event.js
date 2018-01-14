const router = require('express').Router()

const { addEvent } = require('../database/queries')

router.get('/', (req, res) => {
  res.render('event-form')
})

router.post('/', (req, res) => {
  console.log('req.body:', req.body)

  addEvent(req.body)
    .then((eventId) => {
      res.redirect(`/details/${eventId}`)
  })
})

module.exports = router
