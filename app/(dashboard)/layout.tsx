"use client"
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import React, { useEffect } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useToast } from '@/components/ui/use-toast'
import { useGetUserClinicQuery } from '../redux/api'

type DashboardLayoutProps = {
    children: React.ReactNode
}

const DashboardLayout = ({
    children
}: DashboardLayoutProps) => {

  const { toast } = useToast();
  const auth = useSelector((store: RootState) => store.auth);
  // const locationdata = useSelector((store: RootState) => store.location)

  const clinicDatas = auth.user?.result?.clinicData[0]?.doctors[0]?.qrImagePath;
  const token = auth.user?.result?.token;
  const userid = auth.user?.result?._id;

  const { isLoading: isRegionsLoading, data: userClinicData, isError: clinicerror , error: userclinicerror } = useGetUserClinicQuery();

  return (
    <div className='h-full relative'>
        <div className='hidden md:flex md:flex-col md:w-72 md:fixed z-[80] bg-gray-900 h-full md:inset-y-0'>
            <Sidebar qrpath={clinicDatas}/>
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
            <Sidebar />
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
