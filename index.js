const express = require('express')
const cors = require('cors')
const path = require('path')
const loki = require('lokijs')
const nanoid = require('nanoid')

const db = new loki('./db.json')

const PORT = 8080

const app = express()

app.use(cors())
app.use(express.json())

// users

app.get('/users', (req, res) => {
  db.loadDatabase({}, () => {
    const users = db.getCollection('users')
    const result = users.find({})
    res.status(200).json(result)
  })
})

app.get('/users/:id', (req, res) => {
  db.loadDatabase({}, () => {
    const users = db.getCollection('users')
    const result = users.findOne({ id: parseInt(req.params.id) })
    res.status(200).json(result)
  })
})

app.post('/users', (req, res) => {
  db.loadDatabase({}, () => {
    const users = db.getCollection('users')
    const id = Math.max(0, Math.max(...users.data.map(({ id }) => id))) + 1
    const user = { id, ...req.body }
    users.insert(user)
    db.saveDatabase()
    res.status(201).json(user)
  })
})

app.delete('/users/:id', (req, res) => {
  db.loadDatabase({}, () => {
    const users = db.getCollection('users')
    users.findAndRemove({ id: parseInt(req.params.id) })
    db.saveDatabase()
    res.status(200).json({message: 'user has been deleted'})
  })
})

app.put('/users/:id', (req, res) => {
  db.loadDatabase({}, () => {
    const users = db.getCollection('users')
    const result = users.findOne({ id: parseInt(req.params.id) })
    const user = { ...result, ...req.body }
    users.update(user)
    db.saveDatabase()
    res.status(200).json({message: 'user has been updated'})
  })
})

// promos

app.get('/promos', (req, res) => {
  db.loadDatabase({}, () => {
    const promos = db.getCollection('promos')
    const result = promos.find({})
    res.status(200).json(result)
  })
})

app.get('/promos/:key', (req, res) => {
  db.loadDatabase({}, () => {
    const promos = db.getCollection('promos')
    const result = promos.findOne({ key: req.params.key })
    res.status(200).json(result)
  })
})

app.post('/promos', (req, res) => {
  db.loadDatabase({}, () => {
    const promos = db.getCollection('promos')
    const promo = { key: nanoid(), ...req.body }
    promos.insert(promo)
    db.saveDatabase()
    res.status(201).json(promo)
  })
})

app.delete('/promos/:key', (req, res) => {
  db.loadDatabase({}, () => {
    const promos = db.getCollection('promos')
    promos.findAndRemove({ key: req.params.key })
    db.saveDatabase()
    res.status(200).json({message: 'promo has been deleted'})
  })
})

app.put('/promos/:key', (req, res) => {
  db.loadDatabase({}, () => {
    const promos = db.getCollection('promos')
    const result = promos.findOne({ key: req.params.key })
    const promo = { ...result, ...req.body }
    promos.update(promo)
    db.saveDatabase()
    res.status(200).json({message: 'promo has been updated'})
  })
})

// server

app.use(express.static(path.resolve(__dirname, 'client', 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})
