<script lang="ts">
  import * as openweather from "../../api/openweather";
  import Current from "./Current.svelte";

  export let weather: openweather.CurrentWeather;
</script>

<Current {weather} />

<!-- See README on why these aren't implemented -->
<!-- Next 7 days -->
<!-- Past 5 days -->
