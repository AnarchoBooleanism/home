import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './style/Map.css';

const Map = () => {
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: location.center,
            map,
            title: 'San Diego, CA'
        });
        return marker;
    };

    const [location, setLocation] = useState({
        address: "San Diego, CA",
        center: {
        lat: 32.715736,
        lng: -117.161087
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