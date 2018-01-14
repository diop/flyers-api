const router = require('express').Router()

const { addEvent } = require('../database/queries')

router.get('/', (req, res) => {
  res.render('event-form')
})

router.post('/', (req, res) => {
  addEvent(req.body)
    .then((eventId) => {
      res.redirect(`/details/${eventId}`)
    })
    .catch(console.error)
})

module.exports = router
