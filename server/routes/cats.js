const express = require('express')
const router = express.Router()

const db = require('../db/cats')

router.get('/', (req, res) => {
  db.getCats()
    .then(cats => {
      res.json(cats)
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
})

router.get('/:id', (req, res) => {
  db.getCatsById(req.params.id)
    .then(cat => {
      res.json(cat)
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
})

router.post('/', (req, res) => {
  let cat = {
    'name': req.body.name,
    'image': req.body.image,
    'life_story':req.body.life_story
  }
  db.newCat(cat)
    .then(res => {
      res.json(res)
    })
    .catch(err => res.status(500).send({message: "Server Error"}))

})

router.put('/:id', (req, res) => {
  let cat = {
    'name': req.body.name,
    'image': req.body.image,
    'life_story':req.body.life_story
  }
  db.updateCat(cat, req.params.id)
    .then(res => {
      res.json(res)
    })
    .catch(err => res.status(500).send({message: "Server Error"}))

})

module.exports = router