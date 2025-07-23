const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

// Set up Nunjucks templating engine
const appViews = [
  path.join(__dirname, 'app/views'),
  path.join(__dirname, 'node_modules/govuk-frontend/')
]

nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true
})

app.set('view engine', 'html')

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// Session configuration
app.use(session({
  secret: 'prototype-session-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

// Static files
app.use('/assets', express.static(path.join(__dirname, 'node_modules/govuk-frontend/govuk/assets')))
app.use('/public', express.static(path.join(__dirname, 'app/assets')))

// Routes
app.use('/', require('./app/routes'))

// Start server
app.listen(port, () => {
  console.log(`GOV.UK prototype running at http://localhost:${port}`)
})

module.exports = app