const express = require('express')
const Fish = require('./fish/fish-model')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' })
})

server.get('/fish', (req, res) => {
    Fish.getAll()
        .then(fish => {
            res.status(200).json(fish)
        })
        .catch(err => {
            res.status(500).json(error)
        })
})

module.exports = server