const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//attach endpoints to our server using the express router
const reviewRoutes = express.Router();

//import the review model
let Review = require('./models/review');

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

reviewRoutes.route('/').get(function(req, res) {
    Review.find(function(err, reviews) {
        if(err) {
            console.log(err);
        } else {
            res.json(reviews);
        }
    });
});

reviewRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Review.findById(id, function(err, review) {
        res.json(review);
    });
});


reviewRoutes.route('/add').post(function(req, res) {
    let review = new Review(req.body);
    review.save().then(review => {
        res.status(200).json({'review': 'review added successfully'});
    }).catch(err => {
        res.status(400).send('adding new review failed');
    });
});

reviewRoutes.route('/update/:id').post(function(req, res) {
    Review.findById(req.params.id, function(err, review) {
        if(!review){
            res.status(404).send('data is not found');
        } else {
            review.title = req.body.title;
            review.releaseDate = req.body.releaseDate;
            review.rating = req.body.rating;
            review.artist = req.body.artist;
            review.review = req.body.review;

            review.save().then(review => {
                res.json('Review updated');
            }).catch(err => {
                res.status(400).send('update is not possible')
            });
        };
    });
});




app.use('/reviews', reviewRoutes);

app.listen(port, function() {
    console.log(`Express app is running on port ${port}`);
});


