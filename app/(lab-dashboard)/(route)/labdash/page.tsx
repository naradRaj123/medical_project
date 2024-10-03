"use client"
import StatCard from '@/components/stat-card'
import {  SquareStackIcon } from 'lucide-react'

import PiechartLab from './_labComponent/page'

export const data = [
  ["Task", "Hours per Day"],
  ["Patient", 11],
  
];

export const options = {
  title: "Total patient",
  is3D: true,
};


const LabDashboardPage = () => {

  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        <div>
        <StatCard
          label="Doctor"
          value={200}
          icon={SquareStackIcon}
        />
        <div className='  mt-3 '>
        <PiechartLab data={data} options={options} />
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default LabDashboardPage
