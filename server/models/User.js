const mongoose = require('mongoose');
const { isEmail } = require('validator');
const validator = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
});


// create a static method on our model to check password and login user
userSchema.statics.login = async function(email, password) {
    
    if(!email || !password) {
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({ email });
    
    if (user) {
        //compare hashed passwords and user's entered password using bcrypt
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
        throw Error('Incorrect password')
    }
    throw Error('Incorrect email')
}


userSchema.statics.signup = async function(email, password) {
    if(!email || !password) {
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }
    
    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})
    return user
}

const User = mongoose.model('user', userSchema)

module.exports = User;