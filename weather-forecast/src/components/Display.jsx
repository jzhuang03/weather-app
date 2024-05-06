import React from "react";

export const Display = ({ weather }) => {
  const currentWeather = weather.current;
  const iconUrl = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontStyle: "italic" }}>Current Weather</h2>
      <p>
        <strong>Description:</strong> {currentWeather.weather[0].description}
      </p>
      <p>
        <strong>Temperature:</strong>{" "}
        <span style={{ fontWeight: "bold" }}>{currentWeather.temp} K</span>
      </p>
      <p>
        <strong>Humidity:</strong>{" "}
        <span style={{ fontWeight: "bold" }}>{currentWeather.humidity}%</span>
      </p>
    </div>
  );
};

export default Display;
