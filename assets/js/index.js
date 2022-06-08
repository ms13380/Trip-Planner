// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

let latCoord
let longCoord
var destAddress = $('#cityInput').val()
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
$( document ).ready(function() {
navigator.geolocation.getCurrentPosition(
  (position) => {
    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    latPos = pos.lat
    longPos = pos.lng
    startCityField = `${latPos},${longPos}`
    $('#startCity').val(`${latPos},${longPos}`)
  })
})

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
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

$('#submitAddress').click(turqouise)