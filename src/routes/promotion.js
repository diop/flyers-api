const router = require('express').Router()

const { addPromotion } = require('../database/queries')

router.post('/', (req, res) => {
  console.log('req.body:', req.body)

  addPromotion(req.body)
    .then((promotionId) => {
      res.redirect(`/details/${promotionId}`)
  })
})

module.exports = router
