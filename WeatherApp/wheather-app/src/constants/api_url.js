const location = "Barcelona,esp"

const api_key = "bde2bd02d99f322b2a6cef566014529c";
const url_base_weather ="http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;