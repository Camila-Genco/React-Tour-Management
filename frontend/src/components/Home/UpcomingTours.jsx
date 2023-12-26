import React from 'react'
import img1 from "./../../assets/images/tour-img07.jpg"
import img2 from "./../../assets/images/tour-img03.jpg"
import img3 from "./../../assets/images/tour-img04.jpg"


export const UpcomingTours = () => {
  return (
    <div className='max-w-[1620px] mt-[120px] lg:mt-[50px] pt-6 flex flex-col items-center justify-center'>
      <div className='bg-gradient-to-t from-lightGreen to-white w-full h-full grid grid-cols-1 md:grid-cols-3 pb-12 place-items-center'>
        <div className='md:col-span-1 lg:pl-36'>
            <span className='uppercase text-sm'>Time to explore</span>
            <h2 className='tracking-wide font-bold'>Upcoming Tours</h2>
            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio saepe dignissimos ut sint. Ullam consequuntur voluptatibus laudantium dolores!</p>
            <button className='buttonBlue'>Get Started</button>
        </div>
        <div className='flex gap-2 md:col-span-2 justify-center'>
            <div className='max-w-[250px] h-[350px] object-cover rounded mt-2'>
            <img src={img3} alt="" className='max-w-[250px] h-[350px] object-cover rounded '/>
            </div>            
        <div className='max-w-[250px] h-[350px] object-cover rounded mt-10'>
            <img src={img1} alt="" className='max-w-[250px] h-[350px] object-cover rounded '/>
            </div>
            <div className='max-w-[250px] h-[350px] object-cover rounded mt-16'>
            <img src={img2} alt="" className='max-w-[250px] h-[350px] object-cover rounded '/>
            </div>
        </div>
        </div>
        </div>
  )
}
