import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { RxGear } from "react-icons/rx";
import { VscDebugRestart } from "react-icons/vsc";
import { Button } from "@/components/ui/button"
import GroupDetailsConnector from './GroupDetailsConnector'

const GroupDetails = () => {
  
  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full flex gap-4'>
        <Select >
          <SelectTrigger className="max-w-[225px] focus:ring-transparent">
            <SelectValue placeholder="Select a group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Available Group</SelectLabel>
              <SelectItem value="group1">Group 1</SelectItem>
              <SelectItem value="group2">Group 2</SelectItem>
              <SelectItem value="group3">Group 3</SelectItem>
              <SelectItem value="group4">Group 4</SelectItem>
              
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='w-full grid grid-cols-4 min-h-[300px] gap-6'>
          <div className='col-span-1 h-full flex flex-col gap-4 p-4 shadow-md rounded-xl border'>
              <p className='font-semibold'>SMART METER</p>
              <div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>UUID</TableCell>
                    <TableCell>JKGHaj8sfj32rnmfsamnsahfkajs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Name</TableCell>
                    <TableCell>Smart Meter 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Brand</TableCell>
                    <TableCell>Pixii</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Status</TableCell>
                    <TableCell><span className='bg-green-400 px-2 py-1 rounded-md text-white'>online</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Source</TableCell>
                    <TableCell>On Grid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Load Capacity</TableCell>
                    <TableCell className='flex justify-between items-center'><p>1600/2200 VA</p> 
                    <span className='font-mono bg-yellow-400 px-2 py-1 rounded-md'>{'72%'}</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Type</TableCell>
                    <TableCell>Three-Phased</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className='col-span-1 h-full flex flex-col gap-4 p-4 shadow-md rounded-xl border'>
              {/*header  */}
            <div className='flex justify-between items-start'>
              <p className='font-semibold'>CHARGE STATION</p>
              <Select >
                <SelectTrigger className="max-w-[225px] focus:ring-transparent">
                  <SelectValue placeholder="Select a charger" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="jom001">Jom 001</SelectItem>
                    <SelectItem value="jom002">Jom 002</SelectItem>
                    <SelectItem value="jom003">Jom 003</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* identify */}
            <div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>UUID</TableCell>
                    <TableCell>JKGHajshdjh127y412mnsahfkajs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Serial Number</TableCell>
                    <TableCell>Jom 001</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Utility Ratio</TableCell>
                    <TableCell>95%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Load Capacity</TableCell>
                    <TableCell className='flex justify-between items-center'>
                      <p>240/480 kW</p>
                      <span className='font-mono bg-green-400 text-white px-2 py-1 rounded-md'>{'50%'}</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Total Sessions</TableCell>
                    <TableCell>95/100</TableCell>
                  </TableRow>

                 
                </TableBody>
              </Table>
            </div>

            <div className='flex gap-2'>
                <Button variant='destructive'><VscDebugRestart/>Re-boot</Button>
                <Button variant='secondary'><RxGear/>Configure</Button>
            </div>
          </div>
          <div className='col-span-2 h-full flex flex-col gap-4 p-4 shadow-md rounded-xl border'>
            <p className='font-semibold'>CONNECTORS</p>
            <GroupDetailsConnector/>
          </div>
      </div>
    </div>
  )
}

export default GroupDetails
