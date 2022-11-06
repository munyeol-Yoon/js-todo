const $icon = document.getElementById("cloud-icon");
const $geoDiv = document.querySelector(".geo-hidden");

const API_KEY = "249bae957dd601b89b5ad1dd4d9459f3";

const img = document.getElementById("weather-icon");

const imgIcon = [
  "01d",
  "02d",
  "03d",
  "04d",
  "09d",
  "10d",
  "11d",
  "13d",
  "50d",
  "01n",
  "02n",
  "03n",
  "04n",
  "09n",
  "10n",
  "11n",
  "13n",
  "50n",
];

const handleMouseOver = () => {
  $geoDiv.removeAttribute("id");
};

const handleMouseOut = () => {
  $geoDiv.id = "geo-hidden";
};

function showYourLocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}
    `;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#city span");
      const weather = document.querySelector("#weather span");
      const country = document.querySelector("#country span");
      const curtemp = document.querySelector("#curtemp span");

      const findIcon = imgIcon.indexOf(data.weather[0].icon);

      const imgUrl = `http://openweathermap.org/img/wn/${imgIcon[findIcon]}@2x.png`;

      city.innerText = `국가 : ${data.sys.country}`;
      country.innerText = `지역 : ${data.name}`;
      curtemp.innerText = `날씨 : ${data.weather[0].main}`;
      weather.innerText = `온도 : ${Math.floor(data.main.temp - 273.15)}ºC`;

      img.src = imgUrl;
    });
}

function showErrorMsg(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      $geoDiv.innerHTML = "API 요청 거부";
      break;
    case error.POSITION_UNAVAILABLE:
      $geoDiv.innerHTML = "가져온 위치를 사용할수 없음";
      break;
    case error.TIMEOUT:
      $geoDiv.innerHTML = "시간초과";
      break;
    case error.UNKNOWN_ERROR:
      $geoDiv.innerHTML = "알수없는 오류";
      break;
    default:
      $geoDiv.innerHTML = "날씨를 찾을수 없습니다.";
  }
}

navigator.geolocation.getCurrentPosition(showYourLocation, showErrorMsg);

$icon.addEventListener("mouseover", handleMouseOver);
$icon.addEventListener("mouseout", handleMouseOut);
