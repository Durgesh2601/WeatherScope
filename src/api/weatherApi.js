import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const weatherUrl = process.env.REACT_APP_WEATHER_API_URL;
const forecastUrl = process.env.REACT_APP_FORECAST_API_URL;
// Get api for weather data
const getWeatherData = async (cityName) => {
  const response = await axios.get(
    `${weatherUrl}?q=${cityName}&appid=${apiKey}&units=metric`
  );
  return response;
};

// Get api for forecast data
const getForecastData = async (cityName) => {
  const response = await axios.get(
    `${forecastUrl}?q=${cityName}&appid=${apiKey}&units=metric`
  );
  return response;
};

export { getWeatherData, getForecastData };
