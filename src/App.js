import React from 'react';
import './App.css';
import GoogleMaps from "./components/GoogleMaps/Map";
import BnWMapStyle from "./components/GoogleMaps/BnWMapStyle";

function App() {
  return (
    <div className="App">
      <GoogleMaps mapStyle={BnWMapStyle}/>
    </div>
  );
}

export default App;
