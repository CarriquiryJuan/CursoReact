import React,{ Component } from 'react';
import PropTypes from "prop-types";
import ForecastItem from './ForecastItem';
import {url_base_forecast, api_key} from '../constants/api_url';
import transformForecast from '../services/transformForecast';
import './styles.css';
/*
const days = [
    "Lunes",
    "Masrtes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
];
const data={
    temperature:10,
    humidity:10,
    weatherState: 'normal',
    wind: "normal",
}*/
class ForecastExtended extends Component{

    constructor(){
        super();       
        this.state = {
           forecastData:null,
        };
        console.log("constructorForecastExtended")
    };
     
    componentDidMount(){       
        this.updateCity(this.props.city);
    };
    
    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    };

    updateCity = city => {
        console.log("componentDidMount");
        const url_forecast  =`${url_base_forecast}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then( data => {     
            return data.json();
        }).then( weather_data =>{
            console.log(weather_data);
            const forecastData =  transformForecast(weather_data); 
            console.log(forecastData);
            this.setState( {
                forecastData,});        
        }); 
    };
      
    renderForecastItemDays(forecastData){       
        return  forecastData.map(forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour} `}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>

            </ForecastItem>));
    };

    renderProgress(){
        return (<h3>Cargando Pronostico extendido...</h3>);
    };

    render() {
        const {city } = this.props;
        const {forecastData} = this.state;
        
        return (<div>
                    <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
                    {
                        forecastData ? 
                        this.renderForecastItemDays(forecastData): 
                        this.renderProgress()
                    }
                </div>);
    };
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;