<script lang="ts">
  import { autocomplete } from "@algolia/autocomplete-js";
  import "@algolia/autocomplete-theme-classic";
  import { onMount } from "svelte";
  import {
    mapboxAutocompleteSource,
    type GeoAutoCompleteItem,
  } from "./mapboxSource";

  export let onSelected: (item: GeoAutoCompleteItem | undefined) => void;

  onMount(() => {
    autocomplete<GeoAutoCompleteItem>({
      container: "#autocomplete",
      placeholder: "Type your location here",
      autoFocus: true,
      async getSources({ query }) {
        const mapBoxResults = await mapboxAutocompleteSource(query, onSelected);
        return [mapBoxResults];
      },
      onReset() {
        onSelected(undefined);
      },
    });
  });
</script>

<div id="autocomplete"></div>
