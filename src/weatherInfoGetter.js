const weatherInfoGetter = (location) => {
  const requestWeather = async () => {
    const weatherInfo = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=fc5008ce75624eafa22190524231305&q=${location}`
    );
    const weatherInfoJson = await weatherInfo.json();

    console.log(weatherInfoJson);
    return weatherInfoJson;
  };

  return requestWeather();
};

export default weatherInfoGetter;
