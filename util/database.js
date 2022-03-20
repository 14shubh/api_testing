const mongoose  = require("mongoose");
mongoose.connect('mongodb://localhost:27017/restAPI2').
then((res) => {
    console.log('Connection established');
}).catch((err) => {
    console.log('Connection error');
});

module.exports = mongoose.connection;