"use client"

import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const slides = ['Slider 1', 'Slider 2', 'Slider 3', 'Slider 4', 'Slider 5'];
const Navbar = () => {

  const [clostads, setads] = useState(false);
  const closeadsbtn = () => {
    setads(!clostads);
  }


  if (clostads) {
    setTimeout(() => {
      setads(!clostads)
    }, (50000 * 100));
  }
 
  return (

    <>
      {/* advertisment */}
      <div className=' p-2 h-[auto]  '>
        <div className={` h-[125px] relative ${clostads ? "hidden" : ""} `}>
          <img src="https://m.media-amazon.com/images/S/aplus-media/vc/250fa0b5-db89-4731-998c-b826695acac2._CR0,0,1464,600_PT0_SX1464__.jpg" className='h-[100%] w-[100%] ' alt="" />
          <div className='w-[40px] h-[40px] bg-primary absolute top-0 right-0 z-50 '>
            <XMarkIcon className='text-white cursor-pointer' onClick={closeadsbtn} />
          </div>
        </div>
      </div>

    <div className='flex items-center p-2 shadow-md'>
      <div className='flex justify-between w-full overflow-hidden animate-[slideRightToLeft_30s_linear_infinite]'>
      {slides.map((slide, index) => (
          <div key={index} >
            <h1>{slide}</h1>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Navbar
