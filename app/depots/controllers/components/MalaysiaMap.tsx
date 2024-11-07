'use client'

import React from 'react'
import { MapContainer, TileLayer,LayersControl,Marker,Popup, LayerGroup} from 'react-leaflet';
import { LatLngExpression} from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";



const MalaysiaMap = () => {
    const malaysiaCoordinates:LatLngExpression = [4.017699, 109.110736]; // Center coordinates of Malaysia

    const data = [
        {
          id: 1,
          name: 'KLCC central depot',
          address: 'KLCC, 156 Ampang Road, Bukit Bintang',
          state: 'Kuala Lumpur',
          latitude: 3.1592469,
          longitude: 101.7133662,
          charger: 50,
          connector: '5/25',
          sessions: 20
        },
        {
            id: 2,
            name: 'Selangor Depot',
            address: 'Jalan Mivo 1, Sungai Buloh, Selangor, Malaysia',
            state: 'Selangor',
            latitude: 3.2090206,
            longitude: 101.6050515,
            charger: 30,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 3,
            name: 'Johor Depot',
            address: 'Pagoh, Johor, Malaysia',
            state: 'Johor',
            latitude:2.149223,
            longitude: 102.7721509,
            charger: 40,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 4,
            name: 'Kedah Depot',
            address: 'Jalan A7, Kulim Hi-tech Park, Kulim, Kedah, Malaysia',
            state: 'Kedah',
            latitude: 5.442551,
            longitude: 100.563079,
            charger: 30,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 5,
            name: 'Penang Depot',
            address: 'Paya Terubong, Air Itam, Penang, Malaysia',
            state: 'Penang',
            latitude: 5.373954,
            longitude: 100.2777908,
            charger: 45,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 6,
            name: 'KLANG Depot',
            address: 'Lorong Perbandaran, Kawasan 1, Klang, Selangor, Malaysia',
            state: 'Selangor',
            latitude: 3.0446972,
            longitude: 101.4435381,
            charger: 60,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 7,
            name: 'Cyberjaya Depot',
            address: 'Persiaran Multimedia, Cyber 7, 63000 Cyberjaya',
            state: 'Cyberjaya',
            latitude: 2.9212264,
            longitude: 101.6493963,
            charger: 35,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 8,
            name: 'Ipoh Depot',
            address: '1, Jalan Tun Sambanthan, 30000 Ipoh',
            state: 'Ipoh',
            latitude: 4.5979659,
            longitude: 101.0762293,
            charger: 25,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 9,
            name: 'Seremban Depot',
            address: 'Lebuhraya Kuala Lumpur - Seremban, Kuala Lumpur',
            state: 'Kuala Lumpur',
            latitude: 3.0765802,
            longitude: 101.7029419,
            charger: 35,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 10,
            name: 'Petronas Depot',
            address: 'Petronas Sungai Perak Southbound, 33000 Perak',
            state: 'Perak',
            latitude: 4.7137003,
            longitude: 100.9447991,
            charger: 60,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 11,
            name: 'Melaka Depot',
            address: 'Jalan Bendahara, 75100 Melaka',
            state: 'Melaka',
            latitude: 2.1991297,
            longitude: 102.252341,
            charger: 40,
            connector: '5/25',
            sessions: 20
        },
        {
            id: 12,
            name: 'EVC Depot',
            address: 'EVC Headqurters Office',
            state: 'Selangor',
            latitude: 3.2083304,
            longitude: 101.304146,
            charger: 50,
            connector: '5/25',
            sessions: 20
        },
      ]

    return (
        <div id='inmap' className='h-[525px] w-full overflow-hidden rounded-xl shadow-lg'>
            <MapContainer center={malaysiaCoordinates} zoom={7} className="w-full h-full overflow-hidden z-10">
                <LayersControl>
                    <LayersControl.BaseLayer checked name="Base Map">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </LayersControl.BaseLayer>

                    <LayersControl.Overlay name="Depot Locations" checked>
                        <LayerGroup>
                        {data.map(dt=>(
                            <Marker key={dt.id} position={[dt.latitude, dt.longitude]}>
                                <Popup>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-lg font-bold">{dt.name}</div>
                                        <div className="flex items-center">
                                            <p>Total chargers : </p>
                                            <div className="text-sm">{dt.charger}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <p>Connectors : </p>
                                            <div className="text-sm">{dt.connector}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <p>Total Sessions : </p>
                                            <div className="text-sm">{dt.sessions}</div>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                        </LayerGroup>
                    </LayersControl.Overlay>
                </LayersControl>
            </MapContainer>
        </div>

    )
}

export default MalaysiaMap
