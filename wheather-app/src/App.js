import React from "react";

import "./App.css";
import LocationList from "./components/LocationList";
const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Punta del Este,uy",
];
function App() {
  return (
    <div className="App">
      <LocationList cities = {cities}></LocationList>
    </div>
  );
}

export default App;