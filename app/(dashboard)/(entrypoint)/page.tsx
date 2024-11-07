import React from 'react'
import TreeChartsV2 from './components/ThreeChartsV2'
import PowerGrid from './components/PowerGrid'
import PowerConsumption from './components/PowerConsumption'
import Batteries from './components/Batteries'

const page = () => {
  return (
    <div className='w-full flex flex-col gap-8'>
      <div className='flex w-full gap-4'>
        <div className='w-[50%]'>
          <TreeChartsV2/>
        </div>
        <div className='w-[50%] flex flex-col gap-4'>
          <div className='w-full grid grid-cols-2'>
            <PowerConsumption/>
            <Batteries/>
            {/* <SmartMeterChart/>
            <BatteryMonitor/> */}
          </div>
          <div className='w-full'>
            <PowerGrid/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
