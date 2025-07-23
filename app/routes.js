//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Store user data in session
function initializeSession(req) {
  if (!req.session.data) {
    req.session.data = {}
  }
}

// Start page
router.get('/', (req, res) => {
  res.render('start')
})

// User information page
router.get('/user-info', (req, res) => {
  initializeSession(req)
  res.render('user-info', { data: req.session.data })
})

router.post('/user-info', (req, res) => {
  initializeSession(req)
  
  // Store user information
  req.session.data.fullName = req.body.fullName
  req.session.data.email = req.body.email
  req.session.data.phone = req.body.phone
  
  res.redirect('/problem-details')
})

// Problem details page
router.get('/problem-details', (req, res) => {
  initializeSession(req)
  res.render('problem-details', { data: req.session.data })
})

router.post('/problem-details', (req, res) => {
  initializeSession(req)
  
  // Store problem details
  req.session.data.problemType = req.body.problemType
  req.session.data.problemDescription = req.body.problemDescription
  req.session.data.whenHappened = req.body.whenHappened
  
  res.redirect('/check-answers')
})

// Check answers page
router.get('/check-answers', (req, res) => {
  initializeSession(req)
  res.render('check-answers', { data: req.session.data })
})

router.post('/check-answers', (req, res) => {
  res.redirect('/confirmation')
})

// Confirmation page
router.get('/confirmation', (req, res) => {
  const data = req.session.data
  // Generate a random reference number for the confirmation
  const referenceNumber = 'PR-' + Math.floor(Math.random() * 900000 + 100000)
  data.referenceNumber = referenceNumber
  
  res.render('confirmation', { data: data })
})

// Change links for check answers page
router.get('/change/:field', (req, res) => {
  const field = req.params.field
  
  if (field === 'user-info') {
    res.redirect('/user-info?change=true')
  } else if (field === 'problem-details') {
    res.redirect('/problem-details?change=true')
  } else {
    res.redirect('/check-answers')
  }
})
