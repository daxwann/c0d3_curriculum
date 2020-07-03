const currentDate = new Date();
const currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][currentDate.getDay()];
const currentMonth = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"][currentDate.getMonth()];

const time = document.getElementById("time");
const day = document.getElementById("day");
const date = document.getElementById("date");
const watchDatetime = document.getElementById("watchDatetime");

time.innerText = `${currentDate.getHours()}:${currentDate.getMinutes() < 10 ? "0" : ""}${currentDate.getMinutes()}`;
day.innerText = currentDay;
date.innerText = `${currentMonth} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

const toggleReveal = event => {
  watchDatetime.classList.toggle("reveal");
}

watchDatetime.addEventListener("click", toggleReveal);