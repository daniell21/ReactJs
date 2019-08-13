import React from 'react';
import WeatherTermperature from './WeatherTermperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (

    <div > 
        <WeatherTermperature 
        temperature={20} 
        weatherState={''}/>
        
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
        
    </div>
);

export default WeatherData;