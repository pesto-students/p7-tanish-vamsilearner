const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/citiesController');

router.get('/', citiesController.getWeatherByCities);

module.exports = router;
