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
  db.getCatById(req.params.id)
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
    .then(cat_id => {
      res.json(cat_id)
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
    .then(cat => {
      res.json(cat)
    })
    .catch(err => res.status(500).send({message: "Server Error"}))

})

module.exports = router