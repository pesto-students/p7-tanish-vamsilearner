const axios = require('axios');
const { OPENWEATHERMAP_API_KEY } = require('../../.env');
require('dotenv').config({path: '../../.env'});

console.log("OPENWEATHERMAP_API_KEY:", OPENWEATHERMAP_API_KEY);

// Access the API key from the .env file
let apiKey = OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherByCities = async (cityName, cityCode, page, limit) => {  
    try {
      // Fetch data from the API based on city name or city code
      let response;
      if (cityName) {
        response = await axios.get(`${BASE_URL}/weather?q=${cityName}&appid=${apiKey}`);
      } else if (cityCode) {
        response = await axios.get(`${BASE_URL}/weather?id=${cityCode}&appid=${apiKey}`);
      } else {
        throw new Error('City name or city code must be provided');
      }
      // Create an array with the weather data (in this example, we use only one city, but you can extend it to multiple cities)
      const weatherData = [response.data];
      console.log('response', response);
  
      // Paginate the results
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
  
      return {
        currentPage: page,
        totalItems: weatherData.length,
        data: weatherData.slice(startIndex, endIndex),
      };
    } catch (error) {
      throw new Error(error.response.data.message || error.message);
    }
  };
  
  
  const getDetailedForecast = async (city, days = 7) => {
    try {
      if (!city) {
        throw new Error('City name must be provided');
      }
      // Fetch the detailed forecast data for the specified number of days
      const response = await axios.get(`${BASE_URL}/forecast?q=${city}&cnt=${days}&appid=${apiKey}`);
      // Format and return the data
      return {
        city: response.data.city.name,
        country: response.data.city.country,
        forecast: response.data.list.map((forecastItem) => ({
          date: forecastItem.dt_txt,
          main: forecastItem.weather[0].main,
          description: forecastItem.weather[0].description,
          temperature: forecastItem.main.temp,
          feelsLike: forecastItem.main.feels_like,
          pressure: forecastItem.main.pressure,
          humidity: forecastItem.main.humidity,
          windSpeed: forecastItem.wind.speed,
        })),
      };
    } catch (error) {
      throw new Error(error.response.data.message || error.message);
    }
  };
  

  const filterWeatherData = async (city, date, moment) => {
    try {
      if (!city || !date || !moment) {
        throw new Error('City, date, and moment must be provided');
      }
      // Fetch weather data for the specified city
      const response = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${apiKey}`);
      // Filter the data based on the given date and moment
      const filteredData = response.data.list.filter((item) => {
        const itemDate = item.dt_txt.split(' ')[0];
        const itemHour = parseInt(item.dt_txt.split(' ')[1].split(':')[0], 10);
        let timeOfDay;
        if (itemHour >= 5 && itemHour < 12) {
          timeOfDay = 'morning';
        } else if (itemHour >= 12 && itemHour < 17) {
          timeOfDay = 'afternoon';
        } else if (itemHour >= 17 && itemHour < 21) {
          timeOfDay = 'evening';
        } else {
          timeOfDay = 'night';
        }
        return itemDate === date && timeOfDay === moment;
      });
  
      // Format and return the filtered data
      return filteredData.map((item) => ({
        date: item.dt_txt,
        main: item.weather[0].main,
        description: item.weather[0].description,
        temperature: item.main.temp,
        feelsLike: item.main.feels_like,
        pressure: item.main.pressure,
        humidity: item.main.humidity,
        windSpeed: item.wind.speed,
      }));
    } catch (error) {
      throw new Error(error.response.data.message || error.message);
    }
  };

  const getCurrentWeather = async (city) => {
    try {
      if (!city) {
        throw new Error('City name must be provided');
      }
      // Fetch the current weather data for the specified city
      const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${apiKey}`);
      // Format and return the data
      return {
        city: response.data.name,
        country: response.data.sys.country,
        main: response.data.weather[0].main,
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
      };
    } catch (error) {
      throw new Error(error.response.data.message || error.message);
    }
  };

module.exports = {
  getWeatherByCities,
  getDetailedForecast,
  filterWeatherData,
  getCurrentWeather
};
