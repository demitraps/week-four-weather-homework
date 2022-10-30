import React from "react";

export default function WeatherAdditions() {
  let currentData = {
    feeling: 23,
    min: 12,
    max: 18,
    humidity: 45,
    wind: 10,
  };
  return (
    <div className="WeatherAdditions">
      <ul>
        <li className="weather-additions">
          Feels like
          <i className="fa-solid fa-thermometer additions-icon"></i>
        </li>
        <li className="additions-values" id="feels-like-temp">
          {currentData.feeling}°C
        </li>

        <li className="weather-additions">
          Min/Max
          <i className="fa-solid fa-temperature-low additions-icon"></i>
        </li>
        <li className="additions-values">
          <span id="min-today">{currentData.min}°C</span>/
          <span id="max-today">{currentData.max}°C</span>
        </li>

        <li className="weather-additions">
          Humidity <i class="fa-solid fa-droplet additions-icon"></i>
        </li>
        <li className="additions-values" id="humidity">
          {currentData.humidity}%
        </li>

        <li className="weather-additions">
          Wind speed <i class="fa-solid fa-wind additions-icon"></i>
        </li>
        <li className="additions-values wind" id="wind">
          {currentData.wind}km/h
        </li>
      </ul>
    </div>
  );
}
