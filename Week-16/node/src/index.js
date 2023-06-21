const express = require('express');
const citiesRoutes = require('./routes/cities');
const forecastRoutes = require('./routes/forecast');
const filterRoutes = require('./routes/filter');
const currentRoutes = require('./routes/current');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/cities', citiesRoutes);
app.use('/forecast', forecastRoutes);
app.use('/filter', filterRoutes);
app.use('/current', currentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
