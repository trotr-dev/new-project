const mongoose = require('mongoose');
const dbConnect = require('../connection/dbConnect');
const UserModel = require('../models/UserModel');
const { Users } = require('../models');

const db = dbConnect(mongoose);

const modelMiddleware = (req, res, next) => {
    res.locals.UserModel = new UserModel({ db, model: Users });
    next();
}


module.exports = modelMiddleware;
