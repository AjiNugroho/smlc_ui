import React from 'react'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
// import { RxGear } from "react-icons/rx";
// import { VscDebugRestart } from "react-icons/vsc";
// import GroupDetailsConnector from './GroupDetailsConnector'
import { Button } from "@/components/ui/button"
import { UtilityPole } from 'lucide-react';
import { BiSolidMicrochip } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { RiChargingPile2Fill } from "react-icons/ri";


const GroupDetails = () => {
  const SmartMeters = [
    {
      uuid:'uyjn3jrk2hkjnasfm',
      name:'Meter 1',
      brand:'pixii',
      status:'online',
      source:'grid',
      capacity:2200,
      cs:3
    },
    {
      uuid:'uyjn3jrk2hkjnasfm',
      name:'Meter 2',
      brand:'Sneiders',
      status:'online',
      source:'grid',
      capacity:2200,
      cs:2
    },
    {
      uuid:'uyjn3jrk2hkjnasfm',
      name:'Meter 3',
      brand:'Sneiders',
      status:'online',
      source:'grid',
      capacity:1300,
      cs:3
    }
  ]  

  const chargers=[
    {
      uuid:'sdjbfkbw3ry8dsfnsdh',
      serial:'Pras001',
      brand:'ABB',
      capacity:480,
      source:'meter 1',
      status:'online',
      connectors:2 
    },
    {
      uuid:'sdjbfkbw3ry8dsfnsdh',
      serial:'Pras002',
      brand:'ABB',
      capacity:480,
      source:'meter 1',
      status:'online',
      connectors:2 
    },
    {
      uuid:'sdjbfkbw3ry8dsfnsdh',
      serial:'Pras003',
      brand:'ABB',
      capacity:480,
      source:'meter 1',
      status:'online',
      connectors:2 
    },
    {
      uuid:'sdjbfkbw3ry8dsfnsdh',
      serial:'Pras004',
      brand:'Kempower',
      capacity:480,
      source:'meter 2',
      status:'online',
      connectors:2 
    },
    {
      uuid:'sdjbfkbw3ry8dsfnsdh',
      serial:'Pras005',
      brand:'Kempower',
      capacity:480,
      source:'meter 2',
      status:'online',
      connectors:2 
    },
    {
      uuid:'sdjbfkbw3ry8dsfnsdh',
      serial:'Pras006',
      brand:'EVC',
      capacity:480,
      source:'meter 3',
      status:'online',
      connectors:2 
    },
    {
      uuid:'sdjbfkbw3ry8dsfnsdh',
      serial:'Pras007',
      brand:'EVC',
      capacity:480,
      source:'meter 3',
      status:'online',
      connectors:2 
    },
    {
      uuid:'sdjbfkbw3ry8dsfnsdh',
      serial:'Pras008',
      brand:'EVC',
      capacity:480,
      source:'meter 3',
      status:'online',
      connectors:2 
    }
  ]
  return (
    <div className='w-full flex flex-col gap-10'>

      <div className='flex container overflow-x-auto'>

        <Card className='max-w-[360px]'>
          <CardHeader>
            <CardTitle className='flex items-center text-[#0035a3] gap-2'>
              <UtilityPole className=''/> Grid
            </CardTitle>
          </CardHeader>
          <CardContent>
          <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>UUID</TableCell>
                    <TableCell>JKGHaj8sfj32rnmfsamnsahfkajs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Name</TableCell>
                    <TableCell>Grid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Capacity</TableCell>
                    <TableCell>6400 VA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Status</TableCell>
                    <TableCell><span className='bg-green-400 px-2 py-1 rounded-md text-white'>online</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </CardContent>
        </Card>

      </div>
      
      <div className=' flex gap-4 container overflow-x-auto'>
        {SmartMeters.map((meter,index)=>(
          <Card key={index} className='w-[360px]'>
          <CardHeader>
            <CardTitle className='flex items-center text-[#0035a3] gap-2'>
              <BiSolidMicrochip/> {meter.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
          <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>UUID</TableCell>
                    <TableCell>{meter.uuid}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Brand</TableCell>
                    <TableCell>{meter.brand}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Capacity</TableCell>
                    <TableCell>{meter.capacity} VA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Source</TableCell>
                    <TableCell>{meter.source}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Charging Stations</TableCell>
                    <TableCell>{meter.cs}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Status</TableCell>
                    <TableCell><span className='bg-green-400 px-2 py-1 rounded-md text-white'>{meter.status}</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </CardContent>
        </Card>
        ))}

        <div className='min-w-[360px] flex justify-center items-center border-dashed border-4 border-gray-500 rounded-xl'>
          <Button variant='default'><IoAddSharp/>Add</Button>
        </div>
      </div>

      <div className=' flex gap-4 container w-full overflow-x-auto'>
        {chargers.map((meter,index)=>(
          <Card key={index} className='min-w-[360px]'>
          <CardHeader>
            <CardTitle className='flex items-center text-[#0035a3] gap-2'>
              
              <RiChargingPile2Fill/> {meter.serial}
            </CardTitle>
          </CardHeader>
          <CardContent>
          <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>UUID</TableCell>
                    <TableCell>{meter.uuid}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Brand</TableCell>
                    <TableCell>{meter.brand}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Capacity</TableCell>
                    <TableCell>{meter.capacity} VA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Source</TableCell>
                    <TableCell>{meter.source}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Connectors</TableCell>
                    <TableCell>{meter.connectors}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='text-left pl-0 font-semibold'>Status</TableCell>
                    <TableCell><span className='bg-green-400 px-2 py-1 rounded-md text-white'>{meter.status}</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </CardContent>
        </Card>
        ))}

        <div className='min-w-[360px] flex justify-center items-center border-dashed border-4 border-gray-500 rounded-xl'>
          <Button variant='default'><IoAddSharp/>Add</Button>
        </div>
      </div>

      
    </div>
  )
}

export default GroupDetails



{/* <div className='w-full grid grid-cols-4 min-h-[300px] gap-6'>
          <div className='col-span-1 h-full flex flex-col gap-4 p-4 shadow-md rounded-xl border bg-white'>
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
            // <div className='flex justify-between items-start'>
            //   <p className='font-semibold'>CHARGE STATION</p>
            //   <Select >
            //     <SelectTrigger className="max-w-[225px] focus:ring-transparent">
            //       <SelectValue placeholder="Select a charger" />
            //     </SelectTrigger>
            //     <SelectContent>
            //         <SelectItem value="jom001">Jom 001</SelectItem>
            //         <SelectItem value="jom002">Jom 002</SelectItem>
            //         <SelectItem value="jom003">Jom 003</SelectItem>
            //     </SelectContent>
            //   </Select>
            // </div>
            {/* identify */}
          //   <div>
          //     <Table>
          //       <TableBody>
          //         <TableRow>
          //           <TableCell className='text-left pl-0 font-semibold'>UUID</TableCell>
          //           <TableCell>JKGHajshdjh127y412mnsahfkajs</TableCell>
          //         </TableRow>
          //         <TableRow>
          //           <TableCell className='text-left pl-0 font-semibold'>Serial Number</TableCell>
          //           <TableCell>Jom 001</TableCell>
          //         </TableRow>
          //         <TableRow>
          //           <TableCell className='text-left pl-0 font-semibold'>Utility Ratio</TableCell>
          //           <TableCell>95%</TableCell>
          //         </TableRow>
          //         <TableRow>
          //           <TableCell className='text-left pl-0 font-semibold'>Load Capacity</TableCell>
          //           <TableCell className='flex justify-between items-center'>
          //             <p>240/480 kW</p>
          //             <span className='font-mono bg-green-400 text-white px-2 py-1 rounded-md'>{'50%'}</span>
          //           </TableCell>
          //         </TableRow>
          //         <TableRow>
          //           <TableCell className='text-left pl-0 font-semibold'>Total Sessions</TableCell>
          //           <TableCell>95/100</TableCell>
          //         </TableRow>

                 
          //       </TableBody>
          //     </Table>
          //   </div>

          //   <div className='flex gap-2'>
          //       <Button variant='destructive'><VscDebugRestart/>Re-boot</Button>
          //       <Button variant='secondary'><RxGear/>Configure</Button>
          //   </div>
          // </div>
          // <div className='col-span-2 h-full flex flex-col gap-4 p-4 shadow-md rounded-xl border'>
          //   <p className='font-semibold'>CONNECTORS</p>
          //   <GroupDetailsConnector/>
          // </div>
      // </div> */}
