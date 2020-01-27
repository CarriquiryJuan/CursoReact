import React from "react";
import WeatherLocation from './WeatherLocation';
import { PropTypes } from "prop-types"; 

const strToComponets =  cities  =>(
        cities.map( city=> <WeatherLocation key={city} city={city}></WeatherLocation> )
);

const LocationList = ( { cities }) =>{
    return( <div>
                {strToComponets(cities)}            
            </div>
        )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList