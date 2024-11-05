'use client'

import React from 'react'
import { MapContainer, TileLayer,LayersControl} from 'react-leaflet';
import { LatLngExpression} from 'leaflet';
import "leaflet/dist/leaflet.css";


const MalaysiaMap = () => {
    const malaysiaCoordinates:LatLngExpression = [4.017699, 109.110736]; // Center coordinates of Malaysia
    return (
        <div id='inmap' className='h-[500px] w-full overflow-hidden rounded-xl shadow-lg'>
            <MapContainer center={malaysiaCoordinates} zoom={7} className="w-full h-full overflow-hidden z-10">
                <LayersControl>
                    <LayersControl.BaseLayer checked name="Base Map">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
        </div>

    )
}

export default MalaysiaMap
