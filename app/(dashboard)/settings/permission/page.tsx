
import { Separator } from '@/components/ui/separator'
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
import { Button } from '@/components/ui/button'
import { IoMdAddCircle } from "react-icons/io";

const page = () => {
  return (
    <div className='space-y-6'>
    <div>
      <h3 className="text-lg font-medium">Role And Permission Management</h3>
      <p className="text-sm text-muted-foreground">
        Manage your roles and permissions for your application.
      </p>
    </div>
    <Separator/>
    <div className='w-full flex items-center justify-between'>
        <Select >
          <SelectTrigger className="max-w-[225px] focus:ring-transparent">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Available Role</SelectLabel>
              <SelectItem value="admin">Org Administrator</SelectItem>
              <SelectItem value="operator">Operator</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
              
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className='rounded-lg' variant='secondary'><IoMdAddCircle className='text-[#008ccc]' size={20}/>Add Role</Button>
      </div>

      <div className='w-full h-[600px] overflow-auto p-4 rounded-lg border'>
            <div className='w-full min-h-[600px]'>
                test
            </div>
      </div>
      <div>
        <Button>Save Changes</Button>
      </div>
  </div>
  )
}

export default page
