const weatherService = require('../services/weatherService');

exports.getWeatherByCities = async (req, res) => {
  try {
    const { cityName, cityCode, page, limit } = req.query;
    const data = await weatherService.getWeatherByCities(cityName, cityCode, page, limit);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
