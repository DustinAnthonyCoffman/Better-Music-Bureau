var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    title: String,
    releaseDate: Number,
    rating: Number,
    artist: String,
    review: String
});

module.exports = mongoose.model('Review', reviewSchema);