const User = require('../models/User');

module.exports.signup_post = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.create({email, password});
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({user: user._id})
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}