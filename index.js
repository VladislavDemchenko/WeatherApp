

const apiKey = "0100b9a4a6f6a8d6fbd804ff1a8332ed";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");




async function checkWeather(city) {
    const response = await fetch( apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {

        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = (Math.round(data.main.temp) + '°C')
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%'
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h'

        const weatherIcon = document.querySelector('.weather-icon');

        switch (data.weather[0].main) {
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".error").style.display = "none";

        document.querySelector(".weather").style.display = "block";
    }
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

// function onClick(){
//     checkWeather(searchBox.value);
//
// }