import React, { isValidElement } from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsFillMegaphoneFill } from 'react-icons/bs'
import { FaHotel, FaPlaneDeparture } from 'react-icons/fa'
import { FaPersonHiking } from "react-icons/fa6";
import { MdFastfood } from 'react-icons/md'
import { PiMountainsBold } from 'react-icons/pi';

export const Services = () => {
  return (
    <div className='py-6 flex flex-col items-center justify-cente bg-lightGreen'>     
      <div className='flex flex-col items-center mb-7 text-black'>
        <PiMountainsBold size={20} className='text-darkGreen'/>
        <div className='text-3xl tracking-wide font-bold'>Our Services</div>
        <p className='text-sm uppercase'>What we offer</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[75%] pb-8'>
          <div className='service'>
              <FaHotel size={50} className='text-darkGreen'/>
              <h3 className='text-xl'> Affordable Hotels</h3>
              <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
          </div>
          <div className='service'>
              <FaPlaneDeparture size={50} className='text-darkGreen'/>
              <h3 className='text-xl'>Fastest Travel</h3>
              <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
          </div>
          <div className='service'>
              <FaPersonHiking size={50} className='text-darkGreen'/>
              <h3 className='text-xl'>Best Guides</h3>
              <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
          </div>
          </div>
          </div>

  )
}
