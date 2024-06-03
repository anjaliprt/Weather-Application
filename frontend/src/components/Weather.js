// src/components/Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?city=${city}`);
      if (response.data) {
        setWeather(response.data);
        setError(null);
      } else {
        setError('City not found.');
        setWeather(null);
    } 
  }
    catch (error) {
      setError('404! There was an error fetching the weather data.');
      setWeather(null);
    }
  };
  
  return (
    <div className="weather-container">
     <h1 className="title">Weather App</h1>
    
        <div className="input-group">
      <input
        type="text"
        placeholder="Enter city"       
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather} className="fetch-button">Get Weather</button>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      {weather && (
         <div className="weather-info">
          
          <h2>Weather in {city}</h2>
         {/* <pre>{JSON.stringify(weather, null, 2)}</pre>  */}
          <div className="weather-details">
            <p><strong>Temperature :</strong> {Math.round(weather.main.temp - 273.15)} °C</p>
            <p><strong>Humidity :</strong> {weather.main.humidity} %</p>
            <p><strong>Conditions :</strong> {weather.weather[0].main}</p>
            <p><strong>Wind Speed :</strong> {weather.wind.speed} Km/H</p>
            {/* Add more weather details as needed */}
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Weather;
