const router = require('express').Router()

const { getFlyer } = require('../database/queries')

router.get('/:eventId/:promoterId?', (req, res) => {
  // res.render('flyer')
  // console.log('req.params', req.params)

  getFlyer(req.params.eventId)
    .then((flyer) => {
      console.log('flyer', flyer[0])
      res.render('flyer', {flyer: flyer[0]})
    })
    .catch(console.error)
})

module.exports = router
