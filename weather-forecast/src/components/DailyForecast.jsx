import React, { useState, useEffect } from "react";
import axios from "axios";

const DailyForecast = ({ location }) => {
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const fetchDailyForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=16&appid=dfa5d578115aeeb6e91939e7fcf34cce`
        );
        setDailyForecast(response.data.list);
      } catch (error) {
        console.error("Error fetching daily forecast:", error);
      }
    };

    fetchDailyForecast();
  }, [location]);

  const renderDailyForecast = () => {
    return dailyForecast.map((day) => (
      <div className="daily-forecast-item" key={day.dt}>
        <div>{new Date(day.dt * 1000).toLocaleDateString()}</div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
        <div>{day.weather[0].main}</div>
        <div>High: {day.temp.max.toFixed()}°F</div>
        <div>Low: {day.temp.min.toFixed()}°F</div>
      </div>
    ));
  };

  return (
    <div className="daily-forecast-container">
      <div className="scroll-container">{renderDailyForecast()}</div>
    </div>
  );
};

export default DailyForecast;
