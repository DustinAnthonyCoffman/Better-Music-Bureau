const express = require('express')
const router = express.Router()

//controllers
const {getTest} = require('../controllers/test')

//middleware

//routes
router.get('/test', getTest)
router.post('/test', getTest)

module.exports = router