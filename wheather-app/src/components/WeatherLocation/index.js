import React,{Component} from "react";
import CircularProgress from "@material-ui/core/CircularProgress"
import { PropTypes } from "prop-types";
import transformWeather from "../../services/transformWeather";
import getUrlWeateherbyCity from "../../services/getUrlWeatherByCity"
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';

class WeatherLocation extends Component{
  
  constructor(props){
    super(props);
    const {city} = props
    this.state = {
      city,
      data:null,
    };
    //console.log("constructor")
  }
 
  componentDidMount(){
    //console.log("componentDidMount")
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps,prevState){
    //console.log("componentDidUpdate")
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
    const api_weather = getUrlWeateherbyCity(this.state.city) 
    fetch(api_weather).then( resolve => {     
      return resolve.json();
    }).then( data =>{
      const newWeather = transformWeather(data);     
      this.setState( {
        data: newWeather,})
    });  
  }
  
  render(){
    console.log("render")
    const{city,data}=this.state; 
    const {onWeatherLocaitonClick} = this.props;
    return (
    <div className="weatherLocationCont" onClick={onWeatherLocaitonClick}>
      <Location city={city}></Location>
      {data ?
        <WeatherData data={data}></WeatherData> :
        <CircularProgress size={60} thickness={7}/>
      }
    </div>);
  }
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocaitonClick: PropTypes.func,
};
export default WeatherLocation;
