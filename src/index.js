import "./style.css";
import getWeather from "./weatherInfoGetter";

// References
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const detailsGrid = document.querySelector(".details-grid");
const conditionP = detailsGrid.querySelector(".condition");
const temperatureP = detailsGrid.querySelector(".temperature");
const feelsLikeP = detailsGrid.querySelector(".feels-like");
const humidityP = detailsGrid.querySelector(".humidity");
const visibilityP = detailsGrid.querySelector(".visibility");
const windP = detailsGrid.querySelector(".wind");
const gustP = detailsGrid.querySelector(".gust");
const pressureP = detailsGrid.querySelector(".pressure");

// Variables
let weatherInfoJson;

// Search for input term
const weatherSearch = () => {
  if (searchInput.value.trim() === "") {
    console.log("Can't serach for nowhere!");
    return;
  }

  weatherInfoJson = getWeather(searchInput.value.trim());
};
// When search input enter key
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    weatherSearch();
  }
});
// Or when search btn clicked
searchBtn.addEventListener("click", weatherSearch);

// Render input value

// Use module in dev tools
window.weather = getWeather;
