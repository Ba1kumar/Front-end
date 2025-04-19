const apiKey = "e91fdd0658b5575dbef57438a1da84dc"; // Replace with your OpenWeatherMap API Key

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherResult').innerHTML = weatherHTML;
  } catch (err) {
    document.getElementById('weatherResult').innerHTML = `<p style="color: red;">${err.message}</p>`;
  }
}
