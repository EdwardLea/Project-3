require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
mongoose.plugin(require('mongoose-unique-validator'))
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { dbURI } = require('./config/environment')
const app = express()

mongoose.connect(dbURI)

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use('/api', routes)

app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Up and running on port ${process.env.PORT}`))

module.exports = app
