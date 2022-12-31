// multer is a middleware which handles “multipart/form-data” and 
// magically & makes the uploaded files and form data available to 
// us in request as request.files and request.body.
const multer = require('multer')

//for image storing
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../../client/public/images')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage})
// const upload = multer({storage: storage}).single('file')
// this creates error TypeError: Cannot read properties of undefined (reading 'transfer-encoding') idk if thats progress

module.exports = upload;