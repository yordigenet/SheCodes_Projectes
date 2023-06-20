//current date and time showcase
function timeUpdate(){
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
    }
    
    timeUpdate();
    
    //search engine
    //weather display based on city searched
    function result (response){
      let cityName = document.querySelector("#city-name");
      let currentTemprature = document.querySelector("#newTemprature");
      let currentHimudity = document.querySelector("#humud");
      let currentWind = document.querySelector("#win");
      let newCity = response.data.name;
      let temprature = Math.round(response.data.main.temp);
      let Humudity = Math.round(response.data.main.humidity);
      let Wind = Math.round(response.data.wind.speed);
     
      cityName.innerHTML = newCity;
      currentTemprature.innerHTML = temprature;
      currentHimudity.innerHTML = Humudity;
      currentWind.innerHTML = Wind;
    }
    
    function showWeather(city) {
    let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    
    axios.get(`${apiUrl}&appid=${apiKey}`).then(result);
    }
    
    function getCityName(event) {
      event.preventDefault();
      let city = document.querySelector("#city-name");
      showWeather(city);
    } 
    
    function showLocation(position) {
      let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
      
      axios.get(`${apiUrl}&appid=${apiKey}`).then(result);
      }
    
    function getGeoLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(showLocation);
      }  
    let weatherUpdate = document.querySelector("#city-form");
    weatherUpdate.addEventListener("submit", getCityName);
    
    let locationButton = document.querySelector("#current-loction");
    locationButton.addEventListener("submit", getGeoLocation);
    
    getCityName("Adama");
    
    
    
    
    