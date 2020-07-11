
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let daysCounter = document.getElementById('days');
let hoursCounter = document.getElementById('hours');
let minutesCounter = document.getElementById('minutes');
let secondsCounter = document.getElementById('seconds');
let milisecondsCounter = document.getElementById('miliseconds');

var interval;

function timer(){
    miliseconds++
    milisecondsCounter.innerHTML = miliseconds;
    if (miliseconds >=100){
        seconds++
        secondsCounter.innerHTML = seconds;
        miliseconds = 0;
    }

    // pasted note
    else if (seconds >= 60) {
        minutes++
        minutesCounter.innerHTML = minutes;
        seconds = 0;
    }
    else if (minutes >= 60) {
        hours++
        hoursCounter.innerHTML = hours;
        minutes = 0;
    }
    else if (hours >= 24) {
        days++
        daysCounter.innerHTML = days;
        hours = 0;
    }
}
function start() {
    interval = setInterval(timer, 10)
    // start().disabled=true
    $("#start").attr("disabled", true);
}
function stop() {
    clearInterval(interval);
    $("#start").attr("disabled", false);
}
function reset() {
    days        = 0;
    hours       = 0;
    minutes     = 0;
    seconds     = 0;
    miliseconds = 0;
    daysCounter.innerHTML=days;
    hoursCounter.innerHTML=hours;
    minutesCounter.innerHTML=minutes;
    secondsCounter.innerHTML=seconds;
    milisecondsCounter.innerHTML=miliseconds;
    stop()
    $("#start").attr("disabled", false);
}

let lapList = document.querySelector(".lap-list")

function lap(){
    document.getElementById("number")
    

    var newLap = document.createElement("li")
    lapList.appendChild(newLap)
    

    newLap.innerHTML = days + " days " + hours + " hours " + minutes + " min " + seconds + " sec " + miliseconds + " milisec "
}