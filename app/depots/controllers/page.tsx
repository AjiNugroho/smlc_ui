import React from 'react'
import CardStatistic from './components/CardStatistic'
import MapWrapper from './components/MapWrapper'
import DepotDataTable from './components/DepotDataTable'

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className='flex items-center w-full gap-6'>
            <MapWrapper/>
            <CardStatistic/>
        </div>
        <div className='flex flex-col gap-2 bg-white p-4 rounded-xl'>
          <DepotDataTable/>
        </div>
    </div>
  )
}

export default page
