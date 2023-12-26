import React from 'react'
import {SearchTour} from "./SearchTour.jsx"

export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-[30px] pt-2'>
      <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full max-h-[500px] bg-black/40 flex flex-col items-center rounded-full pt-20 shadow-lg shadow-black'>
              <span className='text-gray'>Travel with Us</span>
              <h1 className='text-white text-center'>Find And Book <br/>A Great <span className='text-gray-200'>Experience</span></h1>
              <div className='pt-16'>

          <SearchTour/>
              </div>
          </div>
          <img className='w-full max-h-[500px] object-cover rounded-full' src="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hero'/>
      </div>
      {/*<div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col md:text-left flex-1 justify-center items-start ml-[100px]'>
          <span className='p-2 text-xs rounded bg-yellow text-white'>Travel with Us</span>
          <h2 className='text-5xl mb-4 mt-3'>Find and Book a Great <br/><span className='text-yellow'>Experience</span></h2>
          <p className='max-w-[480px] font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque adipisci assumenda, voluptates vitae, quas hic.</p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg" alt="" className='img'/>
      </div>
  </div>*/}
      
    </div>
  )
}
