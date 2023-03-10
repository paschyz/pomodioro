let timer = document.getElementById("timer");
let start = document.getElementById("start");
let secondsSpan = document.getElementById("seconds");
let minutesSpan = document.getElementById("minutes");
let hoursSpan = document.getElementById("hours");

let seconds = 0;
let minutes = 0;
let hours = 0;

let bool = true;

function increment(seconds) {}

setInterval(function () {
  if (seconds >= 59) {
    if (minutes >= 59) {
      hours++;
      minutes = 0;
      seconds = 0;

      minutesSpan.innerHTML = minutes;
      hoursSpan.innerHTML = hours;
    } else {
      minutes++;
      seconds = 0;

      minutesSpan.innerHTML = minutes;
    }
  } else {
    seconds++;
  }

  secondsSpan.innerHTML = seconds;
}, 1000);