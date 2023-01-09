const express = require('express')
const router = express.Router()


//controllers
const { signup_post, login_post, forgotPassword } = require('../controllers/authController')

//login and signup routes
router.post('/signup', signup_post)
router.post('/login', login_post)
router.post('/forgotPassword', forgotPassword)


module.exports = router;