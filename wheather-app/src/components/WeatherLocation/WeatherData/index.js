import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
//import PropTypes from "prop-types";
import {
  SUN /*,CLOUD, CLOUDY, RAIN, SNOW, WINDY */
} from "./../../../constants/weathers";
import "./styles.css";

const WeatherData = () => (
  <div className="weatherDataCont" >
    <WeatherTemperature temperature={20} weatherState={SUN} />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
  </div>
);
//WeatherData.propTypes = {};

export default WeatherData;
