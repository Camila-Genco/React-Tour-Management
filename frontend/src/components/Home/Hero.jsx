import React from 'react'
import {SearchTour} from "./SearchTour.jsx"

export const Hero = () => {
  return (
    <section className='h-full max-h-[640px] m-8 bg-darkGreen py-4 pl-4 rounded shadow-md text-white'>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col md:text-left flex-1 justify-center items-start ml-[100px]'>
          <span className='p-2 text-xs rounded bg-yellow text-white'>Travel with Us</span>
          <h2 className='text-5xl mb-4 mt-3'>Where Would You <br/><span className='text-yellow'>Like to Go?</span></h2>
          <p className='max-w-[480px] font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque adipisci assumenda, voluptates vitae, quas hic.</p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg" alt="" className='img'/>
      </div>
      </div>
      <SearchTour/>
    </section>
  )
}
