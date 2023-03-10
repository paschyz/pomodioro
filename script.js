const timeStop = new Audio("audio/timeStop.mp3");
const timeResume = new Audio("audio/timeResume.mp3");

let timer = document.getElementById("timer");
let startStopBtn = document.getElementById("startStopBtn");
let secondsSpan = document.getElementById("seconds");
let minutesSpan = document.getElementById("minutes");
let hoursSpan = document.getElementById("hours");

let seconds = 0;
let minutes = 0;
let hours = 0;

let bool = true;

let increment;

function startAndStop() {
  if (bool) {
    increment = setInterval(function () {
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
    timeResume.play();
    startStopBtn.innerHTML = "Stop Time";
    bool = false;
  } else {
    timeStop.play();
    clearInterval(increment);
    startStopBtn.innerHTML = "Resume Time";
    bool = true;
  }
}
