import type { AutocompleteSource } from "@algolia/autocomplete-js";
import { autoCompleteLocation } from "../../api/mapbox";

const sourceId = "MAPBOX_AUTOCOMPLETE";

export interface GeoAutoCompleteItem extends Record<string, unknown> {
  name: string;
  lat: number;
  lng: number;
}

export async function mapboxAutocompleteSource(
  query: string,
  onSelected: (item: GeoAutoCompleteItem) => void
): Promise<AutocompleteSource<GeoAutoCompleteItem>> {
  const results = await autoCompleteLocation(query);
  return {
    sourceId,
    getItems: () => results,
    getItemInputValue: ({ item }) => item.name,
    templates: {
      item({ item }) {
        return item.name;
      },
    },
    onSelect({ item }) {
      onSelected(item);
    },
  };
}
