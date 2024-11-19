let startTime, elapsedTime = 0, timerInterval;
let laps = [];

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  return `${pad(hh)}:${pad(mm)}:${pad(ss)}.${pad(ms, 2)}`;
}

function pad(value, digits = 2) {
  return String(value).padStart(digits, "0");
}

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function printLap(lap) {
  let lapDiv = document.createElement("div");
  lapDiv.innerHTML = lap;
  document.getElementById("laps").appendChild(lapDiv);
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  print("00:00:00.00");
  elapsedTime = 0;
  document.getElementById("laps").innerHTML = "";
}

function lapStopwatch() {
  if (elapsedTime !== 0) {
    let lapTime = timeToString(elapsedTime);
    laps.push(lapTime);
    printLap(`Lap ${laps.length}: ${lapTime}`);
  }
}
