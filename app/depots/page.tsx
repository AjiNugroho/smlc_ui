import React from 'react'
import CardsComponent from '../(dashboard)/(entrypoint)/components/CardsComponent'
import TimeSeriesChart from './ChartComponents/TimeseriesChart'
import UtilityRatio from './ChartComponents/UtilityRatio'
import PieChart1 from './ChartComponents/PieChart1'
// import ChartWire1 from '../(dashboard)/(entrypoint)/components/ChartWire1'

const page = () => {
    return (
      <div className='w-full flex flex-col gap-8'>
        <div className='h-36 p-4 bg-white rounded-xl space-y-4'>
          <p className='text-3xl font-semibold text-[#008ccc]'>Welcome to JomDepot !</p>
          <p className='text-gray-500'>{`Powering the future. Manage and optimize your EV charging stations. Let's charge ahead together`}</p>
        </div>
        <CardsComponent/>
        {/* <ChartWire1/> */}
        <div className='flex w-full gap-4'>
          <div className='w-[60%]'>
            <TimeSeriesChart/>
          </div>
          <div className='w-[40%] grid grid-cols-2 gap-4'>
            <UtilityRatio/>
            <PieChart1/>
            
          </div>
        </div>
        
      </div>
    )
  }

export default page
