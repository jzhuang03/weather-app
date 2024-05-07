## Weather App

### Problem Statement and Motivation
I've built a weather app to reinforce my skills in using APIs, breaking code into components, and developing a visually appealing application.

#### Location Input
Users are prompted to input an address, city name, or zip code in order to obtain latitude and longitude. I've utilized the OpenWeatherAPI Geocoding API for this purpose.

#### Step 2: Display the Weather 
With the latitude and longitude obtained from the API, the app displays:
- Current weather
- Hourly forecast for the next day
- Daily forecasts for the next week (7 days).

API URLs:
- [Current weather](https://openweathermap.org/current)
- [Hourly forecast](https://openweathermap.org/forecast5)
- [Daily forecasts](https://openweathermap.org/forecast16)

#### Part II: 
#### Step 3: Use the OpenWeatherAPI icons
To enhance the user experience, I've incorporated weather icons from the OpenWeatherAPI.

#### Step 4: Display the top news from New York Times
After displaying the weather, the app fetches today’s top news stories from the New York Times API. Users can see the top 5 news stories from the last day, including the title, author, description, image, and a link to the story on the NYT website.


### Technologies Used
- React
- Axios
- OpenWeatherAPI
- New York Times API

### Installation
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the app: `npm start`
