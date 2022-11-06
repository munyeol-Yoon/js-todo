const $time = document.querySelector("#time");

const $yearDiv = document.createElement("div");
const $timeDiv = document.createElement("div");
const $yearSpan = document.createElement("span");
const $timeSpan = document.createElement("span");

const getDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function handleTime() {
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let date = String(today.getDate()).padStart(2, "0");
  let day = today.getDay();

  let hours = String(today.getHours()).padStart(2, "0");
  let min = String(today.getMinutes()).padStart(2, "0");
  let seconds = String(today.getSeconds()).padStart(2, "0");

  $time.append($yearDiv);
  $yearDiv.append($yearSpan);
  $yearSpan.className = "yearMonth";
  $yearSpan.textContent = `${year}년 ${month}월 ${date}일 ${getDay[day]}`;

  $time.append($timeDiv);
  $timeDiv.append($timeSpan);
  $timeSpan.className = "timeSec";
  $timeSpan.textContent = `${hours}:${min}:${seconds}`;
}

setInterval(handleTime, 1000);
