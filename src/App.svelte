<script lang="ts">
  import * as openweather from "./api/openweather";
  import Autocomplete from "./components/Autocomplete/index.svelte";
  import type { GeoAutoCompleteItem } from "./components/Autocomplete/mapboxSource";
  import LocationWeather from "./components/LocationWeather/index.svelte";

  let location: GeoAutoCompleteItem | undefined = undefined;
  // This can cause a race condition when the location is switched quickly
  // Doing it this way for simplicity
  $: weather = getWeather(location);

  async function getWeather(location: GeoAutoCompleteItem | undefined) {
    if (!location) {
      return undefined;
    }

    return openweather.current(location.lng, location.lat);
  }
</script>

<main class="container mx-auto px-4 py-8">
  <Autocomplete onSelected={(item) => (location = item)} />

  {#if location}
    <h1 class="text-6xl leading-loose">{location.name}</h1>
  {/if}

  {#await weather}
    <div class="grid justify-items-stretch mt-4">
      <span class="loading loading-spinner loading-lg mx-auto"></span>
    </div>
  {:then weather}
    {#if weather}
      <LocationWeather {weather} />
    {/if}
  {:catch error}
    <div role="alert" class="alert alert-error mt-4">
      <span>There was an error loading the weather data</span>
    </div>
  {/await}
</main>
