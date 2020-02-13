import React from "react";
import PropTypes  from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress"
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';

const WeatherLocation = ({onWeatherLocaitonClick, city, data}) =>{ 
  console.log("h: ",data)
  return (
    <div className="weatherLocationCont" onClick={onWeatherLocaitonClick}>
      <Location city={city}/>
      {data ? <WeatherData data={data}/> :
      <CircularProgress size={60} thickness={7}/>}
    </div>
)};
  
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocaitonClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired ,
    weatherState: PropTypes.string.isRequired ,
    humidity: PropTypes.number.isRequired ,
    wind: PropTypes.string.isRequired ,
  }),
};
export default WeatherLocation;
