require('../util/database');
const User = require('../schema/UserSchema');

exports.homePage = (req, res, next) => {
    res.send('Welcome to home page');
};

exports.signUp = (req, res, next) => {
    User.create(req.body).then((result) => {
        console.log('signUp successful');
        return res.status(201).json(result);
    }).catch((err) => {
        console.log('signUp failed');
        return res.status(500).json(err);
    });
};