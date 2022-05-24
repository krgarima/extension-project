const temp = document.querySelector(".temperature");
const weatherIcon = document.querySelector(".weather-icon");

const generateWeatherData = (weatherApi) => {
  try {
    fetch(weatherApi)
      .then((response) => response.json())
      .then((data) => {
        temp.innerText = Math.round(data.current.temp) + "°";
        imgURL = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
        weatherIcon.src = imgURL;
        console.log(data);
      });
  } catch (error) {
    alert(error);
  }
};

const success = (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const domain = `https://api.openweathermap.org/data/2.5/onecall`;
  const apiKey = `c2f90a8e060cf9d5b4a27887f9984422`;

  const api = `${domain}?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  generateWeatherData(api);
};

const error = () => {
  alert("Unable to get location");
};

const getLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by the browser");
    return;
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

getLocation();
