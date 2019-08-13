import React from 'react';
import WeatherTermperature from './WeatherTermperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    SUN,
} from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className = "weatherDataCont"> 
        <WeatherTermperature 
        temperature={20} 
        weatherState={SUN}/>
        
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
        
    </div>
);

export default WeatherData;