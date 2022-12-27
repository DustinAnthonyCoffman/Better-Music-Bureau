//import modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
//all CRUD related routes to an admin
const adminRoutes = require('./routes/adminRoutes')

//signup and login
const authRoutes = require('./routes/authRoutes')

//normal get and get all routes for every user
const routes = require('./routes/routes')


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
app.use(express.static(path.join(__dirname, '../client/public'))); //needed to get express to use the public/images or other static files

//routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/reviews', routes)

//port
const port = process.env.PORT || 8080

//listener
const server = app.listen(port, () => console.log(`Server is runing on port ${port}`))