import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//se importa el action creator
import {setCity} from './../actions';
import LocationList from './../components/locationList';

//componente que tiene acceso al estado de la aplicacion (connect). estos deben ser de alto nivel
class LocationListContainer extends Component {

    handleSelectedLocation = city =>{
        this.props.setCity(city);
    }

    render() {
        return (
            <div>
                <LocationList cities = {this.props.cities} 
                    onSelectedLocation={this.handleSelectedLocation}>
                </LocationList> 
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

//se hace un dispatch de setCity que es el action creator
//retorna un objeto con funciones que luego se van a mapear como propiedades dentro del componente
const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

//exporta el componente con propiedades externas
export default connect(null, mapDispatchToProps)(LocationListContainer);