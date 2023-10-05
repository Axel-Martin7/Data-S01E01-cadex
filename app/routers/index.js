const express = require('express');
const websiteRouter = require('./website');
const APIRouter = require('./api');

const router = express.Router();

router.use('/api', APIRouter); // Pour obtenir un cadex il faudra donc aller sur /api/cadex
router.use('/', websiteRouter);

module.exports = router;
