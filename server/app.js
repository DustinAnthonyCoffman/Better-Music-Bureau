//import modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const {requireAuth, checkuser} = require('./middleware/authMiddleware')

//WE MAY NEED TO USE BODY PARSER??
// var bodyParser = require('body-parser')

//app
const app = express()

//db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((err) => console.log('db connection error', err))

//middleware
app.use(morgan('dev'))
app.use(cors({origin: true, credentials: true}))
app.use(express.json()) //needed for sending json POSTS
app.use(express.urlencoded()) //needed for sending json POSTS
app.use(cookieParser())

//routes
app.use('/', routes)
app.get('*',(req, res) => {
    checkuser   
})

//port
const port = process.env.PORT || 8080

//listener
const server = app.listen(port, () => console.log(`Server is runing on port ${port}`))