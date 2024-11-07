'use client'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import PaginationDummy from './PaginationDummy'
import { Input } from '@/components/ui/input'
// import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
// import { Button } from '@/components/ui/button'
// import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
interface locationType{
    id:number,
    name:string,
    address:string,
    state:string,
    city:string,
    status:string,
    connectors:string,
    total_usage:number,
    total_amount:number,
    total_sessions:number,
}
// type Checked = DropdownMenuCheckboxItemProps["checked"]
const LocationTable = () => {
    // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    // const [showPanel, setShowPanel] = React.useState<Checked>(false)
    const locationData:locationType[] = [
        {   id:1,
            name:'KLCC Charger',
            address:'KLCC central Street no 1',
            state:'Kuala Lumpur',
            city:'Kuala Lumpur',
            status:'online',
            connectors:'4/4',
            total_amount:5000,
            total_usage:8470,
            total_sessions:500,
        },
        {
            id:2,
            name:'Xpark Charger',
            address:'Xpark Street no 1',
            state:'Selangor',
            city:'Petaling Jaya',
            status:'online',
            connectors:'3/4',
            total_amount:3400,
            total_usage:6900,
            total_sessions:440,
        },
        {
            id:3,
            name:'One Utama Charger',
            address:'One Utama Street no 1',
            state:'Selangor',
            city:'Selangor',
            status:'online',
            connectors:'1/4',
            total_amount:4300,
            total_usage:7500,
            total_sessions:400,
            
        },
        {
            id:4,
            name:'EVC Charger',
            address:'KLCC central Street no 1',
            state:'Selangor',
            city:'Petaling Jaya',
            status:'online',
            connectors:'2/4',
            total_amount:4000,
            total_usage:7120,
            total_sessions:450,
            
        },
        {
            id:5,
            name:'EVCxGentary Charger',
            address:'EVC partner Street no 1',
            state:'Kuching',
            city:'Kuching',
            status:'online',
            connectors:'4/4',
            total_amount:3700,
            total_usage:6850,
            total_sessions:430,
            
        }
    ]
  return (
    <div className='flex flex-col gap-2 bg-white p-4 rounded-xl'>
      <div>
          <p className='text-lg font-semibold'>Location Data</p>
          <p className='text-sm font-thin text-gray-500'>View and manage your location data</p>
      </div>
      <div className='flex items-center gap-2'>
          <Input placeholder='filters' className='max-w-[300px]'/>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Connectors</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filters Connector Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                AC Type 1
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
              >
                DC ChadeMo
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                DC Fast
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableCaption className='w-full'>
            <div className='w-full flex justify-between px-4 py-2'>
                <p>Table of usage</p>
                <div>
                <PaginationDummy/>
                </div>
            </div>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>State</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Connector</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Total Usage</TableHead>
              <TableHead>Total Session</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {locationData.map((dt)=>(
                <TableRow key={dt.id}>
                    <TableCell>{dt.name}</TableCell>
                    <TableCell>{dt.address}</TableCell>
                    <TableCell>{dt.state}</TableCell>
                    <TableCell>{dt.city}</TableCell>
                    <TableCell>{dt.status}</TableCell>
                    <TableCell>{dt.connectors}</TableCell>
                    <TableCell>{dt.total_amount}</TableCell>
                    <TableCell>{dt.total_usage}</TableCell>
                    <TableCell>{dt.total_sessions}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default LocationTable
