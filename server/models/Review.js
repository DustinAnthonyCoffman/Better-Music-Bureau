const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        unique: true
    },
    review: {
        type: String,
        unique: true,
        required: [true, 'Please submit your review']
    },
    artist: {
        type: String,
        unique: false,
        required: [true, 'Please submit the artist you are reviewing']
    },
    userID: {
        type: String,
        unique: false,
        required: true
    },
    reviewImage: {
        type: String,
        unique: false,
        require: true
    },
    banner: {
        type: String,
        unique: false,
        require: false
    },
    author: {
        type: String,
        unique: false,
        require: true
    },
    authorBand: {
        type: String,
        unique: false,
        required: true
    }
}, {timestamps: true});


module.exports = mongoose.model('Review', reviewSchema)

