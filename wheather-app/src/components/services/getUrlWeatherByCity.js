import {api_key, url_base_weather} from "./../constants/api_url";


const getUrlWeateherbyCity = city =>{
   return `${url_base_weather}?q=${city}&appid=${api_key}`;//&units=metric
}

export default getUrlWeateherbyCity