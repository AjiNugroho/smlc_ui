import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { FaUserCog } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { format } from "date-fns";


const HeaderDepot = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, "dd MMM yyyy");
    const formattedTime = format(currentDate, "OOOO");
  return (
    <div className='w-full bg-white shadow-lg rounded-sm min-h-20 flex justify-end items-center px-8 gap-4'>
        <div className='flex flex-col'>
            <span>{`${formattedDate}`}</span>
            <span className='text-xs font-thin'>{`${formattedTime}`}</span>
        </div>
        <DropDownUser/>
    </div>
  )
}

const DropDownUser = () =>{
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <AvatarHeader/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Admin User</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <FaUserCog size={14}/> Account Setting
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BsFillQuestionCircleFill/> Help & Support
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                       <BsMoonStarsFill/> Display & Accessability
                    </DropdownMenuItem>                    
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                <DropdownMenuSeparator />
                    <DropdownMenuItem>
                       <MdLogout/> Logout
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const AvatarHeader = () =>{
    return(
    <Avatar>
      <AvatarImage  src='avatarImage.jpg' alt="avatar image"/>
      <AvatarFallback>AM</AvatarFallback>
    </Avatar>)
}

export default HeaderDepot
