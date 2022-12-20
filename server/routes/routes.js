const express = require('express')
const router = express.Router()

const {getReview, getReviews} = require('../controllers/reviewsController')


//normal routes should be able to get reviews and no CRUD actions
router.get('/', getReviews)
router.get('/:id', getReview)

module.exports = router;