const router = require('express').Router()

const { getAllFlyers } = require('../database/queries')

router.get('/', (req, res) => {
  // res.render('flyers')
  getAllFlyers()
    .then((flyers) => {
      res.render('flyers', {flyers})
    })
    .catch(console.error)
})

router.get('/admin', (req, res) => {
  res.render('admin')
})


module.exports = router
