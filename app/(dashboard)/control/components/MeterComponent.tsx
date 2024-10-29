import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface meterObjType{
    id:string
    name:string
    status:string
    value:number
    type:string
}
const MeterComponent = () => {
    const meterObj:meterObjType[] = [
        {
            id: '1',
            name: 'Meter 1',
            status: 'running',
            value: 5600,
            type: 'Three-phase'
        },
        {
            id: '2',
            name: 'Meter 2',
            status: 'running',
            value: 2200,
            type: 'Three-phase'
        },
        {
            id: '3',
            name: 'Meter 3',
            status: 'running',
            value: 2200,
            type: 'Three-phase'
        },
        {
            id: '4',
            name: 'Meter 4',
            status: 'running',
            value: 2200,
            type: 'Three-phase'
        },
        
    ]
  return (
    <div className='flex flex-col gap-2'>
        <p className='font-semibold'>METERS</p>
        <div className='w-full grid grid-cols-6 gap-4'>
            {meterObj.map((data, index)=>(
                <MeterCards key={index} data={data} />
            ))}
        </div>
    </div>
  )
}

const MeterCards =({data}:{data:meterObjType})=>{
    return(
        <Card className='shadow-md'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {data.name}
          </CardTitle>
        </CardHeader>
        <CardContent className='flex items-center justify-between'>
          <div className="text-2xl font-bold">{`${data.value} VA`}</div>
          <span className='py-1 px-2 rounded-xl bg-green-400 text-white'>
            {data.status}
          </span>
        </CardContent>
        <CardFooter className='text-blue-400 font-semibold'>
            {data.type}
        </CardFooter>
      </Card>
    )
}

export default MeterComponent
