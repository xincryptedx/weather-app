const weatherInfoGetter = () => {
  const requestWeather = async (location) => {
    const weatherInfo = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=fc5008ce75624eafa22190524231305&q=${location}`
    );
    console.log(weatherInfo);
  };

  return { requestWeather };
};

export default weatherInfoGetter;
