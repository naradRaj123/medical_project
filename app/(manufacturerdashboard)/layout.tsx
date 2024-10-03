import Msidebar from '@/components/msidebar'
import Navbar from '@/components/navbar'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Image from "next/image"

type DashboardLayoutProps = {
    children: React.ReactNode
}

const DashboardLayout = ({
    children
}: DashboardLayoutProps) => {
  return (
    <div className='h-full relative'>
        <div className='hidden lg:flex lg:flex-col lg:w-72 lg:fixed z-[80] bg-gray-900 h-full lg:inset-y-0'>
            <Msidebar />
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
            <Msidebar />
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

export default DashboardLayout
