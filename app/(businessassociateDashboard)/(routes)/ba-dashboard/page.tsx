import StatCard from '@/components/stat-card'
import { HeartPulse, MessageCircle, SquareStackIcon, StarsIcon } from 'lucide-react'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import PieChart from './_components/pieChart'


export const data = [
    ["Task", "Hours per Day"],
    ["yesh Pharma", 11],
    ["Rajesh Pharma", 4],
    ["Rajiv Pharma", 6],
    ["Medifield", 7],
];

export const options = {
    title: "Prescriptions send",
    is3D: true,
};


const DashboardPage = () => {
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
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <StatCard
                        label="Pharmaceutical manufacturers"
                        value={200}
                        icon={SquareStackIcon}
                    />
                    <PieChart data={data} options={options} />
                </div>

                <div>
                    <StatCard
                        label="Doctors"
                        value={200}
                        icon={HeartPulse}
                    />
                    <PieChart data={data} options={options} />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;
