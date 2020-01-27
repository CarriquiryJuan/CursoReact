import React,{Component} from "react";
import transformWeather from "./../services/transformWeather";
import {api_weather} from "./../../constants/api_url";
import Location from "./Location";
import WeatherData from "./WeatherData";
import CircularProgress from "@material-ui/core/CircularProgress"
import './styles.css';

class WeatherLocation extends Component{
  
  constructor(){
    super();
    this.state = {
      city:"Buenos Aires",
      data:null,
    };
    console.log("constructor")
  }
 
  componentDidMount(){
    console.log("componentDidMount")
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate")
  }
/*
  componentWillMount(){
    console.log("UNSIFE componentWillMount")
  }

  componentWillUpdate(nextProps,nextState){
    console.log("UNSIFE componentWillUpdate")
  }
*/
  handleUpdateClick=()=>{
    fetch(api_weather).then( resolve => {     
      return resolve.json();
    }).then( data =>{
      const newWeather = transformWeather(data);     
      this.setState( {
        city: "Buenos Aires!",
        data: newWeather,})
    });  
  }
  
  render(){
    console.log("render")
    const{city,data}=this.state; 
    return (
    <div className="weatherLocationCont">
      <Location city={city}></Location>
      {data ?
        <WeatherData data={data}></WeatherData> :
        <CircularProgress size={50}/>
      }
    </div>);
  }
};

//WeatherLocation.propTypes = {};
export default WeatherLocation;
