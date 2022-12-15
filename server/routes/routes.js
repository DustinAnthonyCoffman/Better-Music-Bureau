const express = require('express')
const router = express.Router()

//controllers
const { signup_post, login_post } = require('../controllers/authController')

//middleware

//routes
router.post('/signup', signup_post)
router.post('/login', login_post)

module.exports = router