import React from "react";

export default function LocationAndTime() {
  let localData = {
    description: "Rainy",
    city: "Athens",
    date: "Tuesday, 11th Oct '22",
    time: "20:27",
  };
  return (
    <div className="LocationAndTime">
      <ul>
        <li className="weather-description" id="weather-description">
          {localData.description}
        </li>
        <li className="city-searched">{localData.city}</li>
        <li className="current-date">{localData.date}</li>
        <li className="time-now">
          last updated at <span>{localData.time}</span>
        </li>
      </ul>
    </div>
  );
}
