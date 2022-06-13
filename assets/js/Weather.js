var APIKey = "85b081d82a8b2923ac904659cddb3896";
var city = "Atlanta, US";
var letsgoBtn = $('#letsgo')

submitBtn.click(getStartweather);

// Default Location will match geo Location for maps 
$( document ).ready(function() {
    // adding local storage read last city
    var tabledata = localStorage.getItem("TripKey");
    if (tabledata !== null){
        const TripKey = JSON.parse(tabledata);
        console.log(TripKey)
    }

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey+"&units=imperial",
    method: "GET",
    dataType: "json"
}).then(function(data) {
    Updateweather(data)
  
});
});


function Updateweather(data) {
        var citytitle = data['city']['name']
          // push the weather values for cards
          if (data !== null){
            day1 = data['list'][0]
            day2 = data['list'][12]
            day3 = data['list'][22]
            day4 = data['list'][32]
            day5 = data['list'][39]
         
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
            
            card1City.text(citytitle)
            card2City.text(citytitle)
            card3City.text(citytitle)
            card4City.text(citytitle)
            card5City.text(citytitle)
            console.log(card1City.text())

            ctemp0.innerHTML= `Current Temp: <strong>${day1['main'].temp}°C</strong></p>
            <p>Feels like: <strong>${day1['main'].feels_like}°F</strong></p>
            <p>Max: <strong>${day1['main'].temp_max}°F</strong>, Min: <strong>${day1['main'].temp_min}°F</strong></p>`
            
            ctemp1.innerHTML= `Current Temp: <strong>${day2['main'].temp}°F</strong></p>
            <p>Feels like: <strong>${day2['main'].feels_like}°F</strong></p>
            <p>Max: <strong>${day2['main'].temp_max}°F</strong>, Min: <strong>${day2['main'].temp_min}°F</strong></p>`
            
            ctemp2.innerHTML= `Current Temp: <strong>${day3['main'].temp}°F</strong></p>
            <p>Feels like: <strong>${day3['main'].feels_like}°F</strong></p>
            <p>Max: <strong>${day3['main'].temp_max}°F</strong>, Min: <strong>${day3['main'].temp_min}°F</strong></p>`
            
            ctemp3.innerHTML= `Current Temp: <strong>${day4['main'].temp}°F</strong></p>
            <p>Feels like: <strong>${day4['main'].feels_like}°F</strong></p>
            <p>Max: <strong>${day4['main'].temp_max}°F</strong>, Min: <strong>${day4['main'].temp_min}°F</strong></p>`
            
            ctemp4.innerHTML= `Current Temp: <strong>${day5['main'].temp}°F</strong></p>
            <p>Feels like: <strong>${day5['main'].feels_like}°F</strong></p>
            <p>Max: <strong>${day5['main'].temp_max}°F</strong>, Min: <strong>${day5['main'].temp_min}°F</strong></p>`
            
          }
}

//after click the button display the destination weather in the cards
function getStartweather() {
    console.log("Get Weather Function")
    //card1City.val() = "Finish!!!";
    var destweather = $('#destCity').val()
    console.log(destweather)
    if (destweather == ""){
        alert("Write something on Destination")
    }else{
        console.log(destweather)
        var ForecastW = "https://api.openweathermap.org/data/2.5/forecast?q=" + destweather + "&appid=" + APIKey+"&units=imperial";
        $.ajax({
            url: ForecastW,
            method: "GET",
            dataType: "json"
        }).then(function(data) {
            // push the weather values for cards
            Updateweather(data)
            console.log("Update Weather")

        });
       
    }
    
      
   
}