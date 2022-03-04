import React from "react";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text, lat, lng }) =>
    <div>
        <div className="Locate-div">{text}</div><b>({lat},{lng})</b>
    </div>;
export default function Contact() {
    const defaultProps = {
        center: {
            lat: 17.4533584,
            lng: 78.3702936
        },
        zoom: 11
    };
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={17.4533584}
                    lng={78.3702936}
                    text="📍"
                />
            </GoogleMapReact>
        </div>
    );
};