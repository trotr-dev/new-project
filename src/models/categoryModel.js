const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    namaKategori: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true
    },
    deskripsi: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;