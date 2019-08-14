import React from 'react';
import PropTypes from 'prop-types';
import WeatherTermperature from './WeatherTermperature';
import WeatherExtraInfo from './WeatherExtraInfo';


const WeatherData = ({data:{temperature,weatherState,humidity,wind}}) => (
    <div className = "weatherDataCont"> 
        <WeatherTermperature 
        temperature={temperature} 
        weatherState={weatherState}/>
        
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
        
    </div>
);

WeatherData.prototypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    }),
}

export default WeatherData;