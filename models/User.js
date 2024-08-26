const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/test_db", {})

// define user schema

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
});

const Users = mongoose.model('Users', userSchema)

module.exports = Users