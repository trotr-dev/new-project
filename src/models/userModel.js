const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 4,
        maxlength: 12,
        required: true
    },
    namaLengkap: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        minlength: 6,
        maxlength: 30,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 20,
        required: true
    }
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;