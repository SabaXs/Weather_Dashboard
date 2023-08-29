import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import InputForm from './InputForm';
import './App.css';

const API_KEY = 'b87b8a8d633ddfd8ea5b2080ef3ed9cc';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          setWeatherData(null);
        });
    }
  }, [city]);

  return (
    <div className="app">
      <h1>Weather Forecast Using APIs</h1>
      <InputForm setCity={setCity} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
