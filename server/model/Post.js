const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String, 
    image: String,
    author: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post',postSchema)
module.exports = Post