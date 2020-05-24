var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var Review = new Schema({
    title: {
        type: String
    },
    releaseDate: {
        type: Number
    },
    rating: {
        type: Number
    },
    artist: {
        type: String
    },
    review: {
        type: String
    }
});

module.exports = mongoose.model('Review', Review);