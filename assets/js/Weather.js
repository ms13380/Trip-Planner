var APIKey = "85b081d82a8b2923ac904659cddb3896";
var city = "San Diego";
var letsgoBtn = $('#letsgo')
var icon1 = $('#icon1')
var icon2 = $('#icon2')
var icon3 = $('#icon3')
var icon4 = $('#icon4')
var icon5 = $('#icon5')


submitBtn.click(getStartweather);

// Default Location will match geo Location for maps San Diego 
$( document ).ready(function() {
    getdata(city)
});


// From Local Storage Searches List
$('#recent-searches').on("click", "li", function(w) {
    var destinationpt = localStorage.getItem(`RecentDestCity${w.target.id}`)
    destinationpt = destinationpt.split(",")[0];
    getdata(destinationpt)
  })

// From Input City Dest
  function getdata(citydest){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + citydest + "&appid=" + APIKey+"&units=imperial",
        method: "GET",
        dataType: "json"
    }).then(function(data) {
        Updateweather(data)

    });

  }

//Create the Weatehr Cards 
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

            var looks1City = $('#looks1')
            var looks2City = $('#looks2')
            var looks3City = $('#looks3')
            var looks4City = $('#looks4')
            var looks5City = $('#looks5')
            
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


            looks1City.text(day1['weather'][0]['main'])
            looks2City.text(day2['weather'][0]['main'])
            looks3City.text(day3['weather'][0]['main'])
            looks4City.text(day4['weather'][0]['main'])
            looks5City.text(day5['weather'][0]['main'])

        
            icon1.attr("src", `https://openweathermap.org/img/wn/${day1['weather'][0]['icon']}@2x.png`)
            icon2.attr("src", `https://openweathermap.org/img/wn/${day2['weather'][0]['icon']}@2x.png`)
            icon3.attr("src", `https://openweathermap.org/img/wn/${day3['weather'][0]['icon']}@2x.png`)
            icon4.attr("src", `https://openweathermap.org/img/wn/${day4['weather'][0]['icon']}@2x.png`)
            icon5.attr("src", `https://openweathermap.org/img/wn/${day5['weather'][0]['icon']}@2x.png`)
           
            var weatherstatus1 = ""
            if (day1['weather'][0]['main'] == "Rain"){
                weatherstatus1 = "./assets/img/rainy.png"
            }
            if (day1['weather'][0]['main'] == "Clouds"){
                weatherstatus1 = "./assets/img/cloudy.png"
            }
            if (day1['weather'][0]['main'] == "Clear"){
                weatherstatus1 = "./assets/img/sunny.png"
            }

            var weatherstatus2 = ""
            if (day2['weather'][0]['main'] == "Rain"){
                weatherstatus2 = "./assets/img/rainy.png"
            }
            if (day2['weather'][0]['main'] == "Clouds"){
                weatherstatus2 = "./assets/img/cloudy.png"
            }
            if (day2['weather'][0]['main'] == "Clear"){
                weatherstatus2 = "./assets/img/sunny.png"
            }


            var weatherstatus3 = ""
            if (day3['weather'][0]['main'] == "Rain"){
                weatherstatus3 = "./assets/img/rainy.png"
            }
            if (day3['weather'][0]['main'] == "Clouds"){
                weatherstatus3 = "./assets/img/cloudy.png"
            }
            if (day3['weather'][0]['main'] == "Clear"){
                weatherstatus3 = "./assets/img/sunny.png"
            }


            var weatherstatus4 = ""
            if (day4['weather'][0]['main'] == "Rain"){
                weatherstatus4 = "./assets/img/rainy.png"
            }
            if (day4['weather'][0]['main'] == "Clouds"){
                weatherstatus4 = "./assets/img/cloudy.png"
            }
            if (day4['weather'][0]['main'] == "Clear"){
                weatherstatus4 = "./assets/img/sunny.png"
            }


            var weatherstatus5 = ""
            if (day5['weather'][0]['main'] == "Rain"){
                weatherstatus5 = "./assets/img/rainy.png"
            }
            if (day5['weather'][0]['main'] == "Clouds"){
                weatherstatus5 = "./assets/img/cloudy.png"
            }
            if (day5['weather'][0]['main'] == "Clear"){
                weatherstatus5 = "./assets/img/sunny.png"
            }

            ctemp0.innerHTML= `Current Temp: <strong>${Math.round(day1['main'].temp)}°F</strong><br>
            Feels like: <strong>${Math.round(day1['main'].feels_like)}°F</strong><br>
            Max: <strong>${Math.round(day1['main'].temp_max)}°F</strong>,<br> Min: <strong>${Math.round(day1['main'].temp_min)}°F</strong></p>
            <img class="card-img-top" src="${weatherstatus1}" alt="Card image cap" width="auto" height="120px">`
            
            ctemp1.innerHTML= `Current Temp: <strong>${Math.round(day2['main'].temp)}°F</strong><br>
            Feels like: <strong>${Math.round(day2['main'].feels_like)}°F</strong><br>
            Max: <strong>${Math.round(day2['main'].temp_max)}°F</strong>,<br> Min: <strong>${Math.round(day2['main'].temp_min)}°F</strong></p>
            <img class="card-img-top" src="${weatherstatus2}" alt="Card image cap" width="auto" height="120px">`
            
            ctemp2.innerHTML= `Current Temp: <strong>${Math.round(day3['main'].temp)}°F</strong><br>
            Feels like: <strong>${Math.round(day3['main'].feels_like)}°F</strong><br>
            Max: <strong>${Math.round(day3['main'].temp_max)}°F</strong>,<br> Min: <strong>${Math.round(day3['main'].temp_min)}°F</strong></p>
            <img class="card-img-top" src="${weatherstatus3}" alt="Card image cap" width="auto" height="120px">`
            
            ctemp3.innerHTML= `Current Temp: <strong>${Math.round(day4['main'].temp)}°F</strong><br>
            Feels like: <strong>${Math.round(day4['main'].feels_like)}°F</strong><br>
            Max: <strong>${Math.round(day4['main'].temp_max)}°F</strong>,<br> Min: <strong>${Math.round(day4['main'].temp_min)}°F</strong></p>
            <img class="card-img-top" src="${weatherstatus4}" alt="Card image cap" width="auto" height="120px">`
            
            ctemp4.innerHTML= `Current Temp: <strong>${Math.round(day5['main'].temp)}°F</strong><br>
            Feels like: <strong>${Math.round(day5['main'].feels_like)}°F</strong><br>
            Max: <strong>${Math.round(day5['main'].temp_max)}°F</strong>,<br> Min: <strong>${Math.round(day5['main'].temp_min)}°F</strong></p>
            <img class="card-img-top" src="${weatherstatus5}" alt="Card image cap" width="auto" height="120px">`
            
          }
}



//After click the button display the destination weather in the cards
function getStartweather() {
    var destweather = $('#destCity').val()
    destweather = destweather.split(",")[0];
    if ( destweather.split(',').length > 0) {
        destweather = destweather.split(',')[0]
        getdata(destweather)
       
    }
   

    
      
   
}