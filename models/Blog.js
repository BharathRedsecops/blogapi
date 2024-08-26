const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test_db', {})

const blogSchema = mongoose.Schema({
    "blogTitle" : String,
    "content" : String,
    "pdate" : String,
    "img" : String
})


const Blog = mongoose.model('Blogs', blogSchema)

module.exports = Blog