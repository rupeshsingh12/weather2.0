const apiKey = '2d0bd1e3aaa5ba738d0a8499dfc47b13';

document.getElementById('weatherForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const city = document.getElementById('cityInput').value.trim();
  const error = document.getElementById('error');
  const weatherBox = document.getElementById('weatherBox');

  if (!city) return;

  error.textContent = '';
  weatherBox.style.display = 'none';

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    document.getElementById('weatherCity').textContent = `Weather in ${data.name}`;
    document.getElementById('weatherTemp').textContent = data.main.temp;
    document.getElementById('weatherDesc').textContent = data.weather[0].description;
    document.getElementById('weatherHumidity').textContent = data.main.humidity;

    weatherBox.style.display = 'block';
  } catch (err) {
    error.textContent = "City not found. Please try again.";
  }
});
