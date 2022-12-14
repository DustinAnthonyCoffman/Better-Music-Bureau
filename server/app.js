//import modules
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

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

//routes
const routes = require('./routes/routes')
app.use('/', routes)
//port
const port = process.env.PORT || 8080

//listener
const server = app.listen(port, () => console.log(`Server is runing on port ${port}`))