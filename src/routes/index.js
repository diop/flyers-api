const router = require('express').Router()

const { getAllFlyers } = require('../database/queries')

router.get('/', (req, res) => {
  // res.render('flyers')
  getAllFlyers()
    .then((flyers) => {
      // console.log('flyers', flyers)
      res.render('flyers', {flyers})
    })
    .catch(console.error)
})

module.exports = router
