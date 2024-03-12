function searchCity(event) {
  event.preventDefault();
  let currentTime = new Date();
  let cityInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = cityInput.value;

  let days = [
    "sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursady",
    "Friday",
    "Saturday",
  ];

  let day = [currentTime.getDay()];
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes().toString().padStart(2, "0");
  let dateFormat = `${day}${hours}:${minutes}`;

  let presentTime = document.querySelector("get-day-time");
  presentTime.innerHTML = `${dateFormat}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
