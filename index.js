const express = require('express')
const cors = require('cors')
const loki = require('lokijs')

const db = new loki('./db.json')

const PORT = 8080

const app = express()

app.use(cors())
app.use(express.json())

app.get('/user/:id', (req, res) => {
  db.loadDatabase({}, () => {
    const users = db.getCollection('users')
    const user = users.find({ id: parseInt(req.params.id) })
    console.log(user)
  })
})

app.get('/promo/:promo', (req, res) => {
  db.loadDatabase({}, () => {
    const promos = db.getCollection('promos')
    const promo = promos.find({ promo: req.params.promo })
    console.log(promo)
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})
