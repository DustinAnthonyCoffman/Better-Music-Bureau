// multer is a middleware which handles “multipart/form-data” and 
// magically & makes the uploaded files and form data available to 
// us in request as request.files and request.body.
const multer = require('multer')
const nodemailer = require('nodemailer')

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


const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
            },
    });

    const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: options.to,
            subject: options.subject,
            html: options.text,
        };

    transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
};



module.exports = {sendEmail, upload};