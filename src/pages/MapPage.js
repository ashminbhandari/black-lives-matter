import React from "react";
import Map from "../components/GoogleMaps/Map";
import BnWMapStyle from "../components/GoogleMaps/BnWMapStyle";
import SilverStyle from "../components/GoogleMaps/SilverMapStyle";

const MapPage = () => {
    return (
        <div>
            <div id={'blackMap'}>
                <Map API_KEY={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}/>
            </div>
            <div id={'silverMap'}>
                <Map API_KEY={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}/>
            </div>
        </div>
    )
}

export default MapPage;