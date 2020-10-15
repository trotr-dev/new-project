const express = require('express');
const router = express.Router();

router.get('/users', async (req, res) => {
	const { UserModel } = res.locals;
	try {
		const users = await UserModel.getUsers();
		res.send(users);
	} catch (e) {
		res.send({ message: e.message });
	}
});

module.exports = router;