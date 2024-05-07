import React, { useState } from "react";
import Button from "@mui/material/Button";

const Location = ({ onLocationSubmit }) => {
  const [input, setInput] = useState("");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!input.trim()) {
      setError("Please enter a location");
      return;
    }

    // Clear error message
    setError("");

    try {
      const response = await fetch(`
        http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid308d10ef2421428fdf8bcb671d0a9426
        `);
      if (!response.ok) {
        throw new Error("Failed to fetch coordinates");
      }

      const data = await response.json();
      if (data.length === 0) {
        setError("Location not found");
        return;
      }

      const [data, setData] = useState({})
      const [location, setLocation] = useState('')
    
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
    
      const searchLocation = (event) => {
        if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
          })
          setLocation('')
        }
      }

      // Extract latitude and longitude
      const { lat, lon } = data[0];
      setLatitude(lat);
      setLongitude(lon);
      onLocationSubmit({ latitude: lat, longitude: lon });
    } catch (error) {
      setError("Error fetching location data");
      setLatitude(null); // Clear latitude
      setLongitude(null); // Clear longitude
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a location (address, city, zip code)"
        style={{ padding: "8px", fontSize: "12px", width: "200px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginLeft: "10px" }}
      >
        Get Weather
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {latitude !== null && longitude !== null && (
        <p>
          Latitude: {latitude}, Longitude: {longitude}
        </p>
      )}
    </>
  );
};

export default Location;
