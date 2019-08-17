import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';


const api_key = "936b714b9765ab3cc24dd92253e9e7ee";
const url ="http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        //fetch or axios
       this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        
        //fetch: Hace invocacion al servidor
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
    }

    renderForecastItemDays(forecastData){
        return forecastData.map(forecastData => (
        <ForecastItem 
            key={`${forecastData.weekDay}${forecastData.hour}`}
            weekDay={forecastData.weekDay} 
            hour={forecastData.hour} 
            data={forecastData.data}>
        </ForecastItem>));
        
    }

    renderProgress = () =>{
        return <h3>"Cargando Pronostico extendido..."</h3>;
    }

    render (){
        const city = this.props.city;
        //const {city} = this.props;
        const {forecastData} = this.state;

        return (
        <div>
            <h2 className='forecast-title'>Pronóstico Extendido para {city} </h2>
            { forecastData ? 
                this.renderForecastItemDays(forecastData) : 
                this.renderProgress()}
        </div>);
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;