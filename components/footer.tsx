import React from 'react';
import footerlogo from '@/app/img/footerlogo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className='w-full bg-primary py-5'>
        <div className='max-w-[1170px] mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-4'>
            <div className='col-span-1'>
              <div className='w-[120px] h-[120px] mx-auto '>
                <Image src={footerlogo} alt='' className='w-full h-full img-fluid' />
              </div>
              <p className='text-white mt-2 text-[14px] md:text-center'>Empowering healthcare innovation. Connecting stakeholders for better health.</p>
            </div>

            <div className='col-span-3 flex justify-between'>
              <div className='md:w-full md:text-center md:leading-[30px] py-6 px-5'>
                <h2 className='font-semibold text-white text-[20px] mb-2 md:mb-4'>Quick Link</h2>
                <ul className='capitalize'>
                  <li><Link href='/about'>About us</Link></li>
                  <li><Link href='/contact'>Contact us</Link></li>
                  <li><Link href='/feature'>Features</Link></li>
                  <li><Link href='/price'>Prices</Link></li>
                </ul>
              </div>

              <div className='md:w-full md:text-center md:leading-[30px] py-6 px-5'>
                <h2 className='font-semibold text-white text-[20px] mb-2 md:mb-4'>Useful Links</h2>
                <ul className='capitalize'>
                  <li><a href=''>About us</a></li>
                  <li><a href=''>Contact us</a></li>
                  <li><a href=''>Features</a></li>
                  <li><a href=''>Prices</a></li>
                </ul>
              </div>

              <div className='md:w-full md:text-center md:leading-[30px] py-6 px-5'>
                <h2 className='font-semibold text-white text-[20px] mb-2 md:mb-4'>Contact Details</h2>
                <ul className='capitalize'>
                  <li>Email : <a href=''>contact@example.com</a></li>
                  <li>Phone : <a href=''>+91-1234-56789</a></li>
                  <li>Address : <a href=''>123 main st, city, country</a></li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='w-[80%] mx-auto' />
          <div className='w-full px-5'>
            <p className='text-center text-white mt-8 text-[14px]'>Copyright © 2024 Phrma unions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
