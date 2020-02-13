import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './../actions';
import LocationList from "./../components/LocationList";
import {getWeatherCities, getCity} from "./../reducers";
class LocationListContainer extends Component {
    componentDidMount() {       
        this.props.setWeather(this.props.cities);
        
        this.props.setSelectedCity(this.props.city);
    }
    handleSelectedLocation = city =>{            
        this.props.setSelectedCity(city);
    }

    render() {
        return (
                <LocationList cities = {this.props.citiesWheather}
         onSelectedLocation={this.handleSelectedLocation}></LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWheather: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
}
const mapDispatchToProps = dispatch => bindActionCreators(actions,dispatch);
/*
const mapDispatchToProps  = dispatch=>({ 
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
 });*/

const mapStateToProps = state => ({citiesWheather: getWeatherCities(state),city: getCity(state)});
 export default connect(mapStateToProps,mapDispatchToProps)(LocationListContainer);