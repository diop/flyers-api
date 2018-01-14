const router = require('express').Router()

const { isValidRedemtion, addRedemtion } = require('../database/queries')

const validHTML = '<html><body style="background-color:limegreen;">Valid code!</body></html>'
const invalidHTML = '<html><body style="background-color:red;">Invalid code!</body></html>'

router.get('/:eventId/:promoterId/:visitorId', (req, res) => {
  isValidRedemtion(req.params)
    .then(valid => {
      if (valid) {
        addRedemtion(req.params)
          .then(() => {
            res.send(validHTML)
          })
          .catch(console.error)
      } else {
        res.send(invalidHTML)
      }

    })
})

module.exports = router
