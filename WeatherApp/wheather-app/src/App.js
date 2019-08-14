import React , {Component} from 'react';
import './App.css';
import LocationList from './components/locationList';


    const cities =[
    "Barcelona,es",
    "Madrid,es",
    "A Coruña,es",
    "Oviedo,es",
    "Venezuela,ven",
    ];

class App extends Component{

    handleSelectedLocation = city =>{
        console.log(`handleSelectedLocation ${city}`);
    }
    render(){
    return ( 

         <div className="App">
        <LocationList cities = {cities} 
        onSelectedLocation={this.handleSelectedLocation}></LocationList> 
        </div>
    );
    }
}

export default App;