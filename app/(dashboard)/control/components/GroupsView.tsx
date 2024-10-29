import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ImPowerCord } from "react-icons/im";
interface groupsViewData {
    groupId:string
    groupName:string
    meterName:string
    meterId:string
    evses:{
        serialNumber:string
        evseId:string
        connectors:number
        status:string
        connectorType:string
    }[],


}
const GroupsView = () => {
    const groupviewData:groupsViewData[] = [
        {
            groupId: "1",
            groupName: "Group 1",
            meterName: "Meter 1",
            meterId: "1",
            evses: [
                {
                    serialNumber: "Jom001",
                    evseId: "1",
                    connectors: 2,
                    connectorType:'AC',
                    status: "Available"
                },
                {
                    serialNumber: "Jom001",
                    evseId: "2",
                    connectors: 2,
                    connectorType:'DC',
                    status: "Charging"
                },
                {
                    serialNumber: "Jom002",
                    evseId: "3",
                    connectors: 1,
                    connectorType:'DC',
                    status: "Available"
                },
                {
                    serialNumber: "Jom002",
                    evseId: "4",
                    connectors: 2,
                    connectorType:'DC',
                    status: "unknown"
                }
            ]
        },
        {
            groupId: "2",
            groupName: "Group 2",
            meterName: "Meter 2",
            meterId: "2",
            evses: [
                {
                    serialNumber: "Jom003",
                    evseId: "5",
                    connectors: 1,
                    connectorType:'DC',
                    status: "Available"
                },
                {
                    serialNumber: "Jom003",
                    evseId: "6",
                    connectors: 2,
                    connectorType:'DC',
                    status: "Charging"
                },
                {
                    serialNumber: "Jom003",
                    evseId: "7",
                    connectors: 3,
                    connectorType:'AC',
                    status: "Available"
                },
                {
                    serialNumber: "Jom004",
                    evseId: "8",
                    connectors: 2,
                    connectorType:'AC',
                    status: "Offline"
                }
            ]
        },
        {
            groupId: "3",
            groupName: "Group 3",
            meterName: "Meter 3",
            meterId: "3",
            evses: [
                {
                    serialNumber: "Jom005",
                    evseId: "9",
                    connectors: 1,
                    connectorType:'DC',
                    status: "Available"
                },
                {
                    serialNumber: "Jom005",
                    evseId: "10",
                    connectors: 2,
                    connectorType:'DC',
                    status: "Charging"
                },
                {
                    serialNumber: "Jom006",
                    evseId: "11",
                    connectors: 1,
                    connectorType:'AC',
                    status: "Available"
                },
                {
                    serialNumber: "Jom007",
                    evseId: "12",
                    connectors: 1,
                    connectorType:'AC',
                    status: "unknown"
                }
            ]
        },
        {
            groupId: "4",
            groupName: "Group 4",
            meterName: "Meter 4",
            meterId: "4",
            evses: [
                {
                    serialNumber: "Jom008",
                    evseId: "13",
                    connectors: 2,
                    connectorType:'AC',
                    status: "Available"
                },
                {
                    serialNumber: "Jom009",
                    evseId: "14",
                    connectors: 1,
                    connectorType:'DC',
                    status: "Charging"
                },
                {
                    serialNumber: "Jom009",
                    evseId: "15",
                    connectors: 2,
                    connectorType:'DC',
                    status: "Available"
                },
                {
                    serialNumber: "Jom010",
                    evseId: "16",
                    connectors: 1,
                    connectorType:'AC',
                    status: "Offline"
                }
            ]
        }
    ]
  return (
    <div className='flex flex-col gap-2'>
        <p className='font-semibold'>GROUPS</p>
        <div className='flex flex-col gap-6 w-full'>
            {groupviewData.map((data,index)=>(
                <Groups key={index} data={data} />
            ))}
        </div>
    </div>
  )
}

const Groups = ({data}:{data:groupsViewData})=>{
    return (
        <div className='flex flex-col w-full gap-2'>
            <div className='flex items-center gap-2'>
                
                <p className='px-2 py-1 bg-[#008ccc] text-white rounded-xl'>{data.groupName}</p>
                <div className='flex items-center gap-1 px-2 py-1 bg-green-400 rounded-xl text-white'>
                    <ImPowerCord/>
                    <p>{data.meterName}</p>
                </div>
            </div>
            <div className='flex w-full gap-4 '>
                <EvseCard data={data.evses} />
            </div>
        </div>
    )
}

const EvseCard =({data}:{data:groupsViewData['evses']})=>{
    return(
    <>
        {data.map((evse,index)=>(
            <div key={index}>
                <Card className={`shadow-sm min-w-[250px] ${evse.status==='Available'?'bg-green-100':evse.status==='Charging'?'bg-yellow-100':evse.status==='Offline'?'bg-red-100':'bg-gray-200'}`}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        EVSE : {evse.evseId}
                    </CardTitle>
                    </CardHeader>
                    <CardContent className='flex items-center justify-between w-full'>
                        <div className='w-full'>
                            <div className='flex justify-between items-center'>
                                <p>{evse.serialNumber}</p>
                                <p className='py-2 px-3 rounded-md border shadow-sm bg-[#008ccc] text-white'>{evse.connectors}</p>
                            </div>
                            <div className='flex gap-4'>
                                <p>
                                    {evse.connectorType}
                                </p>
                                <p>{evse.status}</p>
                            </div>
                        </div>
                        {/* <span className='py-1 px-2 rounded-xl bg-green-400 text-white'>
                            {evse.status}
                        </span> */}
                    </CardContent>
                </Card>
            </div>
        ))}
        
    </>
    )
}



export default GroupsView
