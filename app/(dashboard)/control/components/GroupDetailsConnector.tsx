import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { FaStop } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { RxGear } from "react-icons/rx";

const GroupDetailsConnector = () => {
  return (
    <Accordion type="single" collapsible defaultValue='conn1' className="w-full p-2">
      <AccordionItem value="conn1">
        <AccordionTrigger>
            <div className='flex items-center gap-4'>
                Connector 1
                <span className='p-1 text-sm rounded-md bg-yellow-400 text-white min-w-[100px]'>charging</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className='flex flex-col ps-4'>
            <div className='flex'>
                <div className='w-full'>
                    <Table>
                        <TableBody>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>UUID</TableCell>
                            <TableCell>98sfmjqrw7sanwflk2jhfql</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Type</TableCell>
                            <TableCell>DC CCS</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Power Output</TableCell>
                            <TableCell>240 kW</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Active Profile</TableCell>
                            <TableCell>Profile 1 <span className='italic'>(default)</span></TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className='w-full'>
                    <Table>
                        <TableBody>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Session ID</TableCell>
                            <TableCell>330509</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Usage</TableCell>
                            <TableCell className='flex justify-between'>
                                <p>100 kWh</p> <span className='bg-yellow-200 px-2'>ongoing</span></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Duration</TableCell>
                            <TableCell className='flex justify-between'>
                                <p>00:25:32</p> <span className='bg-yellow-200 px-2'>ongoing</span>
                            </TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </div>

            </div>
            <div className='flex justify-end gap-2'>
                <Button className='text-sm h-8 text-red-400' variant='outline'><FaStop/> Stop</Button>
                <Button className='text-sm h-8' variant='secondary' ><RxGear/> Configure</Button>
                
            </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="conn2">
        <AccordionTrigger>
            <div className='flex items-center gap-4'>
                Connector 2
                <span className='p-1 text-sm rounded-md bg-[#008ccc] text-white min-w-[100px]'>available</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className='flex flex-col ps-4'>
            <div className='flex'>
                <div className='w-full'>
                    <Table>
                        <TableBody>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>UUID</TableCell>
                            <TableCell>98sfmjqrw7sanwflk2jhfql</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Type</TableCell>
                            <TableCell>AC type 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Power Output</TableCell>
                            <TableCell>120 kW</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Active Profile</TableCell>
                            <TableCell>Profile 1 <span className='italic'>(default)</span></TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className='w-full'>
                    <Table>
                        <TableBody>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Session ID</TableCell>
                            <TableCell>--</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Usage</TableCell>
                            <TableCell className='flex justify-between'>
                                <p>-- kWh</p></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Duration</TableCell>
                            <TableCell className='flex justify-between'>
                                <p>--:--:--</p> 
                            </TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </div>

            </div>
            <div className='flex justify-end gap-2'>
                <Button className='text-sm h-8 text-white' ><FaPlay/> Start</Button>
                <Button className='text-sm h-8' variant='secondary' ><RxGear/> Configure</Button>
            </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="conn3">
        <AccordionTrigger>
            <div className='flex items-center gap-4'>
                Connector 3
                <span className='p-1 text-sm rounded-md bg-gray-500 text-white min-w-[100px]'>offline</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className='flex flex-col ps-4'>
            <div className='flex'>
                <div className='w-full'>
                    <Table>
                        <TableBody>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>UUID</TableCell>
                            <TableCell>98sfmjqrw7sanwflk2jhfql</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Type</TableCell>
                            <TableCell>AC type 2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Power Output</TableCell>
                            <TableCell>120 kW</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Active Profile</TableCell>
                            <TableCell>Profile 1 <span className='italic'>(default)</span></TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className='w-full'>
                    <Table>
                        <TableBody>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Session ID</TableCell>
                            <TableCell>--</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Usage</TableCell>
                            <TableCell className='flex justify-between'>
                                <p>-- kWh</p></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='text-left pl-0 font-semibold'>Duration</TableCell>
                            <TableCell className='flex justify-between'>
                                <p>--:--:--</p> 
                            </TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </div>

            </div>
            <div className='flex justify-end gap-2'>
                <Button disabled className='text-sm h-8' ><FaPlay/> Start</Button>
                <Button className='text-sm h-8' variant='secondary' ><RxGear/> Configure</Button>
            </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default GroupDetailsConnector
