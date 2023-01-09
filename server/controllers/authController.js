const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../middleware/adminMiddleware')
const maxAge = 3 * 24 * 60 * 60;


const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, {
        expiresIn: maxAge
    })
}

//handle errors for login and signup
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {email: '', password: ''};
    
    //incorrect email
    if(err.message === 'incorrect email') {
        errors.email = 'email is not registered'
    }
    
    //incorrect password
    if(err.message === 'incorrect password') {
        errors.password = 'password is incorrect'
    }

    //duplicate email error code
    if(err.code === 11000) {
        errors.email = 'email is already registered';
        return errors;
    }
    //validation errors
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

exports.signup_post = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(200).json({email, token})
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

exports.login_post = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000 })
        res.status(200).json({ user: user._id })
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

//Forgot Password Initialization
exports.forgotPassword = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
    const { email } = req.body;
    console.log('email', email)
    
    try {
        console.log('we made it to try')
        const user = await User.findOne({ email });
        
        if (!user) {
        console.log('user does not exist')
        return next(new ErrorResponse("No email could not be sent", 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

    await user.save();

    // Create reset url to email to provided email
    //THIS MIGHT BE LOCAL8080
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    // HTML Message
    const message = `
        <h1>You have requested a password reset</h1>
        <p>Please make a put request to the following link:</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
        console.log('inside sendEmail')
        await sendEmail({
            to: user.email,
            subject: "Password Reset Request",
            text: message,
        });

        res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
        console.log('are we in the catch block?????');
        console.log('are we in the catch block?????');
        console.log('are we in the catch block?????');
        console.log('are we in the catch block?????');
        console.log('are we in the catch block?????');
        console.log('are we in the catch block?????');
        console.log(err);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        return next(new ErrorResponse("Email could not be sent", 500));
    }
    } catch (err) {
    next(err);
    }
};