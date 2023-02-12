require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('express-async-errors')
const { errorHandler } = require('./middleware/error')

class App {
  #app
  #routes

  constructor() {
    this.#app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.#app.use(express.json())
    this.#app.use(cors())
  }

  routes() {
    const { routes } = require('./routes/index.js')
    this.#app.use('/api', routes())
    this.#app.use(errorHandler)
  }

  listen() {
    this.#app.listen(process.env.PORT, () => console.log('App started'))
  }
}

exports.App = App
