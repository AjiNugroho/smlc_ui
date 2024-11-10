import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GroupDetails from './components/GroupDetails'
import SmartChargingManager from './components/SmartChargingManager'
import ChargingProfileWrapper from './components/ChargingProfileWrapper'

const page = () => {
  return (
    <Tabs defaultValue='sitemap'>
      <TabsList className='bg-white'>
        <TabsTrigger value='sitemap' className='data-[state=active]:bg-[#0035a3] data-[state=active]:text-white'>Site Configuration</TabsTrigger>
        <TabsTrigger value='config' className='data-[state=active]:bg-[#0035a3] data-[state=active]:text-white'>Controller</TabsTrigger>
        <TabsTrigger value='profiles' className='data-[state=active]:bg-[#0035a3] data-[state=active]:text-white'>Charging Profiles</TabsTrigger>
      </TabsList>
  
      <TabsContent value='sitemap'>
        <div className='flex flex-col pt-8 gap-8'>
            <GroupDetails/>
        </div>
      </TabsContent>
      <TabsContent value='config'>
        <div className='flex flex-col pt-8 gap-8'>
            <SmartChargingManager/>
        </div>
      </TabsContent>
      <TabsContent value='profiles'>
        <div className='flex flex-col pt-8 gap-8'>
            <ChargingProfileWrapper/>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default page
