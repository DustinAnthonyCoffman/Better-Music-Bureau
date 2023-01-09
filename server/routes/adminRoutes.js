const express = require('express')
const router = express.Router();
const {upload} = require('../middleware/adminMiddleware')

// WE WILL NEED THESE!!!!!
// const {requireAuth} = require('../middleware/authMiddleware')
// router.use(requireAuth)

//controllers
const { getReviews, createReview, deleteReview, updateReview } = require('../controllers/reviewsController')

//CRUD reviews routes
router.get('/', getReviews)
router.post('/', upload.single('reviewImage'), createReview)
router.delete('/:id', deleteReview)
router.put('/:id', updateReview)


module.exports = router;