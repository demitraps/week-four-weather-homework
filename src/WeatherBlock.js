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
      <div>
        <a href="https://github.com/demitraps/week-four-weather-homework">
          Open source code{" "}
        </a>
      </div>
    </div>
  );
}
