"use client"

import { cn } from "@/lib/utils"
import { HeartIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/solid"
import { PlusIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const routes =[
    {
        label: "Dashboard",
        icon: HomeIcon,
        href: "/dashboard"
    },
    {
        label: "Patient",
        icon: HeartIcon,
        href: "/patient"
    },
    {
        label: "Consortium",
        icon: UsersIcon,
        href: "/partners"
    },
    {
        label: "New Prescription",
        icon: PlusIcon,
        href: "/new-prescription"
    },
    {
        label: "Medicine",
        icon: PlusIcon,
        href: "/medicine"
    },
]

const Menusidebar = () => {
    const pathName = usePathname()

  return (

    <>



    <div className="h-full flex flex-col space-y-4 px-3 py-2 bg-white">
      <Link href="/dashboard">
        <div className="relative w-40 h-40">
            <Image
            src={"/vercel.svg"}
            fill 
            alt="logo"
            />
        </div>
      </Link>

      <div className="space-y-1">
        {routes.map((route, idx) => (
                <Link href={route.href} key={idx} 
                className={cn("text-sm group flex p-3 w-full justify-start cursor-pointer text-primary rounded-lg transition",
                    pathName===route.href?'text-primary bg-white': 'text-primary'
                )}>
                    <div className="flex items-center space-x-3">
                    <route.icon className="w-5 h-5" />
                   <p>{route.label}</p>
                    </div>
                </Link>
            ))
        }
      </div>
    </div>
    </>
  )
}

export default Menusidebar
