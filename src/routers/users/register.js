const express = require('express');
const { Users } = require('../../models');
const { registerSchema } = require('../../schema');

const router = express.Router();

router.post('/users/register', async (req, res) => {
    try {
        const { error, value } = registerSchema.validate(req.body);
        
        if (error) {
            throw new Error(error.message);
        }
        const {
            username,
            namaLengkap,
            email,
            password
        } = value;

        const user = new Users({
            username,
            email,
            namaLengkap,
            password
        });
    
        await user.save();
    
        res.send({ username, namaLengkap, email });
    } catch(e) {
        res.send({message: e.message});
    } 
});

module.exports = router;