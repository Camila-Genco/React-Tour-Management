import React from 'react'
import img1 from "./../../assets/images/tour-img07.jpg"
import img2 from "./../../assets/images/tour-img03.jpg"
import img3 from "./../../assets/images/tour-img04.jpg"

import { GiMountaintop } from "react-icons/gi";

export const UpcomingTours = () => {
  return (
    <div className='max-w-[1620px] mt-[120px] lg:mt-[50px] pt-6 flex flex-col items-center justify-center'>
      <div className='bg-gradient-to-t from-lightGreen to-white w-full h-full grid grid-cols-1 lg:grid-cols-3 pb-12 place-items-center'>
        <div className='md:col-span-1 p-4 lg:ml-36 lg:pr-0 lg:pb-0 lg:pt-0 '>
            <span className='uppercase text-sm'>Time to explore</span>
            <h2 className='tracking-wide font-bold'>Upcoming Tours</h2>
            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio saepe dignissimos ut sint. Ullam consequuntur voluptatibus laudantium dolores!</p>
            <button className='buttonBlue'>Get Started</button>
        </div>
        <div className='flex gap-2 md:col-span-2 justify-center flex-wrap'>
            <div className='max-w-[250px] h-[350px] object-cover rounded lg:mt-2 image relative '>
            <img src={img3} alt="" className='max-w-[250px] h-[350px] object-cover rounded '/>
            <div className="overlay hidden rounded absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white items-start justify-start p-4 transition-opacity duration-300">
            <div className="text-start">
              <h3 className="text-lg font-bold">Rural Retreats</h3>
              <p className="text-sm">Discover Untouched Heights and Fresh Air</p>
            </div>
          </div>
            </div>            
        <div className='max-w-[250px] h-[350px] object-cover rounded lg:mt-10 image relative'>
            <img src={img1} alt="" className='max-w-[250px] h-[350px] object-cover rounded '/>
            <div className="overlay hidden rounded absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white items-start justify-start p-4 transition-opacity duration-300">
            <div className="text-start">              
              <h3 className="text-lg font-bold">City Buzz & Beyond</h3>
              <p className="text-sm">Urban Getaways Infused with Energy and Style</p>
            </div>
          </div>
            </div>
            <div className='max-w-[250px] h-[350px] object-cover rounded lg:mt-16 image relative'>
            <img src={img2} alt="" className='max-w-[250px] h-[350px] object-cover rounded '/>
            <div className="overlay hidden rounded absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white items-start justify-start p-3 transition-opacity duration-300">
            <div className="text-start">
              <h3 className="text-lg font-bold">Alpine Escapes</h3>
              <p className="text-sm">Rustic Beauty Beckons in Countryside Hideaways</p>
            </div>
          </div>
            </div>
        </div>
        </div>
        </div>
  )
}
