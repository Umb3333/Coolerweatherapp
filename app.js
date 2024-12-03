var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
const  API_KEY = `eac1dfac8c73974caafb5cf45be9aa31`;   





 function getWeather(){
 fetch('https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=eac1dfac8c73974caafb5cf45be9aa31')
 .then(response => response.json())
 .then(data => {
   var tempValue = data['main']['temp'];
   var nameValue = data['name'];
   var descValue = data['weather'][0]['description'];
   var cloudsValue = data['clouds']['all'];
   var weathericon = data['weather'][0]['icon'];
   var iconUrl = "http://openweathermap.org/img/wn/" + weathericon + "@2x.png";
  

   document.getElementById('weather-icon').setAttribute('src', iconUrl);

   main.innerHTML = nameValue;
   desc.innerHTML = "Desc: "+descValue;
   temp.innerHTML = "Temperature: " + Math.round((tempValue - 272.15)) + "° C";
   clouds.innerHTML = "Clouds: " + cloudsValue + "%";
   

  

 })


}


getWeather();