import axios from "axios";
import type { GeoAutoCompleteItem } from "../components/Autocomplete/mapboxSource";

// https://api.mapbox.com/geocoding/v5/mapbox.places/stava.json
const client = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    access_token: import.meta.env.VITE_MAPBOX_API_KEY,
    proximity: "ip",
    types: "place",
  },
});

type MapboxAutocompleteResponse = {
  features: {
    place_name: string;
    center: [number, number]; // lng, lat
  }[];
};

export async function autoCompleteLocation(query: string) {
  const response = await client.get<MapboxAutocompleteResponse>(
    `/${query}.json`
  );
  const results: GeoAutoCompleteItem[] = response.data.features.map(
    (result) => ({
      name: result.place_name,
      lat: result.center[1],
      lng: result.center[0],
    })
  );

  return results;
}
