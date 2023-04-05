const express = require('express');
const router = express.Router();
const currentController = require('../controllers/currentController');

router.get('/', currentController.getCurrentWeather);

module.exports = router;
