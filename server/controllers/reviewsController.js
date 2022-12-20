const Review = require('../models/Review');
const mongoose = require('mongoose')


// get a single review might be something we add to the global because non-admins should be able to search for reviews too
const getReview = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No matching review'})
    }
    const review = await Review.findById(id)
    if (!review) {
        return res.status(404).json({error: 'No matching review'})
    }
    res.status(200).json(review)
}


//find all reviews
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({}).sort({createdAt: -1});
        res.status(200).json({reviews: reviews})
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ error: 'No reviews' });
    }
}

//create review
const createReview = async (req, res) => {
    const {title, review, artist, userID} = req.body
    
    let emptyFields = []
    
    if(!title) {
        emptyFields.push('title')
    }
    if(!review) {
        emptyFields.push('review')
    }
    if(!artist) {
        emptyFields.push('artist')
    }
    if(!userID) {
        emptyFields.push('userID')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const createdReview = await Review.create({title, review, artist, userID})
        res.status(200).json(createdReview)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

//delete review
const deleteReview = async (req, res) => {
    const { id } = req.params
    console.log('did we make it to the controller?', id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No review exists'})
    }

    const review = await Review.findOneAndDelete({_id: id})

    if (!review) {
        return res.status(400).json({error: 'No review exists'})
    }
    console.log('REVIEW SUCCESSFULLY DELETED!!!')
    res.status(200).json(review)

}

//update review
const updateReview = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No review exists'})
    }

    const review = await Review.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!review) {
        return res.status(400).json({error: 'No review exists'})
    }

    res.status(200).json(review)
}

module.exports = {
    getReview,
    getReviews,
    createReview,
    deleteReview,
    updateReview
}


