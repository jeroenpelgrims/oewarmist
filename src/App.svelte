<script lang="ts">
  import Autocomplete from "./components/Autocomplete/index.svelte";
  import type { GeoAutoCompleteItem } from "./components/Autocomplete/mapboxSource";
  import LocationWeather from "./components/LocationWeather/index.svelte";

  let location: GeoAutoCompleteItem | undefined = undefined;
</script>

<main class="container mx-auto px-4 py-8">
  <Autocomplete onSelected={(item) => (location = item)} />

  {#if location}
    <LocationWeather {location} />
  {/if}
</main>
