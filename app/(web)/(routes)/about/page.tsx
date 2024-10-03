"use client"
import Image from 'next/image'
import React from 'react'
import aboutimg1 from '@/app/img/about1.png'
import aboutimg2 from '@/app//img/about2.png'
import abouticon from '@/app//img/playicon.png'
import clogo1 from '@/app//img/client1.png'
import clogo2 from '@/app//img/client2.png'
import clogo3 from '@/app//img/client3.png'
import clogo4 from '@/app//img/client4.png'
import memberImg from '@/app//img/member.png'
import mob from '@/app//img/mobile.png'
import remainder from '@/app//img/remaid.png'
import missionimg from '@/app//img/mission.png'
import vision from '@/app//img/vision.png'
import whychooes from '@/app//img/whychooes.png'
import doctorImg from '@/app//img/doctor.png'
import advimg from '@/app//img/advantage.png'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button';

export default function About() {

    return (
        <>
            <section className='w-[100%] 
      bg-primary
       p-5 text-[0.8rem] sm:text-[1.1rem] sm:p-20  bg-center bg-cover '>
                <div className='max-w-[73.1rem] mx-auto text-white '>
                    <h4 className=' text-[1.5rem] px-6 md:px-0 md:text-[2rem]  font-[700] '>About us</h4>
                    <p className='px-6 md:px-0 font-[600] '>"Pharma Unions: Revolutionizing healthcare collaboration for a healthier tomorrow."</p>
                </div>
            </section>

            <section className=' w-full  mt-[5rem]  '>
                <div className='  max-w-[73.2rem] mx-auto mb-10 mt-10 '>
                    <div className=' flex flex-col md:flex-row justify-between '>

                        <div className=' w-[100%] md:w-[48%] flex items-center justify-between  px-4 '>
                            <div className=' w-[100%] lg:w-[80%] text-center ml-4  p-4 relative flex  '>
                                <Image alt='' src={aboutimg1} className=' w-[60%] md:w-full mx-auto ' />
                                <Image src={aboutimg2} className='w-[30%] h-[50%] md:hidden absolute top-[50%] right-[10%]   md:w-[6rem] lg:w-[9.5rem]  ' alt='' />
                                <Image alt='' src={abouticon} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10  zoom-in-75 ' />
                            </div>
                            <div className='w-[48%] hidden md:block  pl-4 '>
                                <Image src={aboutimg2} className='   md:w-[8.5rem]   ' alt='' />
                            </div>
                        </div>

                        <div className=' w-[100%] mt-4 md:w-[45%] px-5'>
                            <h4 className=' font-[600] text-[1.5rem]  sm:text-[1.8rem]  '>Best care and better service</h4>
                            <p className='text-[1rem] sm:text-[1.1rem] font-[400]  '>Delivering the best care through our commitment to excellence. We prioritize providing superior service tailored to your needs. Experience top-notch healthcare solutions designed to enhance your well-being.</p>

                            <div className=' mt-5 text-[0.7rem] md:text-[1.2rem]' >
                                <ul>
                                    <li className=' text-[0.7rem] md:text-[1rem] mb-4 font-[400] flex items-center '><span className='me-4'> <CheckCircle className='text-primary' /> </span>WhatsApp Prescriptions: Instant Patient Happiness</li>
                                    <li className=' text-[0.7rem] md:text-[1rem] mb-4 font-[400] flex items-center '><span className='me-4'> <CheckCircle className='text-primary' /> </span>WhatsApp Prescriptions: Instant Patient Happiness</li>
                                    <li className=' text-[0.7rem] md:text-[1rem] mb-4 font-[400] flex items-center '><span className='me-4'> <CheckCircle className='text-primary' /> </span>WhatsApp Prescriptions: Instant Patient Happiness</li>
                                    <li className=' text-[0.7rem] md:text-[1rem] mb-4 font-[400] flex items-center '><span className='me-4'> <CheckCircle className='text-primary' /> </span>WhatsApp Prescriptions: Instant Patient Happiness</li>
                                    <li className=' text-[0.7rem] md:text-[1rem] mb-4 font-[400] flex items-center '><span className='me-4'> <CheckCircle className='text-primary' /> </span>WhatsApp Prescriptions: Instant Patient Happiness</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-[100%] mt-12  '>
                <div className='max-w-[73.2rem]  mx-auto h-[100%]'>
                    <h4 className=' uppercase text-center font-[600] text-[1rem] md:text-[1.3rem] '>trusted by 250+ clinics</h4>
                    <div className=' grid grid-cols-4 '>
                        <div className=' px-[1.2rem]  pt-[1.3rem]  bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]'>
                            <div className=' h-[100%] rounded-3xl py-6 '>
                                <div className='w-[5.2rem]  h-[5.2rem]   mx-auto  rounded-full z-50  '>
                                    <Image src={clogo1} alt='' className='w-[100%] border h-[100%] rounded-full ' />
                                </div>
                            </div>
                        </div>
                        <div className=' px-[1.2rem]  pt-[1.3rem]  bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]'>
                            <div className=' h-[100%] rounded-3xl py-6 '>
                                <div className='w-[5.2rem]  h-[5.2rem]   mx-auto  rounded-full z-50  '>
                                    <Image src={clogo2} alt='' className='w-[100%] border h-[100%] rounded-full ' />
                                </div>
                            </div>
                        </div>
                        <div className=' px-[1.2rem]  pt-[1.3rem]  bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]'>
                            <div className=' h-[100%] rounded-3xl py-6 '>
                                <div className='w-[5.2rem]  h-[5.2rem]   mx-auto  rounded-full z-50  '>
                                    <Image src={clogo3} alt='' className='w-[100%] border h-[100%] rounded-full ' />
                                </div>
                            </div>
                        </div>
                        <div className=' px-[1.2rem]  pt-[1.3rem]  bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]'>
                            <div className=' h-[100%] rounded-3xl py-6 '>
                                <div className='w-[5.2rem]  h-[5.2rem]   mx-auto  rounded-full z-50  '>
                                    <Image src={clogo4} alt='' className='w-[100%] border h-[100%] rounded-full ' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className=' w-[100%]  mt-10 bg-gradient-to-b from-blue-200  to-white p-10 '>
                <div className='max-w-[73.3rem]  mx-auto '>

                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                        <div className=' p-4 '>
                            <Image alt='' src={memberImg} />
                        </div>

                        <div className=' px-4 '>
                            <h4 className=' uppercase text-[1rem] md:text-[1.5rem] font-[600] ' >Healthcare Collaboration Platform</h4>
                            <p className=' mt-5 font-[500] text-[0.9rem] md:text-[1rem] '>A comprehensive platform fostering collaboration across healthcare sectors. Streamline communication and optimize patient care with our innovative solutions.</p>

                            <div className=' mb-4  flex items-center mt-4 '>
                                <div className='w-[3.7rem] mt-4  me-4   '>
                                    <Image alt='' src={mob} className='  img-fluid  ' />
                                </div>
                                <div>
                                    <h4 className=' capitalize font-[600] '>Digital preciption</h4>
                                    <p className=' font-[400] '>Effortlessly receive digital prescriptions for convenient healthcare management.</p>
                                </div>
                            </div>
                            <div className=' mb-4  flex items-center mt-4 '>
                                <div className='w-[3.7rem] mt-4  me-4 ]  '>
                                    <Image alt='' src={remainder} className='  img-fluid  ' />
                                </div>
                                <div>
                                    <h4 className=' capitalize font-[600] '>automated appointment reminder</h4>
                                    <p className=' font-[400] '>Stay on schedule with our automated appointment reminders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='w-[100%] mt-0  bg-gradient-to-r from-gray-200 to-gray-100 '>
                <div className='max-w-[1170px] mx-auto border-[#fff] border-[1px] py-10  '>

                    <div className='w-[100%]  py-10 px-3 flex  flex-col-reverse md:flex-row h-[100%] ' >

                        <div className=' basis-[100%] md:basis-[55%] pt-[50px]  text-center md:text-left  '>
                            <h4 className=' uppercase font-[600] text-center md:text-left  '>Why choose our Phrma unions services</h4>
                            <p className=' mt-5 font-[400] text-[14px] md:text-[16px]  '>Select Pharma Unions for comprehensive healthcare solutions tailored to your needs. Experience efficiency, reliability, and innovation in every aspect of our services. Trust our platform to streamline your healthcare management and enhance patient care.</p>
                            <div className=' w-[100%] flex justify-between items-center mt-10 mb-3  '>
                                <div className='basis-[45%]  '>
                                    <div className='w-[40px] h-[40px] mx-auto md:mx-0 '>
                                        <Image alt="" src={missionimg} className='w-[100%] h-[100%] ' />
                                    </div>
                                    <p className='text-[#007C7C] uppercase my-4 '>OUR MISSION</p>
                                    <p className='text-[14px]'> Our mission is to empower healthier lives through accessible healthcare solutions.</p>
                                </div>
                                <div className='basis-[45%]  '>
                                    <div className='w-[40px] h-[40px] mx-auto md:mx-0 '>
                                        <Image alt="" src={vision} className='w-[100%] h-[100%] ' />
                                    </div>
                                    <p className='text-[#007C7C] uppercase my-4  '>OUR vision</p>
                                    <p className='text-[14px]'> Our mission is to empower healthier lives through accessible healthcare solutions.</p>
                                </div>
                            </div>
                            <div className='text-center mt-10 md:text-left'>
                                <Button>Learn More</Button>
                            </div>
                        </div>
                        <div className=' p-4 basis-[100%] w-[95%] h-[80%]   md:basis-[44%] text-center md:text-left  '>
                            <Image src={whychooes} className='w-[100%] h-[80%]' alt='' />
                        </div>
                    </div>
                </div>
            </section>


            <section className='w-[100%] mt-0  bg-gradient-to-r from-teal-600 via-teal-800 to-blue-200  p-12 '>
                <div className=' max-w-[73.2rem] mx-auto   relative '>
                    <div className=' flex  flex-col md:flex-row justify-between '>
                        <div className=' w-[100%] md:w-[60%] text-white   px-2 '>
                            <h4 className=' uppercase font-[600] text-[1rem] md:text-[1.2rem] '>Streamlined Healthcare Solutions</h4>
                            <p className='mt-2 font-[400] '>Effortlessly retrieve patient records, receive automated appointment reminders, instantly access WhatsApp prescriptions, and view real-time lab reports for enhanced patient satisfaction and efficient healthcare management.</p>
                            <div className='text-right m-4 flex justify-end items-end '>
                                <ArrowRight />
                            </div>
                        </div>

                        <div className=' hidden md:block  w-[38%] '>
                            <div className=' absolute lg:top-[-85%] md:top-[-10%]  '>
                                <Image alt='' src={doctorImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='w-100% my-10 mt-32  '>
                <div className=' max-w-[72.3rem]  mx-auto  '>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between '>

                        <div className=' w-full md:w-[40%]  p-4   '>
                            <h4 className=' uppercase font-[600] text-[1rem] md:text-[1.1rem] ' >Advantages of Our Pharma Unions</h4>
                            <p className=' font-[500] text-[0.9rem] md:text-[1rem] mt-4'>Streamline your workflow with our intuitive dashboard interface. Access key data and insights at a glance for informed decision-making. Stay organized and efficient with customizable widgets and easy navigation</p>
                            <div className='flex items-end justify-end mt-4'>
                                <p className=' font-[500] capitalize items-end flex  ' >read more <span> <ArrowRight className=' ml-3 ' /> </span> </p>
                            </div>
                        </div>

                        <div className='w-full md:w-[58%] px-4 bg-white '>
                            <div className=' flex  '>
                                <div className='w-[50%]  ' >
                                    <Image src={advimg} alt='' className='w-[100%]' />
                                </div>

                                <div className='w-[48%] h-[100px] ml-[-3%] mt-[2rem] md:mt-[4rem]    '>
                                    <div className='flex  items-center mb-2 md:mb-5  '>
                                        <div className='  bg-white  p-1 rounded-full '>
                                            <div className=' pt-2 rounded-full w-10 h-10 text-white bg-[gray] text-center '>
                                                <p className=' font-[600] text-white  '> 1</p>
                                            </div>

                                        </div>
                                        <h4 className=' uppercase font-[700] ml-2 '>scan qr code</h4>
                                    </div>
                                    <div className='flex  items-center mb-2 md:mb-5 '>
                                        <div className='  bg-white  p-1 rounded-full '>
                                            <div className=' pt-2 rounded-full w-10 h-10 text-white bg-[gray] text-center '>
                                                <p className=' font-[600] text-white  '> 2</p>
                                            </div>
                                        </div>
                                        <h4 className=' uppercase font-[700] ml-2 '>get digital prescription</h4>
                                    </div>
                                    <div className='flex  items-center mb-2 md:mb-5 '>
                                        <div className='  bg-white  p-1 rounded-full '>
                                            <div className=' pt-2 rounded-full w-10 h-10 text-white bg-[gray] text-center '>
                                                <p className=' font-[600] text-white  '> 3</p>
                                            </div>
                                        </div>
                                        <h4 className=' uppercase font-[700] ml-2 '>hassle free records</h4>
                                    </div>
                                    <div className='flex  items-center  '>
                                        <div className='  bg-white  p-1 rounded-full '>
                                            <div className=' pt-2 rounded-full w-10 h-10 text-white bg-[gray] text-center '>
                                                <p className=' font-[600] text-white  '> 4</p>
                                            </div>

                                        </div>
                                        <h4 className=' uppercase font-[700] ml-2 '>appointment reschedule</h4>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
