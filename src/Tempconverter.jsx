import React, { useState } from 'react';
import './App.css'; 
import tempicon from '/tempicon.png'

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== '' ? ((parseFloat(value) * 9) / 5 + 32).toFixed(2) : '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== '' ? (((parseFloat(value) - 32) * 5) / 9).toFixed(2) : '');
  };

  return (
    <div className="converter-container">
      <img src={tempicon} alt="tempicon" />
      <h1>Temperature Converter</h1>
      <div className="label-container">
      <span> Celsius to Fahrenheit </span>
        <label>
          Celsius:
          <input type="number" value={celsius} onChange={handleCelsiusChange} />
        </label>
        
      </div>
      <div className="label-container">
      <span> Fahrenheit to Celsius </span>
        <label>
          Fahrenheit:
          <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
        </label>
        
      </div>
    </div>
  );
}

export default TemperatureConverter;
