import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api';

const center = {
    latitude: -3.745,
    longitude: -38.523
};

const Map = ({API_KEY, containerStyle, mapStyle}) => {
    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        <LoadScript
            googleMapsApiKey={API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    styles: mapStyle,
                    zoom: 100,
                    center: {lat: -3, lon: 40}
                }}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)
