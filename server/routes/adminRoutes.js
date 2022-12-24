const express = require('express')
const router = express.Router()

// WE WILL NEED THESE!!!!!
// const {requireAuth} = require('../middleware/authMiddleware')
// router.use(requireAuth)

//controllers
const { getReviews, createReview, deleteReview, updateReview } = require('../controllers/reviewsController')

//CRUD reviews routes
//INSTEAD OF FILTERING ALL REVIEWS CLIENT SIDE, MAYBE USE A REVIEW.find({}).sort ON THE CONTROLLER REQUEST FOR THE API CALL IN ADMINREVIEW
//router.get('/', getAdminReviews)
// BUT IF ITS FASTER TO .FILTER ALL REVIEWS THEN KEEP IT THE WAY IT IS
router.get('/', getReviews)
router.post('/', createReview)
router.delete('/:id', deleteReview)
router.put('/:id', updateReview)


module.exports = router;