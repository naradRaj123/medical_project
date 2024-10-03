"use client"

import React, { useState } from 'react'



  
const DoctorDetails = () => {
    
    

  return (
    <div className='space-y-6'>
        <div className='flex items-center justify-between'>
        <p className='text-xl font-semibold text-primary'>John Doe&apos;s Profile</p>
       
        </div>
    <div className='flex gap-6'>
    <div className='w-4/12 space-y-2'>
        <div className='shadow-sm p-6 space-y-3 bg-lightestGray text-primary text-sm font-medium rounded-xl'>
        <div className='flex justify-center'>
            <img src="https://github.com/shadcn.png" alt="" className='w-32 h-32 rounded-full' />
        </div>
         <p>Full Name: <span className='text-black font-normal'>Test</span></p>
            <p>Mobile: <span className='text-black font-normal'>0000000000</span></p>
            <p>Address: <span className='text-black font-normal'>Test, D-1/2</span></p>
            <p>Date of birth: <span className='text-black font-normal'>12/12/2005</span></p>
            <p>Age: <span className='text-black font-normal'>22</span></p>
            <p>Ailment: <span className='text-black font-normal'>HIV/AIDS</span></p>
            <p>Date Recorded: <span className='text-black font-normal'>19/12/2023 - 04:11pm</span></p>
        </div>
    </div>
   
    </div>
    </div>
  )
}

export default DoctorDetails
