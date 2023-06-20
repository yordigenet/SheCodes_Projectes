//current date and time
let dateTime = new Date();
let hours = String(dateTime.getHours()).padStart(2, "0");
let minutes = String(dateTime.getMinutes()).padStart(2, "0");
let currentDate = document.querySelector(".dateUpdate");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[dateTime.getDay()];
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

//search engine
function changeCity(event) {
  event.preventDefault();
  let searchButton = document.querySelector("#city-input");
  let newName = document.querySelector("#city-name");
  newName.innerHTML = `${searchButton.value}`;
}

let cityName = document.querySelector("#city-form");
cityName.addEventListener("submit", changeCity);

//temprature handling
//To celsius
function convertCelsius(event) {
  event.preventDefault();
  let newTemprature = document.querySelector("#newTemprature");
  newTemprature.innerHTML = 14;
}

let newcelsius = document.querySelector("#to-celsius");
newcelsius.addEventListener("click", convertCelsius);

//To fahrenheit
function convertFahrenheit(event) {
  event.preventDefault();
  let newTemprature = document.querySelector("#newTemprature");
  newTemprature.innerHTML = Math.ceil((14 * 9) / 5 + 32);
}

let fahrenheit = document.querySelector("#to-fahrenheit");
fahrenheit.addEventListener("click", convertFahrenheit);
