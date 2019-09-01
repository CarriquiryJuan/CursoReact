import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import { CLOUD, CLOUDY, RAIN, SUN, SNOW, WINDY } from "./../constants/weathers";

const icons = {
  [SUN]: "day-sunny",
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy"
};
const getWheatherIcon = weatherState => {
  const icon = icons[weatherState];
  if (icon) return <WeatherIcons name={icon} size="2x" />;
  else return <WeatherIcons name={"day-sunny"} size="2x" />;
};
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWheatherIcon(weatherState)}
    <span>{`${temperature} C`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
