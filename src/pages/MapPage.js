import React from "react";
import Map from "../components/GoogleMaps/Map";
import BnWMapStyle from "../components/GoogleMaps/BnWMapStyle";
import SilverStyle from "../components/GoogleMaps/SilverMapStyle";

const MapPage = () => {
    return (
        <div>
            <div id={'blackMap'}>
                <Map uniqueID={'blackMap'} mapStyle={BnWMapStyle}/>
            </div>
        </div>
    )
}

export default MapPage;