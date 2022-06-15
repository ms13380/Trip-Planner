// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

let latCoord
let longCoord
let start
let end
var destAddress = $('#destCity').val()
var submitBtn = $('#submitBtn')
var directionsService
var coordLongitude
var coordLatitude
var weatherApiRequest
weatherApiRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${coordLatitude}&lon=${coordLongitude}&appid=5e4e76067c9efbd530372ae03978df87`

let map, infoWindow;
let latPos
let longPos
var starCityText = $('#startCity').html()
var startCityField = $('#startCity').val()
showHideBtn()
function showHideBtn() {
  startAddress = $('#destCity').val()
  endAddress = $('#startCity').val()
  if(startAddress == "" || endAddress == "") {
  submitBtn.addClass("d-none")
} else if(startAddress.length > 0 && endAddress.length > 0 ) {
  submitBtn.removeClass("d-none")
  
 }}
setInterval(showHideBtn,2000)

function checkStorage() {
  var recentStorageLogic
  var recentCity1 = localStorage.getItem("RecentStartCity1")
  var x = 0
  start = $('#startCity').val()
  end = $('#destCity').val()
for (let i = 1; i <= 10; i++) {
  debugger;
  x++
  recentCityI = localStorage.getItem(`RecentStartCity${x}`)
  if(localStorage.getItem(`RecentStartCity${x}`) === null && jQuery.type(localStorage.getItem(`RecentStartCity${x}`)) !== "string" ) {
    localStorage.setItem(`RecentStartCity${x}`,start)
    localStorage.setItem(`RecentDestCity${x}`,end)
    break;
  }
  else if(localStorage.getItem(`RecentStartCity${x}`) !== undefined && jQuery.type(localStorage.getItem(`RecentStartCity${x}`)) === "string" && localStorage.getItem(`RecentStartCity${x+1}`) !== "" && localStorage.getItem(`RecentStartCity${x+1}`) == undefined && jQuery.type(localStorage.getItem(`RecentStartCity${x+1}`) !== "string")) {
    localStorage.setItem(`RecentStartCity${x+1}`,start)
    localStorage.setItem(`RecentDestCity${x+1}`,end)
    break;
  }
  else {}

}


//RecentCity1 = ...
//
// RecentStartCity2, i = 2

  
  // if( localStorage.getItem("RecentStartCity1") == null) {
  //   localStorage.setItem("RecentStartCity1",startCityField)
  //   localStorage.setItem("RecentDestCity1",destAddress)
  // } else if(recentCity1 !== "" && recentCity2 !== "") {
  //   localStorage.setItem("RecentStartCity3", startCityField)
  //   localStorage.setItem("RecentDestCity3",destAddress)
  // }
  // else if (localStorage.getItem("RecentStartCity1") !== "") {
  //   localStorage.setItem("RecentStartCity2", startCityField)
  //   localStorage.setItem("RecentDestCity2",destAddress)
  // } else if (localStorage.getItem("RecentStartCity2") !== "") {
  //   localStorage.setItem("RecentStartCity3", startCityField)
  //   localStorage.setItem("RecentDestCity3",destAddress)
  // } else if(localStorage.getItem("RecentStartCity3") !== "") {
  //   localStorage.setItem("RecentStartCity4", startCityField)
  //   localStorage.setItem("RecentDestCity4",destAddress)
  // } else if(localStorage.getItem("RecentStartCity4") !== "") {
  //   localStorage.setItem("RecentStartCity5", startCityField)
  //   localStorage.setItem("RecentDestCity5",destAddress)
  // } else {}
$('#localStorageAlert').html(`<p>&#x1f44d; successfully saved to storage.</p>`)

clearlocalStorageAlert()
setTimeout(clearlocalStorageAlert,4000)
}
function clearlocalStorageAlert() {
  $('#localStorageAlert').html("")
}

$(document).ready(getLocalStorage())
function getLocalStorage() {
  var thisDestCity
  var thisCity
  let y =1
for (let i = 0; i < localStorage.length; i+=2) {
  debugger;
  RecentStrtCity = `RecentStartCity${y}`
  RecentDest = `RecentDestCity${y}`
  thisCity = localStorage.getItem(RecentStrtCity)
  thisDestCity = localStorage.getItem(RecentDest)
  if(`RecentStartCity${y}` in localStorage) {
    debugger;
    var recentSearchBox = $('#recent-searches').html()
    $('#recent-searches').append(`<li id="dropItem${y}"><a class="dropdown-item">${thisCity} to ${thisDestCity}</a></li>`)
    y++
  }
  
}}
var dropItemStartCity1 = localStorage.getItem('RecentStartCity1')
var dropItemDestCity1 = localStorage.getItem('RecentDestCity1')
$('#recent-searches').on("click", "#dropItem1",recallStoredCity)

function recallStoredCity() {
  start = dropItemStartCity1
  end = dropItemDestCity1
  getStartCity(start,end)

}

function checkingStartVals() {
  if($('#startCity').val() !== '' && $('#destCity').val() !== '') {
    checkStorage()
  }

}
function checkIfThisIsStoredVal(start,end) {
  if($('#startCity').val() == "" && $('#destCity').val() == "") {
    start = localStorage.getItem('RecentStartCity1')
    end =  localStorage.getItem('RecentDestCity1')
    }
    return start,end
}



submitBtn.click(getStartCity)

function getStartCity(start,end) {
  start = $('#startCity').val()
  end = $('#destCity').val()
  checkingStartVals()
  checkIfThisIsStoredVal(start,end)
  //insert checkStorage() logic test here.
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom:7,
    center: { lat: -34.397, lng: 150.644 }
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);
  directionsService.route( {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  }, (directionsResult, directionsStatus) => {
    if(directionsStatus == "OK") {directionsRenderer.setDirections(directionsResult)
  }
  var routesArray = directionsResult.routes[0].legs
  var directionsDiv = $('#directions')
  var legsArray = routesArray[0].steps
  var stepsArray = directionsResult.routes[0].legs[0].steps
  var totalDist = directionsResult.routes[0].legs[0].distance.text
  var totalDuration = directionsResult.routes[0].legs[0].duration.text
  var instrArray = stepsArray[0]
  debugger;
  console.log(instrArray)
  for(var i = 0; i < stepsArray.length - 1; i++) {
    var ptag = $('#directions').append("<p>")
    var distanceTraveled = stepsArray[i].distance.text
    var eachDirection = stepsArray[i].instructions
    $('#directions').append(`<p>
    ${eachDirection} for ${distanceTraveled}
      </p>`
    )
    $('#directions').addClass('bg-light')
    $('html, body').animate({
      scrollTop: $("#directions").offset().top
  });
  }
  const distanceButton = document.createElement("button");
  distanceButton.innerHTML = `${totalDist}<br>${totalDuration}`;
  distanceButton.classList.add("btn")
  distanceButton.classList.add("btn-primary")
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(distanceButton);
  })}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom:10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;




function turqouise() {
  selectedCity = $('#cityInput').val();
  cityArray = selectedCity.split(' ');
  cityName = selectedCity.split(",")[0];
  stateName = selectedCity.split(",")[1];

  console.log(cityName)
  console.log(stateName)
 coordApiRequest = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateName}$"&appid=5e4e76067c9efbd530372ae03978df87`

fetch(coordApiRequest)
.then( function (response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
console.log(data[0])
coordLatitude = data[0].lat;
coordLongitude = data[0].lon;
})
.then(function() {
  const uluru = `${coordLatitude},${coordLongitude}`
  debugger;
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
})

  
  }
)

}

// $('#submitAddress').click(turqouise)
