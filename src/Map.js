import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './style/Map.css';

const Map = () => {
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: location.center,
            map,
            title: 'University of California Irvine, Irvine, CA 92697'
        });
        return marker;
    };

    const [location, setLocation] = useState({
        address: "University of California Irvine, Irvine, CA 92697",
        center: {
        lat: 33.64020935886593,
        lng: -117.8445310327405
        },
        zoom: 14
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
                defaultCenter={ location.center }
                defaultZoom={ location.zoom }
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
            </GoogleMapReact>
        </div>
    )
};

export default Map;