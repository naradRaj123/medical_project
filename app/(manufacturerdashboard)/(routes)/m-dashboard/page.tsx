"use client"
import StatCard from '@/components/stat-card'
import { HeartPulse, MessageCircle, SquareStackIcon, StarsIcon } from 'lucide-react'
import React from 'react'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import Dchart from './_component/page'




export const data = [
    ["Task", "Hours per Day"],
    ["doctor", 11],
];

export const options = {
    title: "Total Doctor",
    is3D: true,
};



const ManufacturerDashboard = () => {



    return (
        <div>

            <div className=' my-3  w-[30%]'>
                <div className='flex items-center'>
                    <label className='w-full'>Total Onboard</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Today" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="physiotherapist">Today</SelectItem>
                            <SelectItem value="Nurse">This Month</SelectItem>
                            <SelectItem value="others">This Year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>



            <div className='grid grid-cols-3 gap-4'>
                <div className='gap-3  mb-2 '>
                    <StatCard
                        label="Doctor"
                        value={200}
                        icon={SquareStackIcon}

                    />
                    <div className='mt-2'>
                        <Dchart data={data} options={options} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManufacturerDashboard
