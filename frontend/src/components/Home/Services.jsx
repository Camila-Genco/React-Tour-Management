import React from 'react'

import { FaHotel, FaPlaneDeparture } from 'react-icons/fa'
import { FaPersonHiking } from "react-icons/fa6";
import { PiMountainsBold } from 'react-icons/pi';

export const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center py-6 bg-lightGreen'> 
        <div className='sectionTitle'>
            <PiMountainsBold size={20} className='text-darkGreen'/>
            <div>Our Services</div>
            <p>What we offer</p>
        </div>
        <div className='serviceContainer'>
            <div className='service'>
                  <FaHotel size={50} className='text-darkGreen'/>
                  <h5>Affordable Hotels</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
            </div>
            <div className='service'>
                  <FaPlaneDeparture size={50} className='text-darkGreen'/>
                  <h5>Fastest Travel</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
            </div>
            <div className='service'>
                  <FaPersonHiking size={50} className='text-darkGreen'/>
                  <h5>Best Guides</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam.</p>
            </div>
        </div>
    </div>
  )
}
