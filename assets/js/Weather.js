var APIKey = "85b081d82a8b2923ac904659cddb3896";
var city = "London, uk";
var ActualW = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=85b081d82a8b2923ac904659cddb3896";
//var ForecastW = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
//var cordW = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=57&lon=-2.15&appid=85b081d82a8b2923ac904659cddb3896"
//var cordW = "https://api.openweathermap.org/data/2.5/forecast/daily?&appid=85b081d82a8b2923ac904659cddb3896"
var letsgoBtn = $('#letsgo')

letsgoBtn.click(getStartweather);



// Default Location will match geo Location for maps 
$( document ).ready(function() {

    var card1City = $('#city-1')
    var card2City = $('#city-2')
    var card3City = $('#city-3')
    var card4City = $('#city-4')
    var card5City = $('#city-5')
    
    var ctemp0 = document.querySelector("#temp-1");
    var ctemp1 = document.querySelector("#temp-2");
    var ctemp2 = document.querySelector("#temp-3");
    var ctemp3 = document.querySelector("#temp-4");
    var ctemp4 = document.querySelector("#temp-5");
    
    card1City.text('London')
    card2City.text('London')
    card3City.text('London')
    card4City.text('London')
    card5City.text('London')
    console.log(card1City.text())
$.ajax({
    url: ActualW,
    method: "GET",
    dataType: "json"
}).then(function(data) {
        ctemp0.innerHTML= `Current Temp: <strong>${data['main'].temp}°C</strong></p>
        <p>Feels like: <strong>${data['main'].feels_like}°C</strong></p>
        <p>Max: <strong>${data['main'].temp_max}°C</strong>, Min: <strong>${data['main'].temp_min}°C</strong></p>`
        
        ctemp1.innerHTML= `Current Temp: <strong>${data['main'].temp}°C</strong></p>
        <p>Feels like: <strong>${data['main'].feels_like}°C</strong></p>
        <p>Max: <strong>${data['main'].temp_max}°C</strong>, Min: <strong>${data['main'].temp_min}°C</strong></p>`
        
        ctemp2.innerHTML= `Current Temp: <strong>${data['main'].temp}°C</strong></p>
        <p>Feels like: <strong>${data['main'].feels_like}°C</strong></p>
        <p>Max: <strong>${data['main'].temp_max}°C</strong>, Min: <strong>${data['main'].temp_min}°C</strong></p>`
        
        ctemp3.innerHTML= `Current Temp: <strong>${data['main'].temp}°C</strong></p>
        <p>Feels like: <strong>${data['main'].feels_like}°C</strong></p>
        <p>Max: <strong>${data['main'].temp_max}°C</strong>, Min: <strong>${data['main'].temp_min}°C</strong></p>`
        
        ctemp4.innerHTML= `Current Temp: <strong>${data['main'].temp}°C</strong></p>
        <p>Feels like: <strong>${data['main'].feels_like}°C</strong></p>
        <p>Max: <strong>${data['main'].temp_max}°C</strong>, Min: <strong>${data['main'].temp_min}°C</strong></p>`
        
      
        console.log(index)
        
    
    
   
});
});


//after click the button display the destination weather in the cards
function getStartweather() {
    //card1City.val() = "Finish!!!";
    var destweather = $('#destCity').val()
    console.log(destweather)
    var ForecastW = "http://api.openweathermap.org/data/2.5/forecast?q=" + destweather + "&appid=" + APIKey;
    $.ajax({
        url: ForecastW,
        method: "GET",
        dataType: "json"
    }).then(function(data) {
       console.log(data);
        // push the weather values for cards

    });
}