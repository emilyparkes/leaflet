const path = require('path')
const express = require('express')

const server = express()

const addressRoutes = require('./routes/address')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('api/v1/add-adress', addressRoutes)

module.exports = server
