const year = document.querySelector("#year");

const date = new Date();

year.innerHTML = `${date.getFullYear()}`;

document.getElementById("lastModification").textContent = `${document.lastModified}`;

//Wind chill factor

const temperature = 8;
const windSpeed = 5;

if (temperature <= 10 && windSpeed > 4.8) {

    let calculateWindChill = (temperature, windSpeed) => 13.12 + (0.6215 * parseFloat(temperature)) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * parseFloat(temperature) * (windSpeed ** 0.16));

    document.querySelector("#windChill").textContent = `${calculateWindChill(temperature, windSpeed).toFixed(2)} °C`;

}