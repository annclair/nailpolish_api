'use strict'

let port = process.env.PORT || 4000
let server = require('./server.js')

server.startServer(port)