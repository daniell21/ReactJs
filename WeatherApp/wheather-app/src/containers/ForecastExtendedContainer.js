import React, { Component } from 'react';
import PropTypes from 'prop-types';
//importacion del conect
import {connect}  from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

//componente que tiene acceso al estado de la aplicacion (connect). estos deben ser de alto nivel
class ForecastExtendedContainer extends Component {
    render() {
        return (
                this.props.city &&
                <ForecastExtended city={this.props.city}/>
            
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
}

//tiene como parametro el state de la aplicacion
const mapStateToProps = ({ city }) =>({city});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);