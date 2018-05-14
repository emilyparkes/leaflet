const path = require('path')
const express = require('express')

const server = express()

// these are the routes we have created

// Default route for non-API requests
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// })

module.exports = server
