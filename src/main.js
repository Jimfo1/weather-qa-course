import './styles.css';

const cityData = {
  philadelphia: { name: 'Philadelphia', latitude: 39.9526, longitude: -75.1652 },
  'new york': { name: 'New York', latitude: 40.7128, longitude: -74.0060 },
  chicago: { name: 'Chicago', latitude: 41.8781, longitude: -87.6298 },
  london: { name: 'London', latitude: 51.5072, longitude: -0.1276 },
  tokyo: { name: 'Tokyo', latitude: 35.6762, longitude: 139.6503 },
};

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="page-shell">
    <section class="hero" aria-labelledby="app-title">
      <!-- SEEDED BUG 1: Acceptance criteria expects "Weather Automation Playground" -->
      <h1 id="app-title">Weather Dashboard</h1>
      <p>Practice QA automation with GitHub Actions, Playwright, and a real weather API.</p>
    </section>

    <section class="card" aria-labelledby="signup-title">
      <h2 id="signup-title">Create Training Account</h2>
      <form id="signup-form" novalidate>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Jane Tester" />

        <label for="email">Email</label>
        <input id="email" name="email" type="email" placeholder="jane@example.com" />

        <button type="submit">Sign Up</button>
        <p id="signup-message" role="status"></p>
      </form>
    </section>

    <section class="card" aria-labelledby="login-title">
      <h2 id="login-title">Login</h2>
      <form id="login-form" novalidate>
        <label for="login-email">Email</label>
        <input id="login-email" name="login-email" type="email" placeholder="student@example.com" />

        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Password" />

        <button type="submit">Login</button>
        <p id="login-message" role="status"></p>
      </form>
    </section>

    <section class="card" aria-labelledby="weather-title">
      <h2 id="weather-title">Check Weather</h2>
      <form id="weather-form" novalidate>
        <label for="city">City</label>
        <input id="city" name="city" type="text" placeholder="Philadelphia" />
        <button type="submit">Get Weather</button>
      </form>

      <div id="loading" class="hidden">Loading weather...</div>
      <div id="weather-error" role="alert"></div>
      <article id="weather-result" class="weather-result hidden" aria-live="polite">
        <h3 id="result-city"></h3>
        <p><span id="temperature"></span> <span id="unit-label">°F</span></p>
        <p id="condition"></p>
      </article>
    </section>
  </main>
`;

const signupForm = document.querySelector('#signup-form');
const signupMessage = document.querySelector('#signup-message');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();

  // SEEDED BUG 2: This should reject invalid email addresses.
  if (!name || !email) {
    signupMessage.textContent = 'Name and email are required.';
    signupMessage.className = 'error';
    return;
  }

  signupMessage.textContent = 'Training account created.';
  signupMessage.className = 'success';
});

const loginForm = document.querySelector('#login-form');
const loginMessage = document.querySelector('#login-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#password').value.trim();

  // SEEDED BUG 3: Acceptance criteria requires password to be at least 8 characters.
  if (!email || !password) {
    loginMessage.textContent = 'Email and password are required.';
    loginMessage.className = 'error';
    return;
  }

  loginMessage.textContent = 'Login successful.';
  loginMessage.className = 'success';
});

const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city');
const loading = document.querySelector('#loading');
const weatherError = document.querySelector('#weather-error');
const weatherResult = document.querySelector('#weather-result');
const resultCity = document.querySelector('#result-city');
const temperature = document.querySelector('#temperature');
const condition = document.querySelector('#condition');
const unitLabel = document.querySelector('#unit-label');

weatherForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  weatherError.textContent = '';
  weatherResult.classList.add('hidden');

  const city = cityInput.value.trim().toLowerCase();

  // SEEDED BUG 4: Blank city should show "City is required." and stop.
  const selectedCity = cityData[city] || cityData.philadelphia;

  loading.classList.remove('hidden');

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&current_weather=true&temperature_unit=celsius`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Weather service unavailable.');
    }

    const data = await response.json();
    const current = data.current_weather;

    resultCity.textContent = selectedCity.name;
    temperature.textContent = Math.round(current.temperature);
    // SEEDED BUG 5: API returns Celsius, but UI label says Fahrenheit.
    unitLabel.textContent = '°F';
    condition.textContent = weatherCodeToText(current.weathercode);
    weatherResult.classList.remove('hidden');
  } catch (error) {
    weatherError.textContent = 'Unable to retrieve weather. Please try again.';
  } finally {
    loading.classList.add('hidden');
  }
});

function weatherCodeToText(code) {
  if ([0].includes(code)) return 'Clear sky';
  if ([1, 2, 3].includes(code)) return 'Partly cloudy';
  if ([45, 48].includes(code)) return 'Fog';
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return 'Rain';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'Snow';
  if ([95, 96, 99].includes(code)) return 'Thunderstorm';
  return 'Unknown conditions';
}
