const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = async (req, res, next) => {
    console.log('is this the issue???')
    console.log('is this the issue???')
    console.log('is this the issue???')
    const {authorization} = req.headers
    console.log('authorization headers', authorization)
    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }
    //the token must be obtained by splitting the part we need
    //'Bearer 3i2nrw9nfs9eufns.3435adsfjsnjsdfn.34932ef'
    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')
        next()
    } catch(err) {
        console.log('error verifying token', err)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

//check current user by their token so we can use users information in templates like to display emails etc.
//res.locals lets us specify a local variable property that we've named .user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log('inside check user, checking for jwt in cookie', token)
    if (token) {
        jwt.verify(token, 'my super secret', async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    }
    else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };