import React from "react";
import "./WeatherBlock.css";
import LocationAndTime from "./LocationAndTime";
import CurrentTemperature from "./CurrentTemperature";
import SearchForm from "./SearchForm";
import WeatherAdditions from "./WeatherAdditions";

export default function WeatherBlock() {
  return (
    <div className="row WeatherBlock">
      <div className="col-10">
        <LocationAndTime />
        <CurrentTemperature />
        <SearchForm />
      </div>
      <div className="col-2">
        <WeatherAdditions />
      </div>
    </div>
  );
}
