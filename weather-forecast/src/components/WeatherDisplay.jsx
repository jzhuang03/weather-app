import React, { useState, useEffect } from "react";
import axios from "axios";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import NewsDisplay from "./News";

const WeatherDisplay = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=dfa5d578115aeeb6e91939e7fcf34cce`;

      axios.get(url).then((response) => {
        setData(response.data);
      });
    }
  }, [latitude, longitude]);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=dfa5d578115aeeb6e91939e7fcf34cce`
        )
        .then((response) => {
          setData(response.data);
          setLocation("");
        });
    }
  };

  // Function to get weather icon URL
  const getIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      {data && (
        <div className="container">
          <div className="left-container">
            <div className="top">
              <div className="main-info">
                <div className="location">
                  <h1>{data.name}</h1>
                </div>
                <div className="temp">
                  {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                </div>
                <div className="description">
                  {data.weather ? (
                    <div>
                      <img
                        src={getIconUrl(data.weather[0].icon)}
                        alt="Weather Icon"
                      />
                      <p>{data.weather[0].main}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="Hourly-Forecast">
              <h2> Hourly Forecast</h2>
              <HourlyForecast location={data.name} />
            </div>
          </div>
          <div className="right-container">
            <div className="Daily-Forecast">
              <h2>Daily Forecast</h2>
              <DailyForecast location={data.name} />
            </div>
          </div>
        </div>
      )}
      {data && (
        <div className="bottom">
          <h2 id="news-title">Top 5 Newsarticles from the New York Times</h2>
          <div className="scroll-container">
            <NewsDisplay />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
