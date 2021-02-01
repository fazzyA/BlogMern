const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
name: String,
email: {
    type: String,
    required: true
},
password: String,
role: String,
username: String
});

const User = mongoose.model('User', userSchema)
module.exports = User