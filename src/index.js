import { getCoords } from "./api";

getCoords("Honolulu");

let cityInput = document.querySelector("#city");
let citySumbit = document.querySelector("#submitBtn");
let tempToggle = document.querySelector("#tempUnits");
let tempUnitDisplay = document.querySelector("#sliderText");
let tempItems = document.querySelectorAll(".tempItem");

citySumbit.addEventListener("click", function () {
  tempToggle.checked = false;
  tempUnitDisplay.textContent = "\u00B0C";
  tempItems.forEach((x) => x.classList.remove("fahrenheitUnit"));
  tempItems.forEach((x) => x.classList.add("celsiusUnit"));
  getCoords(cityInput.value);
});
