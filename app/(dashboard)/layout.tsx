import { ReactNode } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import { SidebarProvider} from "@/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
        <SidebarProvider
            
        >
            <Navbar/>
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <div className='flex'>
                    <Header/>
                </div>
                <main className="flex-1 p-6 overflow-auto bg-gray-100">
                {children}
                </main>
                <Footer/>
            </div>
        </SidebarProvider>
    </div>
  )
}