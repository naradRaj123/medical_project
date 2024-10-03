import BsSidebar from '@/components/bssidebar'
import Navbar from '@/components/navbar'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'
import Image from "next/image"


type BADashboardLayoutProps = {
    children: React.ReactNode
}

const BADashboardLayout = ({
    children
}: BADashboardLayoutProps) => {
  return (
    <div className='h-full relative'>
        <div className='hidden lg:flex lg:flex-col lg:w-72 lg:fixed z-[80] bg-gray-900 h-full lg:inset-y-0'>
            <BsSidebar />
        </div>

        <div className='flex justify-between items-center px-10 py-1 h-auto lg:hidden'>
        <div className="relative w-20 h-20">
            <Image
            src={"/pharmaLogo.svg"}
            fill 
            alt="logo"
            />
        </div>
        <Sheet >
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"} className='lg:hidden z-50 bg-white'>
              <Bars3Icon  />
            </Button>
          </SheetTrigger>
          <SheetContent className='w-[50%]'>
            <BsSidebar />
          </SheetContent>
        </Sheet>
        </div>

        <main className='lg:pl-72'>
        <Navbar />
        <div className='p-8'>
      {children}
        </div>
        </main>
    </div>
  )
}

export default BADashboardLayout
