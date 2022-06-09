var currentDay = $("#1")

// Expanded Forecast
var secondDay = $("#2")
var thirdDay = $("#3")
var forthDay = $("#4")
var fifthDay = $("#5")

var today = moment()

currentDay.text(today.format("dddd, MMMM Do, YYYY"))
console.log(currentDay);

secondDay.text(today.add(1, 'days').format("dddd, MMMM Do, YYYY"));
console.log(secondDay)

thirdDay.text(today.add(1, 'days').format("dddd, MMMM Do, YYYY"));
console.log(thirdDay)

forthDay.text(today.add(1, 'days').format("dddd, MMMM Do, YYYY"));
console.log(forthDay)

fifthDay.text(today.add(1, 'days').format("dddd, MMMM Do, YYYY"));
console.log(fifthDay)


