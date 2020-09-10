import React from "react";
import Map from "../components/GoogleMaps/Map";
import BnWMapStyle from "../components/GoogleMaps/BnWMapStyle";
import SilverStyle from "../components/GoogleMaps/SilverMapStyle";
import './MapPage.css'

const mapContainerStyle = {
    width: '50vw',
    height: '100vh'
};

const MapPage = () => {
    return (
        <div id={'mapPageContainer'}>
            <div id={'blackMap'}>
                <Map
                    containerStyle={mapContainerStyle}
                    mapStyle={BnWMapStyle}
                    API_KEY={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                />
            </div>
            <div id={'silverMap'}>
                <Map
                    containerStyle={mapContainerStyle}
                    mapStyle={SilverStyle}
                    API_KEY={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                />
            </div>
        </div>
    )
}

export default MapPage;