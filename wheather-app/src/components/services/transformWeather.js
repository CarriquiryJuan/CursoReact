
import convert from 'convert-units';
import {
    SUN  /*,CLOUD, CLOUDY, RAIN, SNOW, WINDY */
  } from "./../../constants/weathers";

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to("C").toFixed(2));
}
const getWeatherState = info =>{
    return SUN;
}
const transformWeather = weather_data =>{
    const { humidity, temp } =weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState =getWeatherState(weather_data);
    const temperature = getTemp(temp);
    const data = {
        temperature,
        weatherState,
        humidity,
        wind:`${speed} m/s`,
    }
    return data ;

}

export default transformWeather;