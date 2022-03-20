const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    firstName: {
        type : 'string',
        trim : true,
        required : true
    },
    lastName: {
        type : 'string',
        trim : true,
        required : true
    },
    email : {
        type : 'string',
        trim : true,
        required : true,
        unique : true
    },
    password : {
        type : 'string',
        required : true,
    }

});

module.exports = mongoose.model('Users',UserSchema);