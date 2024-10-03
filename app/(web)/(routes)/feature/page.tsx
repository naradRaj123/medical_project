"use client"
import { Button } from '@/components/ui/button'
import qrfeatureimg from '@/app/img/qrfeature.png'
import featureimg from '@/app/img/featurepresciption.png'
import userimg from '@/app/img/userfeature.png'
import missionimg from '@/app/img/mission.png'
import memberImg from '@/app/img/member.png'
import advimg from '@/app/img/feature.png'
import blogimg from '@/app/img/newsfeature.png'
import React from 'react'
import Image from 'next/image'

export default function Feature() {

    return (
        <>
            <section className="w-[100%]  h-[auto] bg-cover bg-center bg-primary text-white  " >
                <div className='w-[100%] py-[10px]  h-[100%] backdrop-opacity-10 backdrop-invert bg-white/30 '>
                    <div className='max-w-[73.1rem] mx-auto p-[1.2rem]   ' >
                        <div className='grid grid-cols-1 sm:grid-cols-2 text-left ' >
                            <div className='    rounded-2xl  mt-[2.5rem]'>
                                <p className='text-[1.1rem] md:text-[30px] font-[600]  uppercase  '>Features Overview</p>
                                <p className='text-[0.75rem] sm:text-[1rem] font-[400]  '>"Get a snapshot of our features: Streamlined patient records and seamless appointment management for optimized healthcare delivery."</p>
                            </div>
                        </div>
                        <div className=' mb-0 sm:mb-[1.9rem] '>
                            <Button className=' mt-5 ' >Learn More</Button>
                        </div>
                    </div>
                </div>
            </section>


            {/* what we provide */}
            <section className='w-[100%] mt-12    '>
                <div className='max-w-[73.2rem]  mx-auto h-[100%]'>
                    <h4 className='text-center uppercase mt-6 text-[1.1rem] mb-4 md:text-[1.5rem] text-primary font-[500] '>What we Provide</h4>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 '>
                        <div className=' p-[1.3rem] pt-[2.5rem] relative bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)
                    ]  '>
                            <div className=' h-[100%] rounded-3xl py-6 bg-[#99BED1] text-white '>
                                <div className='w-[100px]  h-[100px]  mx-auto   z-50  '>
                                    <Image src={qrfeatureimg} alt='' className='w-[100%] h-[100%] ' />
                                </div>
                                <p className='text-center capitalize text-[18px] font-[500] text-[#000] mt-4'>Patient score your qr code</p>
                                <p className='text-center  capitalize text-[14px] p-4  mb-5'>Effortlessly explore our platform by category, simplifying your search for specific features.</p>
                            </div>
                        </div>

                        <div className=' p-[1.3rem] pt-[2.5rem] relative bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)
                    ]  '>
                            <div className=' h-[100%] rounded-3xl py-6 bg-[#99BED1] text-white '>
                                <div className='w-[100px]  h-[100px]  mx-auto   z-50  '>
                                    <Image src={featureimg} alt='' className='w-[100%] h-[100%] ' />
                                </div>
                                <p className='text-center capitalize text-[18px] font-[500] text-[#000] mt-4'>Patient score your qr code</p>
                                <p className='text-center  capitalize text-[14px] p-4  mb-5'>Effortlessly explore our platform by category, simplifying your search for specific features.</p>
                            </div>
                        </div>
                        <div className=' p-[1.3rem] pt-[2.5rem] relative bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)
                    ]  '>
                            <div className=' h-[100%] rounded-3xl py-6 bg-[#99BED1] text-white '>
                                <div className='w-[100px]  h-[100px]  mx-auto   z-50  '>
                                    <Image src={userimg} alt='' className='w-[100%] h-[100%] ' />
                                </div>
                                <p className='text-center capitalize text-[18px] font-[500] text-[#000] mt-4'>Submit</p>
                                <p className='text-center  capitalize text-[14px] p-4  mb-5'>Enjoy a user-friendly interface that optimizes efficiency and enhances overall usability.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/*  */}
            <section className=' w-[100%]  mt-10  p-10 '>
                <div className='max-w-[73.3rem]  mx-auto '>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                        <div className=' p-4  rounded-tl-2xl '>
                            <Image alt='' src={memberImg} className=' rounded-tl-[10rem] rounded-br-[10rem] ' />
                        </div>
                        <div className=' px-4 '>
                            <div className=' mb-4  flex items-center mt-4 bg-[#D9D9D9]   p-4 rounded-md '>
                                <div className='w-[200px] mt-4  me-4   '>
                                    <Image alt='' src={missionimg} className=' w-[100%] h-[100%]  img-fluid  ' />
                                </div>
                                <div>
                                    <h4 className=' capitalize font-[600] text-primary '>Our Mission</h4>
                                    <p className=' font-[400] '>Our mission is to provide accessible and high-quality healthcare solutions, leveraging innovation and dedication to improve patient outcomes and enhance the healthcare experience for all.</p>
                                </div>
                            </div>
                            <div className=' mb-4  flex items-center mt-4 bg-[#D9D9D9]   p-4 rounded-md '>
                                <div className='w-[200px] mt-4  me-4   '>
                                    <Image alt='' src={missionimg} className=' w-[100%] h-[100%]  img-fluid  ' />
                                </div>
                                <div>
                                    <h4 className=' capitalize font-[600] text-primary '>who we are</h4>
                                    <p className=' font-[400] '>Our mission is to provide accessible and high-quality healthcare solutions, leveraging innovation and dedication to improve patient outcomes and enhance the healthcare experience for all.</p>
                                </div>
                            </div>
                            <div className=' mb-4  flex items-center mt-4 bg-[#0697B3]   p-4 rounded-md '>
                                <div className='w-[200px] mt-4  me-4   '>
                                    <Image alt='' src={missionimg} className=' w-[100%] h-[100%]  img-fluid  ' />
                                </div>
                                <div>
                                    <h4 className=' capitalize font-[600] text-[#007C7C]  '>our Vision</h4>
                                    <p className=' font-[400] '>Our mission is to provide accessible and high-quality healthcare solutions, leveraging innovation and dedication to improve patient outcomes and enhance the healthcare experience for all.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* super services */}
            <section className='w-100% my-10 mt-32  '>
                <div className=' max-w-[72.3rem]  mx-auto  '>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between '>

                        <div className=' w-full md:w-[50%]  p-4   '>
                            <h4 className=' uppercase font-[600] text-[1rem] md:text-[1.1rem] ' >Specialists ensuring better health through superior service</h4>
                            <p className=' font-[500] text-[0.9rem] md:text-[1rem] mt-4'>Our specialists prioritize your health, delivering exceptional care tailored to your needs. With expertise and dedication, we strive for optimal health outcomes and patient satisfaction.</p>
                        </div>
                        <div className='w-full md:w-[50%] px-4 bg-white '>
                            <Image src={advimg} alt='' className='w-[100%]' />
                        </div>
                    </div>
                </div>
            </section>

            {/* follow section */}
            <section className='w-[100%] mt-12    '>
                <div className='max-w-[73.2rem]  mx-auto h-[100%]'>
                    <h4 className=' uppercase mt-6 text-[1.1rem] mb-4 md:text-[1.5rem] font-[500] '>Follow the latest Artical and news</h4>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

                        <div className=' p-[1.3rem] pt-[2.5rem] relative bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]  '>
                            <div className=' h-[100%] rounded-3xl  bg-[#99BED1] text-white '>
                                <div className='w-[100%]  h-[12.5rem]   mx-auto   z-50  '>
                                    <Image src={blogimg}  alt='' className='w-[100%] rounded-tl-[1.5rem] rounded-tr-[1.5rem]  h-[100%] ' />
                                </div>
                                <p className='text-center capitalize text-[1.01rem] font-[500] text-[#000] mt-4'>We Believe in great ideas and deeds </p>
                                <p className='text-center  capitalize text-[14px] p-4  mb-5'>We believe in the power of innovative ideas and impactful actions to drive positive change. Through our commitment to excellence, we strive to make a difference in the lives of others.</p>
                            </div>
                        </div>

                        <div className=' p-[1.3rem] pt-[2.5rem] relative bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]  '>
                            <div className=' h-[100%] rounded-3xl  bg-[#99BED1] text-white '>
                                <div className='w-[100%]  h-[12.5rem]   mx-auto   z-50  '>
                                    <Image src={blogimg}  alt='' className='w-[100%] rounded-tl-[1.5rem] rounded-tr-[1.5rem]  h-[100%] ' />
                                </div>
                                <p className='text-center capitalize text-[1.01rem] font-[500] text-[#000] mt-4'>We Believe in great ideas and deeds </p>
                                <p className='text-center  capitalize text-[14px] p-4  mb-5'>We believe in the power of innovative ideas and impactful actions to drive positive change. Through our commitment to excellence, we strive to make a difference in the lives of others.</p>
                            </div>
                        </div>

                        <div className=' p-[1.3rem] pt-[2.5rem] relative bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]  '>
                            <div className=' h-[100%] rounded-3xl  bg-[#99BED1] text-white '>
                                <div className='w-[100%]  h-[12.5rem]   mx-auto   z-50  '>
                                    <Image src={blogimg}  alt='' className='w-[100%] rounded-tl-[1.5rem] rounded-tr-[1.5rem]  h-[100%] ' />
                                </div>
                                <p className='text-center capitalize text-[1.01rem] font-[500] text-[#000] mt-4'>We Believe in great ideas and deeds </p>
                                <p className='text-center  capitalize text-[14px] p-4  mb-5'>We believe in the power of innovative ideas and impactful actions to drive positive change. Through our commitment to excellence, we strive to make a difference in the lives of others.</p>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </section>


        </>
    )
}
