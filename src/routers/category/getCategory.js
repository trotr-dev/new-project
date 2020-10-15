const express = require('express');
const { Category } = require('../../models');

const router = express.Router();

router.get('/category', async (req, res) => {
    console.log(res.locals);
    try {
        const category = await Category.find();
        res.send(category);
    } catch(e) {
        res.send({message: e.message});
    } 
});

module.exports = router;