var currentDay = $("#1")

// Expanded Forecast
var secondDay = $("#2")
var thirdDay = $("#3")
var forthDay = $("#4")
var fifthDay = $("#5")
var today = moment()

currentDay.text(today.format("ddd MMMM Do"))
console.log(currentDay);

secondDay.text(today.add(1, 'days').format("ddd MMMM Do"));
console.log(secondDay)

thirdDay.text(today.add(1, 'days').format("ddd MMMM Do"));
console.log(thirdDay)

forthDay.text(today.add(1, 'days').format("ddd MMMM Do"));
console.log(forthDay)

fifthDay.text(today.add(1, 'days').format("ddd MMMM Do"));
console.log(fifthDay)

//Stores items in localStorage
function store() {
    var StartAddress = document.getElementById('from-input').value;
    var EndAddress = document.getElementById('too-input').value;
    var CityName = document.getElementById('destCity').value;
    var Date = document.getElementById('date-picker').value;
    
var tripdata = []

//Set data to localStorage
localStorage.setItem("TripKey", tripdata)
    const trip = {
        StartAddress: "",
        EndAddress: "",
        CityName: "",
        Date: ""
    }
    //stringify object
    window.localStorage.setItem('tripdata',JSON.stringify(tripdata))
}

//pull from localStorage
function retrievetripdata(){
    var retrievekey = document.getElementById('retrievekey').value;
    console.log("Retrieve Trip Data")
}

//Loads page before functions execute
window.onload = function(){
    document.getElementById("submitBtn").onsubmit = store
}



