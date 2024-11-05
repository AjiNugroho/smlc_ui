import React from 'react'
import CardStatistic from './components/CardStatistic'
import MapWrapper from './components/MapWrapper'
import DepotLists from './components/DepotLists'

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className='flex items-center w-full'>
            <MapWrapper/>
            <CardStatistic/>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-lg'>Depot List</p>
          <DepotLists/>
        </div>
    </div>
  )
}

export default page
