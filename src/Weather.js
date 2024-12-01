let inputElement = document.querySelector(".js-input");
let searchButton = document.querySelector(".js-search-button");
let imageElement = document.querySelector(".js-image");
let temperature = document.querySelector(".js-temperature");
let weatherDescription = document.querySelector(".js-weather-description");
let humidity = document.querySelector(".js-humidity");
let windSpeed = document.querySelector(".js-windSpeed");

const checkWeather = async (cityName) => {
  const api_key = "515c9b5c463513803c0ff19fcaa75b2a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;

  const weatherData = await fetch(`${url}`).then((res) => {
    return res.json();
  });

  console.log(weatherData);

  temperature.innerHTML = `${Math.round(weatherData.main.temp-273.15)}°C`;
  weatherDescription.innerHTML=`${weatherData.weather[0].description}`;
  humidity.innerHTML=`${weatherData.main.humidity}%`;
  windSpeed.innerHTML=`${weatherData.wind.speed}Km/h`;

  switch(weatherData.weather[0].main){
    case 'Clouds':
      imageElement.src='/images/Day Clouds.png';
      break;
    case 'Clear':
      imageElement.src='/images/Sun.png';
      break;
    case 'Rain':
      imageElement.src='/images/Rain.png';
      break;
    case 'Mist':
      imageElement.src='/images/Rain.png';
      break;
    case 'Snow':
      imageElement.src='/images/Snow.png';
      break;
  }
};

searchButton.addEventListener("click", () => {
  console.log("calling weather api");
  checkWeather(inputElement.value);
});

document.addEventListener("keydown", (event) => {
  console.log("calling weather api");
  if(event.key==='Enter'){
    checkWeather(inputElement.value);
  }
});

