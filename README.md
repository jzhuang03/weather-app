<h1> Weather App </h1>

I've built a weather app to reinforce my skills in using APIs as well as strengthening my Javascript skills to deliver a visually appealing application. 


<h1> Live Demo </h1>
https://github.com/jzhuang03/weather-app/assets/118019266/1f267e98-d4dc-466a-9d71-c05ff2b87894



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


</h2> Step 3: Use the OpenWeatherAPI icons </h2>
To enhance the user experience, I've incorporated weather icons from the OpenWeatherAPI.

</h2> Step 4: Display the top news from New York Times </h2>
After displaying the weather, the app fetches today’s top news stories from the New York Times API. Users can see the top 5 news stories from the last day, including the title, author, description, image, and a link to the story on the NYT website.


<h2> Built with </h2>
<ul>
  <li> React </li>
  <li> Axios </li>
  <li> OpenWeatherAPI </li>
  <li> New York Times API </li>
</ul>

</h2> Installation </h2>
<
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the app: `npm start`





