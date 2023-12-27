import React from 'react'
import {BsFacebook, BsInstagram, BsGithub} from "react-icons/bs"
import { FaRegPaperPlane } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
  <div className="pt-10 pb-2 bg-darkGreen text-white text-sm bottom-0 font-light">
    <div className="px-5 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-3 lg:place-items-center">
        <div className="mt-6 mb-6 lg:mb-2 max-w-[300px]">
          <div className='flex items-center gap-2 mb-3'>
            <FaRegPaperPlane className='text-2xl' />
            <h1 className='text-2xl'>WANDERWAYS</h1>
          </div>
          <p className='text-gray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at alias quod aliquid!</p>
          <div className='flex gap-4 pt-3'>
            <BsFacebook className='w-5 h-6 cursor-pointer' />
            <BsInstagram className='w-5 h-6 cursor-pointer' />
            <BsGithub className='w-5 h-6 cursor-pointer' />
          </div>
        </div>
        <div className="mb-6 lg:mb-2 footerLinks">
          <h6>Discover</h6>
          <div>Home</div>
          <div>About</div>
          <div>Tours</div>
          <div>Account</div>
        </div>
        <div className="mb-6 lg:mb-2 footerLinks">
          <h6>Support</h6>
          <div>FAQ</div>
          <div>Features</div>
          <div>Contact</div>
          <div>Reporting</div>
        </div>
        <div className='mb-6 lg:mb-2'>
          <h6>Contact Us</h6>
          <div>+000 00000000</div>
          <div>company@email.com</div>
          <div>County, State</div>
          <div>1100</div>
        </div>   
        </div>
        <div className='flex justify-start mt-8'>

        <div className='font-light text-xs text-gray'>&copy; Copyright 2023; all rights reserved.</div> 
        </div>
    </div>
  </div>
</footer>
  )
}
