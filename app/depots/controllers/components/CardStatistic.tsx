import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaBus } from "react-icons/fa";
import { MdOutlineElectricalServices } from "react-icons/md";
import { GiCharging } from "react-icons/gi";
import { MdBusAlert } from "react-icons/md";

const CardStatistic = () => {
    const cardItemContent = [
        {
          title:'Depots',
          value:100,
          icon:<FaBus size={14}/>,

        },
        {
          title:'Connectors',
          value:400,
          icon:<MdOutlineElectricalServices size={14}/>
        },
        {
          title:'Active Sessions',
          value:62,
          icon:<GiCharging size={14}/>,

        },
        {
          title:'Alerts',
          value:5,
          icon:<MdBusAlert size={14}/>
        }
      ]
    return (
        <div className='w-[15%] grid grid-cols-1 px-6 gap-3'>
            { cardItemContent.map(item=>(
                <CardItems 
                key={item.title}
                title={item.title}
                value={item.value}
                icon={item.icon}
                />
            )) 
            }
        </div>
    )
}

interface cardItemProps{
    title:string
    value:number
    icon:React.ReactNode
  }
const CardItems = (props:cardItemProps) =>{
    return(
      <Card className='shadow-md'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              {props.title}
            </CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between '>
            <div className="text-2xl font-bold text-[#008ccc]">{` ${props.value}`}</div>
            <div className='p-2 rounded-full bg-[#008ccc] text-white flex items-center justify-center'>
                <span className=''>{props.icon}</span>
            </div>
          </CardContent>
        </Card>
    )
}

export default CardStatistic
