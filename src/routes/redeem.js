const router = require('express').Router()

const { isValidRedemtion, addRedemtion } = require('../database/queries')

router.get('/:eventId/:promoterId/:visitorId', (req, res) => {
  if (isValidRedemtion(req.params)) {
    addRedemtion(req.params)
      .then(() => {
        res.send('Valid!')
      })
      .catch(console.error)
  } else {
    res.send('Invalid!')
  }
})

module.exports = router
