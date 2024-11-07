import { Separator } from '@/components/ui/separator'
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { IoIosPersonAdd } from "react-icons/io";

const page = () => {
  const userAdminData=[
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'Organization Admin',
      joinDate: '2021-01-01'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'Default permission',
      joinDate: '2021-01-02'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bobjohnson@example.com',
      role: 'Default permission',
      joinDate: '2021-01-03'
    },
    {
      id: 4,
      name: 'Alice Williams',
      email: 'alicewilliams@example.com',
      role: 'Default permission',
      joinDate: '2021-01-04'
    },
    {
      id: 5,
      name: 'Tom Brown',
      email: 'tombrown@example.com',
      role: 'Default permission',
      joinDate: '2021-01-05'
    },
  ]
  return (
    <div className='space-y-6'>
      <div>
        <h3 className="text-lg font-medium">User Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your user permission settings.
        </p>
      </div>
      <Separator/>
      <div>
          <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Permission Role</TableHead>
                    <TableHead>Join Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userAdminData.map((user) => (
                    <TableRow key={user.id}> 
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.joinDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
          </Table>
      </div>
      <div>
          <Button> <IoIosPersonAdd/>Add User</Button>
      </div>
    </div>
  )
}

export default page
