import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 37,
            lng: -101
        },
        zoom: 2
    };

    render() {
        return (
            <div style={{height: '100vh', width: '50vw'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: this.props.API_KEY}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={{
                        styles: this.props.mapStyle,
                        disableDefaultUI:true,
                        zoomControl: true
                    }}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;