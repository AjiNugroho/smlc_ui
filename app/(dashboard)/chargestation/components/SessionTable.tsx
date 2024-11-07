import React from 'react'
import DynamicTable from './DynamicTable'

const SessionTable = () => {

    const onGoingSession=[
        {   id:1,
            name:'KLCC Charger',
            status:'active',
            number:1,
            type:'CCS2',
            User:'User21948',
            IDTag:'234jhfudfh',
            action:''
        },
        {   id:2,
            name:'KLCC Charger',
            status:'active',
            number:2,
            type:'CCS2',
            User:'User21948',
            IDTag:'234jhfudfh',
            action:''
        },
        {   id:3,
            name:'KLCC Charger',
            status:'active',
            number:3,
            type:'CCS2',
            User:'User21948',
            IDTag:'234jhfudfh',
            action:''
        },
        {   id:4,
            name:'KLCC Charger',
            status:'active',
            number:4,
            type:'CCS2',
            User:'User21948',
            IDTag:'234jhfudfh',
            action:''
        },
        {   id:5,
            name:'Xpark Charger',
            status:'active',
            number:1,
            type:'CCS2',
            User:'User21948',
            IDTag:'234jhfudfh',
            action:''
        },
        {   id:6,
            name:'Xpark Charger',
            status:'active',
            number:2,
            type:'CCS2',
            User:'User21948',
            IDTag:'234jhfudfh',
            action:''
        },
        {   id:7,
            name:'Xpark Charger',
            status:'active',
            number:3,
            type:'CCS2',
            User:'User21948',
            IDTag:'234jhfudfh',
            action:''
        },
        {   id:8,
            name:'Xpark Charger',
            status:'active',
            number:4,
            type:'CCS2',
            User:'User21948',
            IDTag:'234jhfudfh',
            action:''
        },
    ]
  return (
    <div>
        <DynamicTable data={onGoingSession} rename='Charge station' title='Active sessions' action/>
    </div>
  )
}

export default SessionTable
