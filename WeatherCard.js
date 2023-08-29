import React from 'react';

function WeatherCard({ weatherData }) {
  const { name, main, weather } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Weather: {weather[0].main}</p>
    </div>
  );
}

export default WeatherCard;
