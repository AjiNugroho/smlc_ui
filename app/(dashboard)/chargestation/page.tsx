import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LocationTable from './components/LocationTable'

const page = () => {
  return (
    <Tabs defaultValue='locations'>
      <TabsList>
        <TabsTrigger value='locations' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Locations</TabsTrigger>
        <TabsTrigger value='chargers' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Charge Stations</TabsTrigger>
        <TabsTrigger value='connectors' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Connectors</TabsTrigger>
        <TabsTrigger value='sessions' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Sessions</TabsTrigger>
      </TabsList>
      <TabsContent value='locations'> 
        <div className='w-full pt-10'>
          <div>
            <LocationTable/>
          </div>
        </div>
      </TabsContent>
      <TabsContent value='chargers'> Charger Content</TabsContent>
      <TabsContent value='connectors'> Connector Content</TabsContent>
      <TabsContent value='sessions'> Session Content</TabsContent>
    </Tabs>
  )
}

export default page
