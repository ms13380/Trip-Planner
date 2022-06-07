var travelDates = $(".travel-dates")

for (let day = 1; day <= 7; day++){

    travelDates.insertAdjacentHTML("beforeend", `<div 
    class= "day">${day}</div>`);
    console.log(day);

}

