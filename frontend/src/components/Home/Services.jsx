import React, { isValidElement } from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsFillMegaphoneFill } from 'react-icons/bs'
import { FaHotel, FaPlaneDeparture } from 'react-icons/fa'
import { FaPersonHiking } from "react-icons/fa6";
import { MdFastfood } from 'react-icons/md'
import { PiMountainsBold } from 'react-icons/pi';

export const Services = () => {
  return (
    <div className='py-6 flex flex-col items-center justify-center text-darkGreen mx-5'>
      <div className='flex flex-col items-center mb-7 text-black'>
        <PiMountainsBold size={20} className='text-yellow'/>
        <div className='text-3xl tracking-wide'>Our Services</div>
        <p className='text-sm'>What we have to offer</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='service'>
              <MdFastfood size={50} className='text-lightGreen'/>
              <h3 className='text-xl'>Food and Drinks</h3>
              <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
          </div>
          <div className='service'>
              <FaHotel size={50} className='text-lightGreen'/>
              <h3 className='text-xl'> Affordable Hotels</h3>
              <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
          </div>
          <div className='service'>
              <BsFillMegaphoneFill size={50} className='text-lightGreen'/>
              <h3 className='text-xl'>Best Guides</h3>
              <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
          </div>
          <div className='service'>
              <BiWorld size={50} className='text-lightGreen'/>
              <h3 className='text-xl'>Around the Globe</h3>
              <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
          </div>
          <div className='service'>
              <FaPlaneDeparture size={50} className='text-lightGreen'/>
              <h3 className='text-xl'>Fastest Travel</h3>
              <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
          </div>
          <div className='service'>
              <FaPersonHiking size={50} className='text-lightGreen'/>
              <h3 className='text-xl'>Adventure</h3>
              <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
          </div>
          </div>
    </div>
  )
}
