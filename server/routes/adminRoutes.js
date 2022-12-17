const express = require('express')
const router = express.Router()
const {requireAuth} = require('../middleware/authMiddleware')
router.use(requireAuth)

//controllers
const { signup_post, login_post } = require('../controllers/authController')
const { getReview, createReview, deleteReview, updateReview } = require('../controllers/reviewsController')

//login and signup routes
router.post('/signup', signup_post)
router.post('/login', login_post)

//CRUD reviews routes
router.get('/', getReview)
router.post('/', createReview)
router.delete('/:id', deleteReview)
router.patch('/:id', updateReview)


module.exports = router;