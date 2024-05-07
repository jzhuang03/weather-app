import React, { useState, useEffect } from "react";
import axios from "axios";

const HourlyForecast = ({ location }) => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchHourlyData = async () => {
      const response = await axios.get(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={latitude}&lon={longitude}&appid=dfa5d578115aeeb6e91939e7fcf34cce`
      );
      setHourlyData(response.data.list);
    };

    fetchHourlyData();
  }, [location]);

  return (
    <div className="hourly-forecast">

    </div>
  );
};

export default HourlyForecast;
