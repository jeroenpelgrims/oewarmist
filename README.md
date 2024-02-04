## Choices made

### Why Algolia Autocomplete

Only maintained autocomplete solution that supports TS, is UI library agnostic and doesn't use Jquery.
The styling doesn't match well in this example, but it's possible to implement a custom renderer, which I won't do now because that will take too much time.

### Why Mapbox geocoding

I only noticed after implementing the autocomplete that OpenWeather also offers a geocoding API.

### Why `/weather` endpoint instead of `/onecall`

For some reason my api key doesn't work with the onecall endpoint.  
But the `/weather` endpoint had all the data I needed anyways.
