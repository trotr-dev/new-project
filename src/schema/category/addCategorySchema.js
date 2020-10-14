const Joi = require('joi');

const addCategorySchema = Joi.object({
    namaKategori: Joi.string()
        .min(3)
        .max(30)
        .required(),
    deskripsi: Joi.string()
        .min(5)
        .max(50)
        .required()
});

module.exports = addCategorySchema;