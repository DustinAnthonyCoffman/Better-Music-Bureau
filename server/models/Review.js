const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        unique: true,
        lowercase: true
    },
    review: {
        type: String,
        unique: true,
        required: [true, 'Please submit your review']
    },
    artist: {
        type: String,
        required: [true, 'Please submit the artist you are reviewing']
    },
    user_id: {
        type: String,
        unique: true,
        required: true
    }
}, {timestamps: true});


module.exports = mongoose.model('Review', reviewSchema)

