const location= "Buenos Aires,ar";
const api_key="cbbef4fcac2455af3d3aa3441172add0";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather =`${url_base_weather}?q=${location}&appid=${api_key}`;//&units=metric