import axios from "axios";

//api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
const client = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    units: "metric",
  },
});

type OpenWeatherCurrentResponse = {
  weather: {
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
};

export type CurrentWeather = {
  status: string | undefined;
  description: string | undefined;
  temperature: number;
  high: number;
  low: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  sunrise: number;
  sunset: number;
};

export async function current(
  lng: number,
  lat: number
): Promise<CurrentWeather> {
  const url = `/weather?lat=${lat}&lon=${lng}`;
  const response = await client.get<OpenWeatherCurrentResponse>(url);
  const data = response.data;
  const weather = data.weather[0];
  const current = {
    status: weather.main,
    description: weather.description,
    temperature: data.main.temp,
    high: data.main.temp_max,
    low: data.main.temp_min,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: data.wind.speed,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
  return current;
}
