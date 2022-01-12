// API - 6212c091f5d102df1f44aa158d4760da

function getWeather(cityName){
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=6212c091f5d102df1f44aa158d4760da`;

// Performing a GET Request -- Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    // handle success 
    document.getElementById("tempDisplay").innerText = `It is currently ${response.data.main.temp}°F in  ${cityName}.  `
    //console.log(response.data.main.temp);
  })
  .catch(function (error) {
    document.getElementById("tempDisplay").innerText = error
    // handle error
    //console.log(error);
  })
  .finally(function () {
      console.log('done.')
    // always executed
  })
};

window.onload = function() {
 let button =  document.getElementById("button")
 button.addEventListener('click', function(){
    // get City Name from text Field 
    let cityName = document.getElementById("cityTextInput").value; 
    // call getWeather()
    getWeather(cityName);
 })

}