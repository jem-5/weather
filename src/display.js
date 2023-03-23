import { convertCF, convertFC } from "./util";

function displayWeather([
  name,
  temp,
  feelsLike,
  minTemp,
  maxTemp,
  wind,
  clouds,
  desc,
]) {
  let nameDisplay = document.querySelector("#cityName");
  let tempDisplay = document.querySelector("#temp");
  let descDisplay = document.querySelector("#desc");
  let feelsDisplay = document.querySelector("#feelsLike");
  let windDisplay = document.querySelector("#wind");
  let cloudsDisplay = document.querySelector("#clouds");
  let minTDisplay = document.querySelector("#minTemp");
  let maxTDisplay = document.querySelector("#maxTemp");

  nameDisplay.innerHTML = name;
  tempDisplay.innerHTML = temp;
  descDisplay.innerHTML = desc;
  feelsDisplay.innerHTML = `${feelsLike}`;
  windDisplay.innerHTML = `${wind}`;
  cloudsDisplay.innerHTML = `${clouds}`;
  minTDisplay.innerHTML = `${minTemp}`;
  maxTDisplay.innerHTML = `${maxTemp}`;

  // return [name, temp, feelsLike, minTemp, maxTemp, wind, clouds, desc];
}

let tempToggle = document.querySelector("#tempUnits");
let tempUnitDisplay = document.querySelector("#sliderText");
let tempItems = document.querySelectorAll(".tempItem");
tempUnitDisplay.textContent = "\u00B0C";
// let celsiusUnits = true;

tempToggle.addEventListener("click", () => {
  if (tempToggle.checked) {
    tempUnitDisplay.textContent = "\u00B0F";
    tempItems.forEach((x) => x.classList.remove("celsiusUnit"));
    tempItems.forEach((x) => x.classList.add("fahrenheitUnit"));
    // celsiusUnits = false;
  } else {
    tempUnitDisplay.textContent = "\u00B0C";
    tempItems.forEach((x) => x.classList.remove("fahrenheitUnit"));
    tempItems.forEach((x) => x.classList.add("celsiusUnit"));
    // celsiusUnits = true;
  }
  toggleTemp();
});

function toggleTemp() {
  let name = document.querySelector("#cityName").textContent;
  let temp = document.querySelector("#temp").textContent;
  let desc = document.querySelector("#desc").textContent;
  let feelsLike = document.querySelector("#feelsLike").textContent;
  let wind = document.querySelector("#wind").textContent;
  let clouds = document.querySelector("#clouds").textContent;
  let minTemp = document.querySelector("#minTemp").textContent;
  let maxTemp = document.querySelector("#maxTemp").textContent;

  let tempToggle = document.querySelector("#tempUnits");

  if (tempToggle.checked) {
    [temp, feelsLike, minTemp, maxTemp] = [
      temp,
      feelsLike,
      minTemp,
      maxTemp,
    ].map((x) => convertCF(x));
  } else {
    [temp, feelsLike, minTemp, maxTemp] = [
      temp,
      feelsLike,
      minTemp,
      maxTemp,
    ].map((x) => convertFC(x));
  }
  [temp, feelsLike, minTemp, maxTemp] = [temp, feelsLike, minTemp, maxTemp].map(
    (x) => Math.round(x * 100) / 100
  );
  displayWeather([name, temp, feelsLike, minTemp, maxTemp, wind, clouds, desc]);
}

function displayIcon(a) {
  let iconSpot = document.querySelector("#icon");
  let url = "https://openweathermap.org/img/wn/";
  url = url + a + "@2x.png";
  iconSpot.innerHTML = `<img src=${url} alt="icon" class="weatherPic"></img>`;
}

export { displayWeather, displayIcon };

// Loading animation
