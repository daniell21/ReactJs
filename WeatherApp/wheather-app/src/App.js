import React from 'react';
import WeatherLocation from './components/WeatherLocation';
import { Button } from 'reactstrap';
import './App.css';

function App() {
    return ( 
         <div className="App">
        <WeatherLocation > </WeatherLocation>   
        </div>
    );
}

export default App;