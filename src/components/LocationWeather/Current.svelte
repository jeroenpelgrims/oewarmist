<script lang="ts">
  import dayjs from "dayjs";
  import type { CurrentWeather } from "../../api/openweather";

  export let weather: CurrentWeather;
</script>

<div class="stats stats-vertical lg:stats-horizontal">
  <div class="stat">
    <div class="stat-title">Currently</div>
    <div class="stat-value">{weather.status}</div>
    <div class="stat-desc">{weather.description}</div>
  </div>

  <div class="stat">
    <div class="stat-title">Temperature</div>
    <div class="stat-value">{Math.round(weather.temperature)} &deg;C</div>
  </div>

  <div class="stat">
    <div class="stat-title">High</div>
    <div class="stat-value">{Math.round(weather.high)} &deg;C</div>
  </div>

  <div class="stat">
    <div class="stat-title">Low</div>
    <div class="stat-value">{Math.round(weather.low)} &deg;C</div>
  </div>
</div>

<div class="collapse mt-4">
  <input type="checkbox" />
  <div class="collapse-title text-xl font-medium">More details</div>
  <div class="collapse-content">
    <div class="stats stats-vertical lg:stats-horizontal">
      <div class="stat">
        <div class="stat-title">Wind speed</div>
        <div class="stat-value">{Math.round(weather.windSpeed)} m/s</div>
      </div>

      <div class="stat">
        <div class="stat-title">humidity</div>
        <div class="stat-value">{weather.humidity}%</div>
      </div>

      <div class="stat">
        <div class="stat-title">Pressure</div>
        <div class="stat-value">{weather.pressure} hPa</div>
      </div>

      <div class="stat">
        <div class="stat-title">Sunrise</div>
        <div class="stat-value">
          {dayjs.unix(weather.sunrise).format("HH:mm")}
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">Sunset</div>
        <div class="stat-value">
          {dayjs.unix(weather.sunset).format("HH:mm")}
        </div>
      </div>
    </div>
  </div>
</div>
