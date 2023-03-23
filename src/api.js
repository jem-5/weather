import { displayWeather, displayIcon } from "./display";
console.log(process.env);

let weatherInfo = document.querySelector("#weatherInfo");
let loader = document.querySelector(".loader");

async function getCoords(city) {
  loader.style.display = "block";
  weatherInfo.style.display = "none";
  let response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.API_KEY}&units=metric`,
    { mode: "cors" }
  );
  let data = await response.json();
  let lat = data[0].lat;
  let lon = data[0].lon;
  getWeather(lat, lon);
}

async function getWeather(lat, lon) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`,
    { mode: "cors" }
  );
  let data = await response.json();
  processData(data);
  loader.style.display = "none";
  weatherInfo.style.display = "grid";
}

function processData(data) {
  const temp = data.main.temp;
  const feelsLike = data.main.feels_like;
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;
  const clouds = data.clouds.all;
  const wind = data.wind.speed;
  const name = data.name;
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;
  displayIcon(icon);
  printInfo([name, temp, feelsLike, minTemp, maxTemp, wind, clouds, desc]);
  displayWeather([name, temp, feelsLike, minTemp, maxTemp, wind, clouds, desc]);
}

function printInfo(data) {}

export { getCoords };
