import React from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import iconLocation from 'src/assets/images/icon-location.svg';

import 'leaflet/dist/leaflet.css';
import './style.scss';

const iconMarker = Leaflet.icon({
    iconUrl: iconLocation,
    iconSize: [30,50],
    iconAnchor: [30,50],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
})

function Map() {
    return (
        <div className="map__container">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={iconMarker} />
            </MapContainer>
        </div>
    );
}

export default Map;
