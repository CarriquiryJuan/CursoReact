import React from "react";
import './styles.css'
import WeatherLocation from './WeatherLocation';
import { PropTypes } from "prop-types"; 

const LocationList = ( { cities,onSelectedLocation }) =>{
    const handleWeatherLocaitonClick = city =>{
        console.log("const handleWeatherLocaitonClick");
        onSelectedLocation(city);
    }

    const strToComponets =  cities  =>(
        cities.map( city=> 
        (
            <WeatherLocation
                key={city}
                city={city}
                onWeatherLocaitonClick={() => handleWeatherLocaitonClick(city)}             />))
    );
    return( <div className="locationList"> 
                {strToComponets(cities)}            
            </div>
        )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList