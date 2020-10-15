const express = require('express');
const { registerSchema } = require('../../schema');

const router = express.Router();

router.post('/users/register', async (req, res) => {
    const { UserModel } = res.locals;
    try {
        const { error, value } = registerSchema.validate(req.body);
        
        if (error) {
            throw new Error(error.message);
        }
        const {
            username,
            namaLengkap,
            email
        } = value;

        await UserModel.registerUser(value);
    
        res.send({ username, namaLengkap, email });
    } catch(e) {
        res.send({message: e.message});
    } 
});

module.exports = router;