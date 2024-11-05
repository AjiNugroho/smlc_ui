import React from 'react'
import CardsComponent from '../(dashboard)/(entrypoint)/components/CardsComponent'
import ChartWire1 from '../(dashboard)/(entrypoint)/components/ChartWire1'

const page = () => {
    return (
      <div className='w-full flex flex-col gap-8'>
        <CardsComponent/>
        <ChartWire1/>
        
      </div>
    )
  }

export default page
