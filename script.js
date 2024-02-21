const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = '20 mar 2024';
console.log(newYears)

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  let timeLeft = newYearsDate - currentDate;

  const days = 1000 * 60 * 60 * 24;
  const hours = 1000 * 60 * 60;
  const mins = 1000 * 60;
  const seconds = 1000;

  leftDays = Math.floor(timeLeft / days);
  leftHours = Math.floor((timeLeft % days) / hours);
  leftMins = Math.floor((timeLeft % hours) / mins);
  leftSeconds = Math.floor((timeLeft % mins) / seconds);

  daysEl.textContent = leftDays;
  hoursEl.textContent = formatTime(leftHours);
  minsEl.textContent = formatTime(leftMins);
  secondsEl.textContent = formatTime(leftSeconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
