let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  
  // write your code here
  
  
    let cityname = prompt("Enter City Name").toLowerCase().trim();
    
    if (weather[cityname] !== undefined){
        let tempratureC = weather[cityname].temp;
        tempratureC = Math.round(tempratureC);
        let tempratureF = (tempratureC * 9/5)+32;
        tempratureF = Math.round(tempratureF);
        let humidity = weather[cityname].humidity; 
        alert(
            `It is currently ${tempratureC}°C ( ${tempratureF}°F) in ${cityname} with a humidity of ${humidity}%`);
        }
     else {
        alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`);
    }
  