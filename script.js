const timeStop = new Audio("audio/timeStop.mp3");
const timeResume = new Audio("audio/timeResume.mp3");

let timer = document.getElementById("timer");
let startStopBtn = document.getElementById("startStopBtn");
let secondsSpan = document.getElementById("seconds");
let minutesSpan = document.getElementById("minutes");
let minutes;
let seconds;

let mode = "work";
let totalBreakTimeInSeconds = convertMinutesAndSecondsToSeconds(0, 21);

let totalTimeInSeconds;

let totalWorkTimeInSeconds = convertMinutesAndSecondsToSeconds(0, 10);

let bool = true;

let decrement;

window.onload = function () {
  totalTimeInSeconds = totalWorkTimeInSeconds;
  calculateTime(totalTimeInSeconds);
  refreshSecondsAndMinutes();
};

function convertMinutesAndSecondsToSeconds(minutes, seconds) {
  let time = minutes * 60 + seconds;
  return time;
}

function calculateTime(sec) {
  minutes = Math.floor(sec / 60);
  seconds = sec - minutes * 60;
}

function redefineTotalTime() {
  if (mode == "work") {
    mode = "break";
    timer.style.borderColor = "blue";
    totalTimeInSeconds = totalBreakTimeInSeconds;
  } else {
    mode = "work";
    timer.style.borderColor = "red";
    totalTimeInSeconds = totalWorkTimeInSeconds;
  }
  bool = true;
  startStopBtn.innerHTML = "Resume Time";
}
function decrementTime() {
  if (totalTimeInSeconds == 0) {
    clearInterval(decrement);
    // alert("Time is up!");
    redefineTotalTime();
  } else if (seconds == 0 && minutes != 0) {
    minutes--;
    seconds = 60;

    totalTimeInSeconds--;
  } else {
    totalTimeInSeconds--;
  }
  console.log("decrementTime -> totalTimeInSeconds", totalTimeInSeconds);
  calculateTime(totalTimeInSeconds);
}

function refreshSecondsAndMinutes() {
  secondsSpan.innerHTML = addZeroIfLessThanTen(seconds);
  minutesSpan.innerHTML = addZeroIfLessThanTen(minutes);
}

function addZeroIfLessThanTen(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}

function stopTimer() {
  clearInterval(decrement);
  startStopBtn.innerHTML = "Resume Time";
  bool = true;
  timeStop.play();
}

function resumeTimer() {
  decrement = setInterval(function () {
    decrementTime();
    refreshSecondsAndMinutes();
  }, 1000);
  timeResume.play();
  startStopBtn.innerHTML = "Stop Time";
  bool = false;
}

function startAndStop() {
  if (bool) {
    resumeTimer();
  } else {
    stopTimer();
  }
}
