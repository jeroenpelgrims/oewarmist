## How to run this locally

- Make a copy of `.env.sample` and rename it to `.env`
- Fill in the values for the environment variables in that file. (OpenWeather API key and Mapbox API key)
- Run `npm install`
- Run `npm run dev`
- Open the browser and go to `http://localhost:5173/`

## Choices made

### Why Algolia Autocomplete

Only maintained autocomplete solution that supports TS, is UI library agnostic and doesn't use Jquery.
The styling doesn't match well in this example, but it's possible to implement a custom renderer, which I won't do now because that will take too much time.

### Why Mapbox geocoding

I only noticed after implementing the autocomplete that OpenWeather also offers a geocoding API.

### Why `/weather` endpoint instead of `/onecall`

For some reason my api key doesn't work with the onecall endpoint.  
But the `/weather` endpoint had all the data I needed anyways.

### Why didn't I implement the 7 day forecast and the 5 day history

My api key for some reason doesn't want to work for those endpoints either...  
I'm assuming you want to test my knowledge of concurrent requests there.  
For that I'd use `Promise.all` or `Promise.allSettled`.  
The list of next dates I'd calculate by creating a list of the numbers 1 to 5.  
I'd then map over that list and use dayjs's `.add(x, 'day')` method to get the next 5 days. (x = the number that's being mapped over)  
I'd then have an array of the 5 next days, which I'd then map over and make an api call for each of them to get the historical data.  
I'd then have a list of promises which I'd then put into `Promise.all` to execute the calls concurrently.
