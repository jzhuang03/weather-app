<h1> Weather App </h1>

In building this weather app, I aimed to reinforce my skills in using APIs and strengthen my JavaScript abilities while continuing my familiarity with React.js. As a student unfamiliar with React.js and APIs, I faced challenges in structuring components and handling API data, but through perseverance and learning, I successfully developed a visually appealing application. The Weather App is a user-friendly application designed to provide accurate and up-to-date weather information for any location worldwide. With simple yet intuitive input options, users can easily find the weather forecast for their desired location, including current conditions, hourly forecasts, and daily outlooks for the next week. The app also integrates top news stories from the New York Times API, ensuring users stay informed about the latest events alongside their weather updates.

https://github.com/jzhuang03/weather-app/assets/118019266/90d5cd70-6237-4ccb-a502-e1cb50611b9f


<h2> Feature 1: Location Input </h2>
Users are prompted to input an address, city name, or zip code in order for program to locate latitude and longitude. I've utilized the OpenWeatherAPI Geocoding API for this purpose.

<h2> Feature 2: Display the Weather </h2>
With the latitude and longitude obtained from the API, the app displays:
<ol>
  <li> Current weather </li>
  <li> Hourly forecast for the next day </li>
  <li> Daily forecasts for the next week (7 days). </li>
</ol>

API URLs Referenced:
- [Current weather](https://openweathermap.org/current)
- [Hourly forecast](https://openweathermap.org/forecast5)
- [Daily forecasts](https://openweathermap.org/forecast16)


</h2> Feature 3: Use the OpenWeatherAPI icons </h2>
To enhance the user experience, I've incorporated weather icons from the OpenWeatherAPI.

</h2> Feature 4: Display the top news from New York Times </h2>
After displaying the weather, the app fetches today’s top news stories from the New York Times API. Users can see the top 5 news stories from the last day, including the title, author, description, image, and a link to the story on the NYT website.


<h2> Built with </h2>
<ul>
  <li> React </li>
  <li> Axios </li>
  <li> OpenWeatherAPI </li>
  <li> New York Times API </li>
</ul>




