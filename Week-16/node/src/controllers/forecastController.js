const weatherService = require('../services/weatherService');

exports.getDetailedForecast = async (req, res) => {
  try {
    const { city, days } = req.query;
    const data = await weatherService.getDetailedForecast(city, days);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
