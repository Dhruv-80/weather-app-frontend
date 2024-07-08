// src/App.js
import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    console.log(`Fetching weather for ${city}`);
    try {
      const response = await fetch(`http://localhost:8080/weather?city=${city}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Weather data:', data);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <WeatherForm onCitySubmit={fetchWeather} />
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default App;
