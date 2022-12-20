const User = require('../models/User');
const jwt = require('jsonwebtoken');

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
    console.log('did we make it to the controller???', req.body)
    try {
        // const user = await User.create({email, password});
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
        console.log('is there something we can use here?', user)
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000 })
        res.status(200).json({ user: user._id })
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}


// exports.getUsers = async (req, res) => {
//     try{
//         const 
//     }
// }