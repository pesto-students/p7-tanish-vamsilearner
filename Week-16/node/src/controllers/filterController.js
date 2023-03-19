const weatherService = require('../services/weatherService');

exports.filterWeatherData = async (req, res) => {
  try {
    const { city, date, moment } = req.query;
    const data = await weatherService.filterWeatherData(city, date, moment);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
