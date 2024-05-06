import React from 'react'
import {useState, useEffect} from 'react';
import Button from "@mui/material/Button";

const Location = ({LocationInput}) => {
  return (
    <div>
      
    </div>
  )
}

export default Location



// import React, { useState } from "react";
// import Button from "@mui/material/Button";

// const LocationSearch = ({ onLocationSubmit }) => {
//   const [input, setInput] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async () => {
//     if (!input.trim()) {
//       setError("Please enter a location");
//       return;
//     }

//     setError("");
//     try {
//       const apiKey = "308d10ef2421428fdf8bcb671d0a9426";
//       const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
//         input
//       )}&limit=1&appid=${apiKey}`;
//       const response = await fetch(url);
//       const data = await response.json();

//       if (data.length === 0) {
//         setError("Location not found");
//         return;
//       }

//       const { lat, lon } = data[0];
//       onLocationSubmit({ lat, lon });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching location data");
//     }
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a location (address, city, zip code)"
//         style={{ padding: "8px", fontSize: "12px", width: "200px" }}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSubmit}
//         style={{ marginLeft: "10px" }}
//       >
//         Get Latitude and Longitude
//       </Button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </>
//   );
// };

// export default LocationSearch;
