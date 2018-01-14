const router = require('express').Router()

const { getFlyer } = require('../database/queries')

router.get('/:eventId/:promoterId?', (req, res) => {
  getFlyer(req.params.eventId)
    .then((flyer) => {
      res.render('flyer', {flyer: flyer[0]})
    })
    .catch(console.error)
})

module.exports = router
