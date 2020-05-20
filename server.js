const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//connect to the database with Mongoose
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//Put all api calls before the catch all /* route below


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app is running on port ${port}`);
});


