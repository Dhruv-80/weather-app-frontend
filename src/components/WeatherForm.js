// src/components/WeatherForm.js
import React, { useState } from 'react';

const WeatherForm = ({ onCitySubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', city);
    if (city.trim()) {
      onCitySubmit(city);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        required
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
