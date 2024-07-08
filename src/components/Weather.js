import React from 'react';

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No data available</p>;
  }

  // Convert temperature from Kelvin to Celsius and format to one decimal place
  const temperatureInCelsius = (weatherData.main.temp - 273.15).toFixed(1);

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {temperatureInCelsius}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
