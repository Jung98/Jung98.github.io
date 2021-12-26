const API_KEY = "318216c10263f7a3f61ded368252bec7";
const city = document.querySelector(".header #weather div:first-child");
const weather = document.querySelector(".header #weather div:last-child");

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longtitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.main.temp} / ${data.weather[0].main}`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);