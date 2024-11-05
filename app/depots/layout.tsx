import { ReactNode } from 'react'
import { SidebarProvider} from "@/components/ui/sidebar"
import NavbarDepot from './NavbarDepot'
import HeaderDepot from './HeaderDepot'
import FooterDepots from './FooterDepots'

export default function DepotLayout({ children }: { children: ReactNode }) {
    return (
      <div className="min-h-screen flex">
          <SidebarProvider
              
          >
              <NavbarDepot/>
              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                  <div className='flex'>
                      <HeaderDepot/>
                  </div>
                  <main className="flex-1 p-6 overflow-auto">
                  {children}
                  </main>
                  <FooterDepots/>
              </div>
          </SidebarProvider>
      </div>
    )
  }