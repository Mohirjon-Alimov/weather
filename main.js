const elForm =  document.querySelector(".form")
const elInput =  document.querySelector(".locationInput")
const elWeather = document.querySelector(".weather")


elForm.addEventListener("submit", function(e){
    e.preventDefault()

    const location = elInput.value
    getCountryData(location);
    elInput.value = null;
})


const getCountryData = async(location) => {
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)


    if(request.status > 400){
        alert("Shahar nomini tog'ri yozing!")
    } else {
        const data = await request.json()
        console.log(data);
        render(data)
    }
}
getCountryData("tashkent");

function render(data){

    const html = `
    <h3 class="text-center">${data.name}</h3>
    <p class="text-center">Temperature: ${data.main.temp}℃</p>
    <p class="text-center">Wind: ${data.wind.speed} km/h</p>
    <p class="text-center">Clouds: ${data.clouds.all}</p>
    <p class="text-center">line of sight: ${data.visibility} m</p>
    <p class="text-center">Pressure: ${data.main.pressure} mm</p>
    `;
    
    elWeather.innerHTML = null
    elWeather.insertAdjacentHTML("beforeend", html)
}
