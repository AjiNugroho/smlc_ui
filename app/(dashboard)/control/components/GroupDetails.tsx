import { Input } from '@/components/ui/input'
import React from 'react'
import { DropdownMenu,  DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const GroupDetails = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex gap-4'>
        <Input className='max-w-[250px]' color='gray.500' placeholder='Group name search' />
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Connectors</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filters Connector Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
                <DropdownMenuItem>
                    AC
                </DropdownMenuItem>
                <DropdownMenuItem>
                    DC
                </DropdownMenuItem>
                
              
              
            </DropdownMenuContent>
          </DropdownMenu>

      </div>
    </div>
  )
}

export default GroupDetails
