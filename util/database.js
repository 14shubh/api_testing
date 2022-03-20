const mongoose  = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/restAPI2')
mongoose.connect('mongodb+srv://rootdb:rootdb@cluster0.jcqal.mongodb.net/restAPI2?retryWrites=true&w=majority').
then((res) => {
    console.log('Connection established');
}).catch((err) => {
    console.log('Connection error');
});

module.exports = mongoose.connection;