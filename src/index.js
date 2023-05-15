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
let weatherInfo;

// Search input validation
const setSearchInputInvalid = (message) => {
  console.log("setting validity to invalid");
  searchInput.setCustomValidity(message);
  searchInput.reportValidity();
};

const setSearchInputValid = () => {
  console.log("valid search");
  searchInput.setCustomValidity("");
};

// #region Render Details
// Search value
const renderSearchValue = () => {
  if (weatherInfo.location.name) {
    searchInput.value = weatherInfo.location.name;
  }
};
// Condition
const renderCondition = () => {
  if (weatherInfo.current.condition.text) {
    conditionP.textContent = weatherInfo.current.condition.text;
  }
};
// Temp
const renderTemperature = (metric = false) => {
  if (weatherInfo.current.temp_f && !metric) {
    temperatureP.textContent = `${weatherInfo.current.temp_f} °F`;
  } else if (weatherInfo.current.temp_c && metric) {
    temperatureP.textContent = `${weatherInfo.current.temp_c} °C`;
  } else {
    temperatureP.textContent = `Temperature N/A`;
  }
};
// Feels like
const renderFeelsLike = (metric = false) => {
  if (weatherInfo.current.feelslike_f && !metric) {
    feelsLikeP.textContent = `Feels like: ${weatherInfo.current.feelslike_f} °F`;
  } else if (weatherInfo.current.feelslike_c && metric) {
    feelsLikeP.textContent = `Feels like: ${weatherInfo.current.feelslike_c} °C`;
  } else {
    feelsLikeP.textContent = "Feels like: n/a";
  }
};
// Humidity
const renderHumidity = () => {
  if (weatherInfo.current.humidity) {
    humidityP.textContent = `Humidity: ${weatherInfo.current.humidity}%`;
  }
};
// Visibility
const renderVisibility = (metric = false) => {
  if (weatherInfo.current.vis_miles && !metric) {
    visibilityP.textContent = `Visibility: ${weatherInfo.current.vis_miles} miles`;
  } else if (weatherInfo.current.vis_km && metric) {
    visibilityP.textContent = `Visibility: ${weatherInfo.current.vis_km} km`;
  } else {
    visibilityP.textContent = "Visibility: n/a";
  }
};
// Wind
const renderWind = (metric = false) => {
  if (weatherInfo.current.wind_dir && weatherInfo.current.wind_mph && !metric) {
    windP.textContent = `Wind: ${weatherInfo.current.wind_mph} mph, ${weatherInfo.current.wind_dir}`;
  } else if (
    weatherInfo.current.wind_dir &&
    weatherInfo.current.wind_kph &&
    metric
  ) {
    windP.textContent = `Wind: ${weatherInfo.current.wind_kph} kph, ${weatherInfo.current.wind_dir}`;
  } else {
    windP.textContent = "Wind: n/a";
  }
};
// Gust
const renderGust = (metric = false) => {
  if (weatherInfo.current.gust_mph && !metric) {
    gustP.textContent = `Gust: ${weatherInfo.current.gust_mph} mph`;
  } else if (weatherInfo.current.gust_kph && metric) {
    gustP.textContent = `Gust: ${weatherInfo.current.gust_kph} kph`;
  } else gustP.textContent = "Gust: n/a";
};
// Pressure
const renderPressure = (metric = false) => {
  if (weatherInfo.current.pressure_in && !metric) {
    pressureP.textContent = `Pressure: ${weatherInfo.current.pressure_in} in`;
  } else if (weatherInfo.current.pressure_mb && metric) {
    pressureP.textContent = `Pressure: ${weatherInfo.current.pressure_mb} mb`;
  } else pressureP.textContent = "Pressure: n/a";
};
// Meta render method
const renderDetails = (metric = false) => {
  renderSearchValue();
  renderCondition();
  renderTemperature(metric);
  renderFeelsLike(metric);
  renderHumidity(metric);
  renderVisibility(metric);
  renderWind(metric);
  renderGust(metric);
  renderPressure(metric);
};

// #endregion
// Search for input term
const weatherSearch = async () => {
  if (searchInput.value.trim() === "") {
    setSearchInputInvalid("Cannot search for nowhere.");
    return;
  }

  try {
    weatherInfo = await getWeather(searchInput.value.trim());
    setSearchInputValid();
    console.log(weatherInfo);
    renderDetails();
  } catch (err) {
    setSearchInputInvalid("Search failed. Location not found.");
  }
};
// When search input enter key
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    weatherSearch();
  }
});
// Or when search btn clicked
searchBtn.addEventListener("click", weatherSearch);

// Use module in dev tools
window.weather = getWeather;
