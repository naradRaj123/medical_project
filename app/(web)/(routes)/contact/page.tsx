import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { FactoryIcon, PhoneCallIcon } from 'lucide-react'
import React from 'react'

export default function Contact() {
  return (
    <>
      
      <section className='w-[100%] border py-12 bg-primary '>
        <div className='max-w-[73.1rem] mx-auto text-white '>
          <h4 className=' text-[1.5rem] px-6 md:px-0 md:text-[2rem] text-white font-[700] '>Contact us</h4>
          <p>Get in touch with us for inquiries, assistance, or collaborations. We're here to support you in every step of your journey.</p>
        </div>
      </section>

      
      <section className='w-[100%] py-12  '>
        <div className='max-w-[73.1rem] mx-auto  relative px-5 sm:px-4  '>
            <h3 className=' text-[0.9rem] sm:text-[1.2rem] font-[600] capitalize  '>  Contact  us anytime</h3>
            <div className='  w-16 md:w-19 mt-1 h-1 bg-primary '></div>
            <h4 className=' uppercase text-[1rem] sm:text-[1.6rem] font-[700] mt-5 '>SEND US YOUR COMMENTS</h4>
        
            <div className=' w-[100%] mt-5 flex justify-between flex-col sm:flex-row  '>
              <div className=' w-full sm:w-[60%]  '>
                <div className='w-[100%] mb-6  '>
                  <Label >Your Name </Label>
                  <Input placeholder=' Name'  className='outline-none mt-2 border-none rounded-none p-6 bg-slate-200 '  />
                </div>
                <div className='w-full mb-6  '>
                  <Label >Email </Label>
                  <Input placeholder='Email'  className='outline-none mt-2 border-none rounded-none p-6 bg-slate-200 '  />
                </div>
                <div className='w-full mb-6  '>
                  <Label >Mobile Number </Label>
                  <Input placeholder='Mobile Number'  className='outline-none mt-2 border-none rounded-none p-6 bg-slate-200 '  />
                </div>
                <div className='w-full mb-6  '>
                  <Label >Subject </Label>
                  <Textarea placeholder=' Your Message'  className='outline-none mt-2 border-none rounded-none p-6 bg-slate-200' />
                </div>
                <div className='w-full mb-6  '>
                  <Button className=' uppercase text-[0.9rem] font-[600] '>Submit form</Button>
                </div>
              </div>

              <div className=' w-full sm:w-[38%]   '>
                <h3>our contact information</h3>
                  <div className='w-full  flex my-5 mb-10 '>
                    <div className='  p-5  text-center  border border-primary relative   '>
                      <PhoneCallIcon  className='  text-primary ' />
                    </div>
                    <div className='ml-5'>
                      <h2 className=' font-[500] uppercase '>PHONE CONTACT</h2>
                      <p className='text-[.8rem] mt-2 font-[400] text-[#444]  '>Within working hours</p>
                      <a href="" className='text-[#444] font-[500] ' >+91 12345 67890</a>
                    </div>
                  </div>

                  <div className='w-full  flex my-5 mb-10 '>
                    <div className='  p-5  text-center  border relative   '>
                      <FactoryIcon  className='  text-primary ' />
                    </div>
                    <div className='ml-5'>
                      <h2 className=' font-[500] uppercase '>Address</h2>
                      <p className='text-[.8rem] mt-2 font-[400] text-[#444]  '>Within working hours</p>
                      <a href="" className='text-[#444] font-[500] ' >+91 12345 67890</a>
                    </div>
                  </div>

                  <div className='w-full  flex my-5 mb-10'>
                    <div className='  p-5  text-center  border relative   '>
                      <PhoneCallIcon  className='  text-primary ' />
                    </div>
                    <div className='ml-5'>
                      <h2 className=' font-[500] uppercase '>PHONE CONTACT</h2>
                      <p className='text-[.8rem] mt-2 font-[400] text-[#444]  '>Within working hours</p>
                      <a href="" className='text-[#444] font-[500] ' >+91 12345 67890</a>
                    </div>
                  </div> 
              </div>
            </div>
        </div>
      </section>


    </>
  )
}
