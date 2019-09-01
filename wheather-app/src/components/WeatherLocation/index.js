import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
//import PropTypes from "prop-types";

const WeatherLocation = () => (
  <div>
    <Location city={"eee"}></Location>
    <WeatherData></WeatherData>
  </div>
);

//WeatherLocation.propTypes = {};
export default WeatherLocation;
