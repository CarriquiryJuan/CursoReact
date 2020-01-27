import React, { Component } from "react";
import { Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from "./components/LocationList";
import "./App.css";
const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Punta del Este,uy",
];
class App extends Component {
  handleSelectedLocation = city =>{
    console.log(`handleSelectedLocation ${city}`);
  };
  render() {
   return(
      <Grid >
        <Row >
          titulo
        </Row>
        <Row>
          <Col xs={12} md={6}>
        <LocationList cities = {cities}
         onSelectedLocation={this.handleSelectedLocation}></LocationList>
          </Col>
          <Col  xs={12} md={6}>
            <div className="details">
   
            </div>
          </Col>
        </Row>
        </Grid>
   );
  }
}

export default App;