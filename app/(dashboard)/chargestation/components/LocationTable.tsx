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
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
interface locationType{
    id:number,
    name:string,
    address:string,
    state:string,
    city:string,
    status:string[],
    connectors:string,
    chargers:string[]
}
type Checked = DropdownMenuCheckboxItemProps["checked"]
const LocationTable = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
    const locationData:locationType[] = [
        {   id:1,
            name:'KLCC Central',
            address:'KLCC central Street no 1',
            state:'Kuala Lumpur',
            city:'Kuala Lumpur',
            status:['on','on','on','on'],
            connectors:'7/10',
            chargers:['jom_001','jom_002']
        },
        {
            id:2,
            name:'Xpark',
            address:'Xpark Street no 1',
            state:'Selangor',
            city:'Petaling Jaya',
            status:['on','on','on','on'],
            connectors:'7/10',
            chargers:['jom_001','jom_002']
        },
        {
            id:3,
            name:'One Utama Park',
            address:'One Utama Street no 1',
            state:'Selangor',
            city:'Selangor',
            status:['on','on','on','on'],
            connectors:'7/10',
            chargers:['jom_001','jom_002']
        },
        {
            id:4,
            name:'EVC office',
            address:'KLCC central Street no 1',
            state:'Selangor',
            city:'Petaling Jaya',
            status:['on','on','on','on'],
            connectors:'7/10',
            chargers:['jom_001','jom_002']
        },
        {
            id:5,
            name:'EVC partner',
            address:'EVC partner Street no 1',
            state:'Kuching',
            city:'Kuching',
            status:['on','on','on','on'],
            connectors:'7/10',
            chargers:['jom_001','jom_002']
        }
    ]
  return (
    <div className='flex flex-col gap-2'>
      <div>
          <p className='text-xl font-semibold'>Location Data</p>
          <p className='text-sm font-thin text-gray-500'>View and manage your location data</p>
      </div>
      <div className='flex items-center gap-2'>
          <Input placeholder='filters' className='max-w-[300px]'/>
          <DropdownMenu>
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
          </DropdownMenu>
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
              <TableHead>Charger</TableHead>
              <TableHead>Action</TableHead>
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
                    <TableCell>{dt.chargers}</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default LocationTable
