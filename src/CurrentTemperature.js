import React from "react";

export default function CurrentTemperature() {
  let currentData = {
    temperature: 18,
  };
  return (
    <ul className="CurrentTemperature">
      <li className="temperature-now">
        <span id="displayed-temperature">{currentData.temperature}</span>
        <span id="displayed-unit">°C</span>
      </li>
      <li className="unit-switch" id="switch">
        switch to
        <a href="/" id="fahreneit-switch">
          °F
        </a>
        |
        <a href="/" id="celsius-switch">
          °C
        </a>
      </li>
      <li className="weather-now-icon">
        <i className="fa-solid fa-cloud-moon-rain" id="weather-icon"></i>
      </li>
    </ul>
  );
}
