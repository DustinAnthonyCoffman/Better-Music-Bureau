const express = require('express')
const router = express.Router()

// WE WILL NEED THESE!!!!!
// const {requireAuth} = require('../middleware/authMiddleware')
// router.use(requireAuth)

//controllers
const { getReviews, createReview, deleteReview, updateReview } = require('../controllers/reviewsController')

//CRUD reviews routes
router.get('/', getReviews)
router.post('/', createReview)
router.delete('/:id', deleteReview)
router.put('/:id', updateReview)


//TODO THIS IS FOR IMAGE UPLOAD ABILITIES FOR ADMINS
router.post('/upload', function (req, res) {
    // on frontend the input tag as name 'uploadFile'
    // as -> <input type="file" name="uploadFile" />
    let uploadFile = req.files.uploadFile;

    // e.g. "/images/myImage.jpg"
    // To be served later as http://yourdomain.com/images/myImage.jpg
    const imageUrl = `/images/${uploadFile.name}`;

    // move from temp location to your server's public/images directory
    uploadFile
          .mv(path.join(__dirname, 'public', 'images', uploadFile.name))
          .then(() => {
                // perform database save operation here and then give appropriate response
                res.json({ message: 'File uploaded', imageUrl: imageUrl });
          })
          .catch((error) => console.log(error));
});

module.exports = router;