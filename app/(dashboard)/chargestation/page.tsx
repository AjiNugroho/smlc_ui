import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LocationTableV2 from './components/LocationTableV2'
import ConnectorTable from './components/ConnectorTable'
import SessionTable from './components/SessionTable'

const data = [
  {   id:1,
      name:'KLCC Charger',
      address:'KLCC central Street no 1',
      state:'Kuala Lumpur',
      city:'Kuala Lumpur',
      status:'online',
      connectors:'4/4',
      available_conn:4,
      occupied_conn:0
  },
  {
      id:2,
      name:'Xpark Charger',
      address:'Xpark Street no 1',
      state:'Selangor',
      city:'Petaling Jaya',
      status:'online',
      connectors:'3/4',
      available_conn:3,
      occupied_conn:1
  },
  {
      id:3,
      name:'One Utama Charger',
      address:'One Utama Street no 1',
      state:'Selangor',
      city:'Selangor',
      status:'online',
      connectors:'1/4',
      available_conn:1,
      occupied_conn:3
      
  },
  {
      id:4,
      name:'EVC Charger',
      address:'KLCC central Street no 1',
      state:'Selangor',
      city:'Petaling Jaya',
      status:'online',
      connectors:'2/4',
      available_conn:2,
      occupied_conn:2
      
  },
  {
      id:5,
      name:'EVCxGentary Charger',
      address:'EVC partner Street no 1',
      state:'Kuching',
      city:'Kuching',
      status:'online',
      connectors:'0/4',
      available_conn:0,
      occupied_conn:4
      
  }
]

const page = () => {
  return (
    <Tabs defaultValue='chargers'>
      <TabsList className='bg-white'>
        <TabsTrigger value='chargers' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Charge Stations</TabsTrigger>
        <TabsTrigger value='connectors' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Connectors</TabsTrigger>
        <TabsTrigger value='sessions' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Sessions</TabsTrigger>
      </TabsList>
      <TabsContent value='chargers'> 
        <div className='w-full pt-8'>
          <div className='bg-white p-4 rounded-xl'>
            <LocationTableV2 data={data}/>
          </div>
        </div>
      </TabsContent>
      <TabsContent value='connectors'>
        <div className='w-full pt-8'>
            <div className='bg-white p-4 rounded-xl'>
              <ConnectorTable/>
            </div>
          </div>
      </TabsContent>
      <TabsContent value='sessions'>
        <div className='w-full pt-8'>
            <div className='bg-white p-4 rounded-xl'>
              <SessionTable/>
            </div>
          </div>
      </TabsContent>
    </Tabs>
  )
}

export default page
