import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { IoLink } from "react-icons/io5";

const DepotLists = () => {
    const DepotData = [
        {   id:1,
            name:'Depo Central',
            address:'KLCC central Street no 1',
            state:'Kuala Lumpur',
            city:'Kuala Lumpur',
            session:15,
            connectors:'15/30',
            chargers:10
        },
        {
            id:2,
            name:'Depo Xpark',
            address:'Xpark Street no 1',
            state:'Selangor',
            city:'Petaling Jaya',
            session:10,
            connectors:'10/30',
            chargers:10
        },
        {
            id:3,
            name:'Depo One Utama Park',
            address:'One Utama Street no 1',
            state:'Selangor',
            city:'Selangor',
            session:5,
            connectors:'5/30',
            chargers:10
        },
        {
            id:4,
            name:'Depo EVC office',
            address:'KLCC central Street no 1',
            state:'Selangor',
            city:'Petaling Jaya',
            session:7,
            connectors:'7/30',
            chargers:10
        },
        {
            id:5,
            name:'Depo Mall',
            address:'EVC partner Street no 1',
            state:'Kuching',
            city:'Kuching',
            session:12,
            connectors:'12/30',
            chargers:10
        }
    ]
    return (
        <div className='rounded-md border'>
            <Table>
            <TableCaption className='w-full'>
                <div className='w-full flex justify-between px-4 py-2'>
                    <p>Table of usage</p>
                </div>
            </TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Charger</TableHead>
                <TableHead>Connector</TableHead>
                <TableHead>Sessions</TableHead>
                <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {DepotData.map((dt)=>(
                    <TableRow key={dt.id}>
                        <TableCell>{dt.name}</TableCell>
                        <TableCell>{dt.address}</TableCell>
                        <TableCell>{dt.state}</TableCell>
                        <TableCell>{dt.city}</TableCell>
                        <TableCell>{dt.chargers}</TableCell>
                        <TableCell>{dt.connectors}</TableCell>
                        <TableCell>{dt.session}</TableCell>
                        <TableCell>
                            <Button><IoLink/></Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
    )
}

export default DepotLists
