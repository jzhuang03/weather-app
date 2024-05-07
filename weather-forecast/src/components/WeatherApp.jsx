import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import HourlyForecast from "./HourlyForecast";

const WeatherApp = () => {
  return (
    <div>
      <WeatherDisplay />
    </div>
  );
};

export default WeatherApp;
