const weatherInfoGetter = (location) => {
  const requestWeather = async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=fc5008ce75624eafa22190524231305&q=${location}`
    );
    if (response.ok) {
      const weatherInfoJson = await response.json();
      return weatherInfoJson;
    }
    return Promise.reject(response);
  };

  return requestWeather();
};

export default weatherInfoGetter;
