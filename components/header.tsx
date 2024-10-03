" use client "

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { AlignLeft, Database, HomeIcon, IndianRupee, Info, Phone, } from 'lucide-react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { usePathname } from 'next/navigation'
import headerlogo from '@/app/img/pulogo.png'
import Image from 'next/image'

export default function Header() {

    const menuitems = [
        {
            label: 'Home',
            icon: HomeIcon,
            href: '/'
        },
        {
            label: 'About us',
            icon: Info,
            href: '/about'
        },
        {
            label: 'Contact',
            icon: Phone,
            href: '/contact'
        },
        {
            label: 'Feature',
            icon: Database,
            href: '/feature'
        },
        {
            label: 'Price',
            icon: IndianRupee,
            href: '/price'
        }

    ]

    const pathname = usePathname()

    return (
        <>
            <header className='w-[100%]  bg-[#fff ] px-6 border '>
                <div className=' flex justify-between w-[100%]  items-center 	 '>
                    <div className='basis-[25%]  sm:basis-[10%] p-1 '>
                        <Image alt='logo' src={headerlogo} className='w-[100%]' />
                    </div>
                    <div className='basis-[70%]    flex justify-between  items-center  '>
                        <div className='basis-[65%] p-3 text-primary text-[1rem] font-[400] hidden md:block '>
                            <ul className='flex justify-between items-center '>

                                {menuitems.length > 0
                                    ?
                                    menuitems.map((v, i) => {
                                        return (
                                            <>
                                                <Link href={`${v.href}  `} key={i} >
                                                    <li className={` flex justify-between  text-5 p-2 rounded-md ${v.href === pathname ? '  text-primary  ' : 'text-black'} `}>
                                                        <v.icon className=' text-[1rem] w-5 me-1 ' /> {v.label}</li></Link>
                                            </>
                                        )
                                    })
                                    :
                                    ""
                                }

                            </ul>
                        </div>
                        <div className='   hidden md:block basis-[25%] pr-[5px] text-end '>
                            <div className=' flex items-center '>
                                <Link href={'/sign-in'}> <Button className='ms-[15px] bg-black '>Login</Button></Link>
                                <Link href={'/sign-up'}> <Button className='ms-[15px]'>Register</Button></Link>
                            </div>
                        </div>

                    </div>

                    <div className=' basis-auto md:hidden'>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger><AlignLeft /></MenubarTrigger>
                                <MenubarContent>
                                    {menuitems.length > 0
                                        ?
                                        menuitems.map((v, i) => {
                                            return (
                                                <>
                                                    <MenubarItem>
                                                        <Link href={`${v.href}  `} key={i} >
                                                            <li className={` flex justify-between  text-5 p-2 rounded-md ${v.href === pathname ? '  text-primary  ' : 'text-black'} `}>
                                                                <v.icon className=' text-[1rem] w-5 me-1 ' /> {v.label}</li></Link>
                                                    </MenubarItem>
                                                </>
                                            )
                                        })
                                        :
                                        ""
                                    }

                                    <MenubarItem>
                                    <Link href={'/sign-in'} className='font-semibold py-2 px-4'> Login</Link>
                                    </MenubarItem>
                                    <MenubarItem>
                                <Link href={'/sign-up'} className='font-semibold py-2 px-4'> Register</Link>
                                    </MenubarItem>
                                </MenubarContent>
                                
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </header>
        </>
    )
}