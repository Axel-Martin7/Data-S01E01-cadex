const express = require('express');
const mainController = require('../../controllers/website/mainController');
const mainErrorController = require('../../controllers/website/error');

const router = express.Router();

router.get('/', mainController.getHomePage);

router.use(mainErrorController.error404);

module.exports = router;
