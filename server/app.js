//import modules
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

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

//routes
const routes = require('./routes/routes')
app.use('/', routes)

app.get('*', (req, res) => {
    res.sendFile('build/index.tsx', {root: root})
})
//port
const port = process.env.PORT || 8080

//listener
const server = app.listen(port, () => console.log(`Server is runing on port ${port}`))