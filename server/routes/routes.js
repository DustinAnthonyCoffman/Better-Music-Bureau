const express = require('express')
const router = express.Router()

const {getReview, getReviews} = require('../controllers/reviewsController')


//normal routes should be able to get reviews and no CRUD actions
router.get('/:id', getReview)
router.get('/', getReviews)

module.exports = router;