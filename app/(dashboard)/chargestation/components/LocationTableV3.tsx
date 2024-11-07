import React from 'react'
import DynamicTable from './DynamicTable'
const data = [
    {   id:1,
        name:'KLCC Charger',
        address:'KLCC central Street no 1',
        state:'Kuala Lumpur',
        city:'Kuala Lumpur',
        status:'online',
        connectors:'4/4',
        total_amount:5000,
        total_usage:8470,
        total_sessions:500,
    },
    {
        id:2,
        name:'Xpark Charger',
        address:'Xpark Street no 1',
        state:'Selangor',
        city:'Petaling Jaya',
        status:'online',
        connectors:'3/4',
        total_amount:3400,
        total_usage:6900,
        total_sessions:440,
    },
    {
        id:3,
        name:'One Utama Charger',
        address:'One Utama Street no 1',
        state:'Selangor',
        city:'Selangor',
        status:'online',
        connectors:'1/4',
        total_amount:4300,
        total_usage:7500,
        total_sessions:400,
        
    },
    {
        id:4,
        name:'EVC Charger',
        address:'KLCC central Street no 1',
        state:'Selangor',
        city:'Petaling Jaya',
        status:'online',
        connectors:'2/4',
        total_amount:4000,
        total_usage:7120,
        total_sessions:450,
        
    },
    {
        id:5,
        name:'EVCxGentary Charger',
        address:'EVC partner Street no 1',
        state:'Kuching',
        city:'Kuching',
        status:'online',
        connectors:'4/4',
        total_amount:3700,
        total_usage:6850,
        total_sessions:430,
        
    }
  ]
const LocationTableV3 = () => {
  return (
    <div>
        <DynamicTable data={data} itemsPerPage={5}/>
    </div>
  )
}

export default LocationTableV3
