const express = require('express');
const mongoose = require('mongoose');

const { host, port } = require('../../config');
const dbConnect = require('../connection/dbConnect');
const modelMiddleware = require('../middleware/modelMiddleware');
const router = require('../routers');

const app = express();

app.use(modelMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect(mongoose);
router(app);

app.listen(port, () => console.log(`server running at http://${host}:${port}`));