const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  getCoords(req.query)
    .then(response => {
      res.send()
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

module.exports = router