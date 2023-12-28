import React from 'react'

import img1 from "./../../assets/images/tour-img07.jpg"
import img2 from "./../../assets/images/tour-img03.jpg"
import img3 from "./../../assets/images/tour-img04.jpg"

export const UpcomingTours = () => {
  return (
    <div className='max-w-[1620px] mt-[120px] lg:mt-[50px] pt-6 flex flex-col items-center justify-center'>
        <div className='gradient grid grid-cols-1 lg:grid-cols-3 pb-12 place-items-center'>
            <div className='md:col-span-1 p-4 lg:ml-36'>
                <span className='uppercase text-sm'>Time to explore</span>
                <h2 className='tracking-wide font-bold'>Upcoming Tours</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio saepe dignissimos ut sint. Ullam consequuntur voluptatibus laudantium dolores!</p>
                <button className='buttonBlue'>Get Started</button>
            </div>
            <div className='flex gap-2 md:col-span-2 justify-center flex-wrap'>
                <div className='promoCard'>
                    <img src={img3} alt="countryside"/>
                    <div className="overlay">
                      <div className="text-start">
                        <h5>Rural Retreats</h5>
                        <p>Discover Untouched Heights and Fresh Air</p>
                      </div>
                    </div>
                </div>            
                <div className='promoCard lg:mt-10'>
                    <img src={img1} alt="city"/>
                    <div className="overlay">
                      <div className="text-start">              
                        <h5>City Buzz & Beyond</h5>
                        <p>Urban Getaways Infused with Energy and Style</p>
                      </div>
                    </div>
                </div>
                <div className='promoCard lg:mt-16'>
                    <img src={img2} alt="mountains"/>
                    <div className="overlay">
                      <div className="text-start">
                        <h5>Alpine Escapes</h5>
                        <p>Rustic Beauty Beckons in Countryside Hideaways</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
