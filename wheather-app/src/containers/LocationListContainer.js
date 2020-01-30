import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity} from './../actions';
import LocationList from "./../components/LocationList";
class LocationListContainer extends Component {
    handleSelectedLocation = city =>{            
        this.props.setCity(city);
    }

    render() {
        return (
                <LocationList cities = {this.props.cities}
         onSelectedLocation={this.handleSelectedLocation}></LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropsTypes.func.isRequired,
    cities: PropsTypes.array.isRequired,
}

const mapDispatchToProps  = dispatch=>({ 
    setCity: value => dispatch(setSelectedCity(value))
 });

 export default connect(null,mapDispatchToProps)(LocationListContainer);