const express = require('express')
const router = express.Router()

// WE WILL NEED THESE!!!!!
// const {requireAuth} = require('../middleware/authMiddleware')
// router.use(requireAuth)

//controllers
const { getReview, createReview, deleteReview, updateReview } = require('../controllers/reviewsController')


//CRUD reviews routes
router.get('/', getReview)
router.post('/', createReview)
router.delete('/:id', deleteReview)
router.patch('/:id', updateReview)


module.exports = router;