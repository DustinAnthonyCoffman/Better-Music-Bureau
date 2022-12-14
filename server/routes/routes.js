const express = require('express')
const router = express.Router()

//controllers
const {getTest} = require('../controllers/test')
const { signup_post } = require('../controllers/signup')

//middleware

//routes
router.get('/test', getTest)
router.post('/signup', signup_post)

module.exports = router