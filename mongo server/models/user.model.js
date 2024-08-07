const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Enter a valid email address or number"],
  },
  password: {
    type: String,
    required: [true, "Enter a valid password"],
  },
})

const User = mongoose.model('User',userSchema)
module.exports = User