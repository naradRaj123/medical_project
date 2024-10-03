'use client'
import React from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import qr from '@/app/img/patientQR.png'
import pres from '@/app/img/presciption.png'
import submitimg from '@/app/img/submit.png'
import aboutimg from '@/app/img/about.png'
import reminderimg from '@/app/img/reminder.png'
import reportimg from '@/app/img/report.png'
import recordimg from '@/app/img/record.png'
import missionimg from '@/app/img/mission.png'
import userimg from '@/app/img/user1.png'
import clogo1 from '@/app/img/client1.png'
import clogo2 from '@/app/img/client2.png'
import clogo3 from '@/app/img/client3.png'
import whyimg from '@/app/img/whybanner.png'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const LandingPage = () => {


  return (
    <>
      <Header />
      <section className="w-[100%]  h-[auto] bg-cover bg-center bg-primary text-white  " >
        <div className='w-[100%] py-[10px] md:py-[6.25rem] h-[100%] backdrop-opacity-10 backdrop-invert bg-white/30 '>
          <div className='max-w-[73.2rem] mx-auto p-[1.2rem] pb-[5rem]  ' >
            <div className='grid grid-cols-1 sm:grid-cols-2 text-left ' >
              <div className='    rounded-2xl  mt-[2.5rem]'>
                <p className='text-[1.1rem] md:text-[30px] font-[600]  uppercase  '>Digitising Hetlthcare togehter</p>
                <p className=' text-[0.9rem] md:text-[1rem] font-[500] '>Say good bye to paper priscription </p>
                <p className='text-[0.75rem] sm:text-[1rem] font-[400]  '>With phrma unions , switch to degital pen and tabletes for easier and longer records, patients  receive priscriptions instantly on whatsapp .</p>
              </div>
            </div>
            <div className=' mb-0 sm:mb-[1.9rem] '>
              <Button className=' mt-5 ' >Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <section className='w-[100%]   relative '>
        <div className='w-[100%]   bg-[#0697B4] py-[20px] '>
          <div className='max-w-[73.2rem] mx-auto   ' >
            <div className='grid md:grid-cols-3 grid-col-1 gap-[20px] px-[10px] '>
              <div className=' flex items-center'>
                <div className='w-[80px] h-[80px]  '>
                  <Image alt='' src={qr} />
                </div>
                <div className='text-white  '>
                  <h4 className=' font-[700] text-[14px] md:text-[18px] '>Patient score your qr code</h4>
                  <p className='text-[12px] md:text-[14px]'>Patient visit, scan the qr code, and their details appear i</p>
                </div>
              </div>
              <div className=' flex items-center'>
                <div className='w-[80px] h-[80px]  '>
                  <Image alt='' src={pres} />
                </div>
                <div className='text-white ps-3'>
                  <h4 className=' font-[700] text-[14px] md:text-[18px] '>Prescription Added</h4>
                  <p className='text-[12px] md:text-[14px]'>details simplyfy the process as all relevent information is auto - fetched for precision.</p>
                </div>
              </div>
              <div className=' flex items-center'>
                <div className='w-[80px] h-[80px]  '>
                  <Image alt='' src={submitimg} />
                </div>
                <div className='text-white ps-3'>
                  <h4 className=' font-[700] text-[14px] md:text-[18px] '>Submit</h4>
                  <p className='text-[12px] md:text-[14px]'>the ‘submit’ button the patient receives the prescription on their whatsapp number.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-[100%] my-4 pb-4 ' >
        <div className=' max-w-[1170px]  mx-auto h-[100%] px-5 '>
          <div className=' w-[100%] grid grid-cols-1 md:mt-10  md:grid-cols-2   gap-6 '>
            <div className='   w-[95%] h-[80%] mt-10 '>
              <Image alt='' className='w-[100%] h-[100%]' src={aboutimg} />
            </div>
            <div className='   w-[95%] h-[80%] mt-10   '>
              <h4 className='text-[700] text-[1.1rem] md:text-[1.8rem] capitalize  '>who we are?</h4>
              <p className='mt-5 leading-8 text-[14px] md:text-[18px] '>"With Pharma Unions, transition to digital pens and tablets streamlines record-keeping for extended and convenient access. Patients benefit from instant prescription delivery via WhatsApp, ensuring prompt and hassle-free healthcare management. Our platform's integration with digital tools enhances efficiency and facilitates seamless communication between healthcare providers and patients. Experience the convenience of modern technology for improved patient care and satisfaction."</p>
              <Button className='mt-6 '>Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`w-[100%]  mb-5 md:mb-[10rem] bg-primary text-white bg-cover bg-center h-auto md:h-[25rem] `} >
        <div className='bg-white bg-opacity-30 w-[100%] h-[100%] py-10 pb-2   '>
          <div className='max-w-[73.2rem]  text-center mx-auto h-[100%]'>
            <div className=' mt-[2.8rem]  '>
              <h3 className=' capitalize font-[500] text-[14px] md:text-[1.2rem] '>what we do</h3>
              <h2 className='text-[1.1rem] font-[500] md:text-[30px] mt-2 '>Believe in us, we won’t let you down</h2>
              <p className='w-[100%] md:w-[80%] text-center mx-auto mt-3 text-[14px] md:text-[1rem] font-[400]'>"Place your trust in us; we're committed to exceeding your expectations. Count on our dedication and expertise to deliver exceptional results. Your satisfaction and success are our top priorities."</p>
            </div>

            <div className='w-[100%]  text-center mx-auto     mt-0 md:mt-[40px] z-50 mb-1 md:mb-10 p-5 '>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                <div className=' p-2 bg-white rounded-md py-4 shadow-xl '>
                  <div className='w-[3.1rem] h-[3.1rem] mx-auto  '>
                    <Image alt='' src={reminderimg} className='w-[100%] h-[100%] img-fluid  ' />
                  </div>
                  <div className='p-2'>
                    <h4 className=' capitalize  text-[#007C7C] font-[500] md:text-[18px] '>automated appointment reminder</h4>
                    <p className='text-[14px]'>Never miss an important appointment again! Our automated reminders ensure you stay on track with your schedule. Receive timely notifications straight to your device, effortlessly keeping you organized and punctual.</p>
                  </div>
                </div>
                <div className=' p-2 bg-white rounded-md py-4 shadow-lg ' >
                  <div className='w-[3.1rem] h-[3.1rem] mx-auto  '>
                    <Image alt='' src={recordimg} className='w-[100%] h-[100%] img-fluid  ' />
                  </div>
                  <div className='p-2'>
                    <h4 className=' capitalize  text-[#007C7C] font-[500] md:text-[18px] '>effortless patient records retrieval</h4>
                    <p className='text-[14px]'>Streamline your workflow with effortless patient records retrieval. Access comprehensive medical histories instantly, enhancing efficiency and patient care.
                    </p>
                  </div>
                </div>
                <div className=' p-2 bg-white rounded-md py-4 shadow-2xl '>
                  <div className='w-[3.1rem] h-[3.1rem] mx-auto  '>
                    <Image alt='' src={reportimg} className='w-[100%] h-[100%] img-fluid  ' />
                  </div>
                  <div className='p-2'>
                    <h4 className=' capitalize  text-[#007C7C] font-[500] md:text-[18px] '>real time lab reporting viewing</h4>
                    <p className='text-[14px]'>Stay informed with real-time lab reporting viewing. Access critical data instantly, empowering swift decision-making and optimizing patient treatment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-[100%] mt-0   '>
        <div className='max-w-[73.2rem] mx-auto border-[#fff]  py-10 '>

          <div className='w-[100%]  py-10 px-3 flex  flex-col-reverse md:flex-row h-[100%] ' >

            <div className=' basis-[100%] md:basis-[55%] pt-[50px]  text-center md:text-left  '>
              <h4 className=' uppercase font-[600] text-center md:text-left  '>Why choose our Phrma unions services</h4>
              <p className=' mt-5 font-[400] text-[14px] md:text-[16px]  '>Select Pharma Unions for comprehensive healthcare solutions tailored to your needs. Experience efficiency, reliability, and innovation in every aspect of our services. Trust our platform to streamline your healthcare management and enhance patient care.</p>
              <div className=' w-[100%] flex justify-between items-center mt-10 mb-3  '>
                <div className='basis-[45%]  '>
                  <div className='w-[2.5rem] h-[2.5rem] mx-auto md:mx-0 '>
                    <Image alt="" src={missionimg} className='w-[100%] h-[100%] ' />
                  </div>
                  <p className='text-[#007C7C] uppercase my-4 '>OUR MISSION</p>
                  <p className='text-[14px]'> Our mission is to empower healthier lives through accessible healthcare solutions.</p>
                </div>
                <div className='basis-[45%]  '>
                  <div className='w-[2.5rem] h-[2.5rem] mx-auto md:mx-0 '>
                    <Image alt="" src={missionimg} className='w-[100%] h-[100%] ' />
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
              <Image src={whyimg} className='w-[100%] h-[80%]' alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='w-[100%] py-[6rem] my-6 md:py-[7.5rem] h-auto '>
        <div className='w-[100%]   bg-[#2F6B90] h-auto md:h-[15.6rem] p-5 '>
          <div className='max-w-[73.1rem] mx-auto flex justify-between items-center  '>

            <div className=' p-8  rounded-md basis-[100%] md:basis-[45%] bg-[#D9D9D9] shadow-xl h-auto  mt-0 md:mt-[-10rem] mx-auto border '>
              <h4 className='text-center font-[600] text-[1.4rem] mt-3 '>Please fill the form below</h4>
              <p className='  mx-auto text-center text-[0.9rem] md:text-[1rem] mt-3 font-[500] ' >Please complete the form with the requested information.</p>
              <div className=' justify-between  mt-5 w-[100%] flex px-0 md:px-5 '>
                <div className=' basis-[45%]  '>
                  <Label >First Name</Label>
                  <Input className='mt-2 bg-[#C7BCBC]' />
                </div>
                <div className=' basis-[45%]  '>
                  <Label  >Last Name</Label>
                  <Input className='mt-2 bg-[#C7BCBC]' />
                </div>
              </div>
              <div className=' justify-between  mt-5 w-[100%] flex px-0 md:px-5 '>
                <div className=' basis-[45%]  '>
                  <Label >Phone</Label>
                  <Input className='mt-2 bg-[#C7BCBC]' />
                </div>
                <div className=' basis-[45%]  '>
                  <Label  >Email</Label>
                  <Input className='mt-2 bg-[#C7BCBC] ' />
                </div>
              </div>
              <div className='   mt-5 w-[100%]  px-0 md:px-5 '>
                <div className=' basis-[45%]  '>
                  <Label >Description</Label>
                  <text />
                  <Textarea className='mt-2 bg-[#C7BCBC]  '></Textarea>
                </div>
              </div>
              <div className='   mt-5 w-[100%]   px-0 md:px-5 '>
                <Button>Submit</Button>
              </div>

            </div>

            <div className='basis-[45%] text-white mt-0  md:mt-[-8rem]  hidden md:block py-3 mx-auto  '>
              <h4 className=' font-[500] capitalize '>Ready to become our member?</h4>
              <h4 className='text-[1.5rem] capitalize mt-3  '>we Assure doctor’s with personal care</h4>
              <p className='w-[80%] mt-3 text-[0.9rem]'>We assure doctors with personalized attention and dedicated support, fostering their professional growth and well-being.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-[100%] mt-12  '>
        <div className='max-w-[73.2rem]  mx-auto h-[100%]'>

                <div className=' grid grid-cols-4 gap-10 '>

                  <div className=' px-[1.2rem]  pt-[1.3rem]  bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]'>
                    <div className=' h-[100%] rounded-3xl py-6 '>
                      <div className='w-[5.2rem] h-[5.2rem] mx-auto  rounded-full z-50  '>
                        <Image src={clogo2} alt='' className='w-[100%] border h-[100%] rounded-full ' />
                      </div>

                    </div>
                  </div>
                  <div className=' px-[1.2rem]  pt-[1.3rem]  bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]'>
                    <div className=' h-[100%] rounded-3xl py-6 '>
                      <div className='w-[5.2rem] h-[5.2rem] mx-auto  rounded-full z-50  '>
                        <Image src={clogo1} alt='' className='w-[100%] border h-[100%] rounded-full ' />
                      </div>

                    </div>
                  </div>
                  <div className=' px-[1.2rem]  pt-[1.3rem]  bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]'>
                    <div className=' h-[100%] rounded-3xl py-6 '>
                      <div className='w-[5.2rem] h-[5.2rem] mx-auto  rounded-full z-50  '>
                        <Image src={clogo3} alt='' className='w-[100%] border h-[100%] rounded-full ' />
                      </div>

                    </div>
                  </div>
                  <div className=' px-[1.2rem]  pt-[1.3rem]  bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)]'>
                    <div className=' h-[100%] rounded-3xl py-6 '>
                      <div className='w-[5.2rem] h-[5.2rem] mx-auto  rounded-full z-50  '>
                        <Image src={clogo1} alt='' className='w-[100%] border h-[100%] rounded-full ' />
                      </div>
                    </div>
                  </div>
                  </div>

        </div>
      </section>

      <section className='w-[100%] mt-12    '>
        <div className='max-w-[73.2rem]  mx-auto h-[100%]'>
          <h4 className='text-center uppercase mt-6 text-[1.1rem] mb-4 md:text-[1.5rem] text-primary font-[500] '>Adviosry board commitee</h4>
          <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 '>
            
            <div className=' p-[1.3rem] pt-[2.5rem] relative bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)
                    ]  '>
              <div className=' h-[100%] rounded-3xl py-6 bg-[#99BED1] text-white '>
               
                <div className='w-[100px]  h-[100px] border-[#65C9F1] border-[2px] mx-auto mt-[-3.4rem] rounded-full z-50  '>
                  <Image src={userimg} alt='' className='w-[100%] h-[100%] rounded-full ' />
                </div>
                <p className='text-center capitalize text-[18px] font-[500] text-[#000] mt-4'>Lorem Ipsum</p>
                <p className='text-center capitalize'>Software developer</p>
                <p className='text-center  capitalize text-[14px] p-4  mb-5'>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
              </div>
            </div>

            <div className=' p-[1.3rem] pt-[2.5rem] relative bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)
                    ]  '>
              <div className=' h-[100%] rounded-3xl py-6 bg-[#99BED1] text-white '>
               
                <div className='w-[100px]  h-[100px] border-[#65C9F1] border-[2px] mx-auto mt-[-3.4rem] rounded-full z-50  '>
                  <Image src={userimg} alt='' className='w-[100%] h-[100%] rounded-full ' />
                </div>
                <p className='text-center capitalize text-[18px] font-[500] text-[#000] mt-4'>Lorem Ipsum</p>
                <p className='text-center capitalize'>Software developer</p>
                <p className='text-center  capitalize text-[14px] p-4  mb-5'>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
              </div>
              
            </div>

            <div className=' p-[1.3rem] pt-[2.5rem] relative bg-[linear-gradient(114.39deg, #65C9F1 0.88%, #007C7C 95.94%)
                    ]  '>
              <div className=' h-[100%] rounded-3xl py-6 bg-[#99BED1] text-white '>
               
                <div className='w-[100px]  h-[100px] border-[#65C9F1] border-[2px] mx-auto mt-[-3.4rem] rounded-full z-50  '>
                  <Image src={userimg} alt='' className='w-[100%] h-[100%] rounded-full ' />
                </div>
                <p className='text-center capitalize text-[18px] font-[500] text-[#000] mt-4'>Lorem Ipsum</p>
                <p className='text-center capitalize'>Software developer</p>
                <p className='text-center  capitalize text-[14px] p-4  mb-5'>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
              </div>
              
            </div>


          </div>
        </div>
      </section>

      <section className='w-[100%]   my-10  py-10  '>
        <div className='max-w-[1170px]  mx-auto h-[100%]'>
          <h4 className='text-center uppercase font-[700] md:text-[1.5rem] ' >Subscribe us for updates</h4>
          <p className='text-center w-[80%] mx-auto text-[1rem] font-[400] mt-5 uppercase  '>Stay informed by subscribing to receive our latest updates and news. Join our mailing list for regular notifications.</p>

          <div className='  flex justify-between items-center w-full flex-row p-4 md:w-3/6  mx-auto mt-11'>
            <Input className='basis-2/3 border-primary border-[0.09rem] ' placeholder="Email" />
            <Button className='w-[30%] bg-black text-white  '>Subscribe</Button>
          </div>

        </div>
      </section>
      <Footer />

    </>
  )
}

export default LandingPage
