import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity, setWeather} from './../actions';
import LocationList from "./../components/LocationList";
import {getWeatherCities} from "./../reducers";
class LocationListContainer extends Component {
    componentDidMount() {       
        this.props.setWeather(this.props.cities);
    }
    handleSelectedLocation = city =>{            
        this.props.setCity(city);
    }

    render() {
        return (
                <LocationList cities = {this.props.citiesWheather}
         onSelectedLocation={this.handleSelectedLocation}></LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropsTypes.func.isRequired,
    cities: PropsTypes.array.isRequired,
    citiesWheather: PropsTypes.array.isRequired,
}

const mapDispatchToProps  = dispatch=>({ 
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
 });
const mapStateToProps = state => ({citiesWheather: getWeatherCities(state)});
 export default connect(mapStateToProps,mapDispatchToProps)(LocationListContainer);