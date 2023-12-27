import React from 'react'
import {SearchTour} from "./SearchTour.jsx"

export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-[20px] pt-2'>
      <div className='max-h-[500px] relative'>
          <div className='heroOverlay'>
              <span className='text-gray'>Travel with Us</span>
              <h1>Find And Book<br/>A Great Experience</h1>
              <div className='pt-16'>
                <SearchTour/>
              </div>
          </div>
          <img className='heroImg' src="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hero'/>
      </div>   
    </div>
  )
}
