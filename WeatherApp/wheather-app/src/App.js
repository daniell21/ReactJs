import React , {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';


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
        <Grid fluid>
            <Row>
                <AppBar position='sticky'>
                    <Toolbar>
                        <Typography >
                            Weather App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Row>
            <Row>
            <Col xs={12} md={6} >
                <LocationList cities = {cities} 
                    onSelectedLocation={this.handleSelectedLocation}>
                </LocationList> 
            </Col>
            <Col xs={12} md={6} >
                <Paper elevation={4}>
                <div className="details"></div>
                </Paper>
                
            </Col>
            </Row>
        </Grid>
    );
    }
}

export default App;