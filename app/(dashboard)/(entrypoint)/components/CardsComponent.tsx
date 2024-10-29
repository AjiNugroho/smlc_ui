import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { PiMoneyDuotone } from "react-icons/pi";
import { GiElectric } from "react-icons/gi";
import { MdElectricCar } from "react-icons/md";
import { IoIosFlashOff } from "react-icons/io";
import { RiPercentFill } from "react-icons/ri";


const CardsComponent = () => {
  const cardItemContent = [
    {
      title:'Total Revenue',
      value:10000,
      delta:20,
      icon:<PiMoneyDuotone/>,
      unit:'MYR'
    },
    {
      title:'Total Sessions',
      value:3750,
      delta:15,
      icon:<MdElectricCar/>
    },
    {
      title:'Energy Delivered',
      value:8902,
      delta:20,
      icon:<GiElectric/>,
      unit:'kWh'
    },
    {
      title:'Failure',
      value:5,
      delta:5,
      icon:<IoIosFlashOff/>
    },
    {
      title:'Average Utilization',
      value:70,
      delta:20,
      icon:<RiPercentFill/>,
      unit:'%'
    }
  ]

  return (
    <div className='grid grid-cols-5 gap-4'>
      { cardItemContent.map(item=>(
        <CardItems 
        key={item.title}
        title={item.title}
        value={item.value}
        delta={item.delta}
        icon={item.icon}
        unit={item.unit||''}
        />
      )) }
    </div>
  )
}

interface cardItemProps{
  title:string
  value:number
  delta:number
  icon:React.ReactNode
  unit?:string
}
const CardItems = (props:cardItemProps) =>{
  return(
    <Card className='shadow-md'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {props.title}
          </CardTitle>
          <div className='p-1 rounded-full border-2 border-gray-500 bg-[#008ccc] text-white'>{props.icon}</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{`${props.unit} ${props.value}`}</div>
          <p className="text-xs text-muted-foreground">
            {`+${props.delta}% from last month`}
          </p>
        </CardContent>
      </Card>
  )
}

export default CardsComponent
