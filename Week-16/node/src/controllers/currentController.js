const weatherService = require('../services/weatherService');

exports.getCurrentWeather = async (req, res) => {
  try {
    const { city } = req.query;
    const data = await weatherService.getCurrentWeather(city);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
