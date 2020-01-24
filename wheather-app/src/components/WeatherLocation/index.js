import React,{Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';
import {
  SUN, WINDY  /*,CLOUD, CLOUDY, RAIN, SNOW, WINDY */
} from "./../../constants/weathers";
//import PropTypes from "prop-types";
const data={
  temperature: 21,
  weatherState:SUN,
  humidity:50,
  wind:'60 m/s',
}
const data2={
  temperature: 10,
  weatherState:WINDY,
  humidity:80,
  wind:'60 m/s',
}
class WeatherLocation extends Component{
  
  constructor(){
    super();
    this.state = {
      city:"Buenos Aires",
      data:data,
    };

  }

  handleUpdateClick=()=>{
    console.log("actualizado");
    this.setState( {
      city: "Buenos Aires!",
      data: data2,})
  }
  
  render(){
    const{city,data}=this.state; 
    return (
    <div className="weatherLocationCont">
      <Location city={city}></Location>
      <WeatherData data={data}></WeatherData>
      <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>);
  }
};

//WeatherLocation.propTypes = {};
export default WeatherLocation;
