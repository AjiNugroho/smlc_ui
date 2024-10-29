import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MeterComponent from './components/MeterComponent'
import GroupsView from './components/GroupsView'
import GroupDetails from './components/GroupDetails'

const page = () => {
  return (
    <Tabs defaultValue='site'>
      <TabsList>
        <TabsTrigger value='site' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Site Overview</TabsTrigger>
        <TabsTrigger value='groups' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Group Detail</TabsTrigger>
        <TabsTrigger value='config' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Configuration</TabsTrigger>
        <TabsTrigger value='profiles' className='data-[state=active]:bg-[#008ccc] data-[state=active]:text-white'>Charging Profile</TabsTrigger>
      </TabsList>
      <TabsContent value='site'> 
        <div className='flex flex-col pt-8 gap-8'>
            <MeterComponent/>
            <GroupsView/>
        </div>
      </TabsContent>
      <TabsContent value='groups'>
        <div className='flex flex-col pt-8 gap-8'>
            <GroupDetails/>
        </div>
      </TabsContent>
      <TabsContent value='config'> b</TabsContent>
      <TabsContent value='profiles'> c</TabsContent>
    </Tabs>
  )
}

export default page
