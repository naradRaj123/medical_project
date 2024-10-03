import React from 'react'

type StatCardProps = {
    label: string,
    value: number | string,
    icon: any
}

const StatCard = ({
    label, 
    value,
    icon:Icon
}: StatCardProps) => {
  return (
    <div className='p-4 shadow-md rounded-lg flex items-center justify-between'>
        <div className='space-y-2'>
            <p className='font-medium'>{label}</p>
            <p className='text-xl font-semibold text-primary'>{value}</p>
        </div>
        <Icon className="text-primary" />
    </div>
  )
}

export default StatCard
