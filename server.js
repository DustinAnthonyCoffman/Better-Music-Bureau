const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const reviewRoutes = express.Router();
const PORT = 4000;



let Review = require('./models/review.js');





//creeate our middleware using express
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/bmb', { useNewUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB database connection established');
})

reviewRoutes.route('/').get(function(req, res) {
    Review.find(function(err, reviews) {
        if(err) {
            console.log(err);
        } else {
            res.json(reviews);
        }
    });
});

//attach all CRUD endpoints

//GET
reviewRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Review.findById(id, function(err, review) {
        res.json(review);
    });
});


//POST
reviewRoutes.route('/add').post(function(req, res) {
    let review = new Review(req.body);
    review.save().then(review => {
        res.status(200).json({'review': 'review added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new review failed');
    });
});


//UPDATE
reviewRoutes.route('/update/:id').post(function(req,res) {
    Review.findById(req.params.id, function(err, review) {
        if(!review) {
            res.status(404).send('data is not found');
        }
        else {
            review.title = req.body.title;
            review.releaseDate = req.body.releaseDate;
            review.rating = req.body.rating;
            review.artist = req.body.artist;
            review.review = req.body.review;

            review.save().then(review => {
                res.json('Review updated');
            })
            .catch(err => {
                res.status(400).send('Update failed');
            })
        }
        });
    });




app.use('/reviews', reviewRoutes);

app.listen(PORT, function() {
    console.log('Server is running on Port: ' + PORT);
});
