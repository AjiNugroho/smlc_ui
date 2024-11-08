'use client'
import React from 'react'
import Link from 'next/link'
import { Settings } from "lucide-react"
import { SidebarHeader, } from "@/components/ui/sidebar"
import { FaChargingStation } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useSidebar } from "@/components/ui/sidebar"
import { BiChevronRight,BiChevronLeft } from "react-icons/bi";
import { usePathname } from 'next/navigation'
import { GiProcessor } from "react-icons/gi";
import prasLogo from '@/public/logoprasaranadepo.png'
import Image from 'next/image'
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
      title: "Home",
      url: "/",
      icon: FaHome,
    },
    {
      title: "Charge Stations",
      url: "/chargestation",
      icon: FaChargingStation,
    },
    {
      title: "Control System",
      url: "/control",
      icon: GiProcessor,
    },
    // {
    //   title: "Fleet",
    //   url: "/fleet",
    //   icon: GrMapLocation,
    // },
    // {
    //   title: "Power Group",
    //   url: "/powergroup",
    //   icon: PiSolarPanelFill,
    // },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ]

const Navbar = () => {
    const { toggleSidebar,state } = useSidebar()
    const pathName = usePathname()
    console.log( pathName)
    
  return (
    <Sidebar collapsible='icon' className='border-none shadow-xl'>
        <SidebarHeader className='h-12 w-full flex items-center relative text-[#008ccc] rounded-r-lg'>
          <Link href='/depots'>
              <Image
                    className={` ${state==='expanded'?'block':'hidden'}`}
                    src={prasLogo}
                    alt='logo'
                    width={160}
                    height={80}
                    />
            </Link>
            {/* <p className={` ${state==='expanded'?'block':'hidden'} text-xl font-semibold`}>Smart Controller</p> */}
            <div className={`p-1 text-2xl rounded-lg bg-[#008ccc] text-white absolute ${state==='expanded'?'right-0 ':'top-3 right-2'} `} onClick={toggleSidebar}>
                {state==='expanded'?<BiChevronLeft/>:<BiChevronRight/>}
            </div>

        </SidebarHeader>
      <SidebarContent>
       
        <SidebarGroup>
          {/* <SidebarGroupContent> */}
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === pathName} className='hover:bg-gray-200 h-10  data-[active=true]:bg-[#008ccc] data-[active=true]:text-white'>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          {/* </SidebarGroupContent> */}
        </SidebarGroup>

        
        

      </SidebarContent>

    </Sidebar>
  )
}

export default Navbar
