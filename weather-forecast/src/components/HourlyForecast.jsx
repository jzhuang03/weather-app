import React, { useState, useEffect } from "react";
import axios from "axios";

const HourlyForecast = ({ location }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=dfa5d578115aeeb6e91939e7fcf34cce`
        );

        setForecastData(response.data.list);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, [location]);

  const renderForecastItems = () => {
    
    return forecastData.map((item) => (
      <div className="forecast-item" key={item.dt}>
        <div className="forecast-time">{formatTime(item.dt)}</div>
        <div className="forecast-icon">
          <img
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
        <div className="forecast-temp">{item.main.temp.toFixed()}°F</div>
      </div>
    ));
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}:00`;
  };

  return <div className="forecast-container">{renderForecastItems()}</div>;
};

export default HourlyForecast;
