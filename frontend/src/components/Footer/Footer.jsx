import React from 'react'
import {BsFacebook, BsInstagram, BsGithub} from "react-icons/bs"
import { FaRegPaperPlane } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
        <div className="p-10 bg-darkGreen text-white text-sm buttom-0 font-light">
            <div className="px-5 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-3">
                    <div className="mb-4 px-2">
                        <div className='flex  gap-2  mb-3'>
                        <FaRegPaperPlane className='text-2xl'/>
                        <h1 className='text-2xl'>WANDERWAYS</h1>
                        </div>
                        <p className='text-gray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at alias quod aliquid!</p>
                        <div className='flex flex-start gap-12 pt-3'>
                        <BsFacebook className='w-5 h-6 cursor-pointer'/>
                        <BsInstagram className='w-5 h-6 cursor-pointer'/>
                        <BsGithub className='w-5 h-6 cursor-pointer'/>
                        </div>
                    </div>
                    <div className="mb-2 items-start">
                    <h6>Discover</h6>
                        <div>Home</div>
                        <div>About</div>
                        <div>Tours</div>
                    </div>
                    <div className="mb-2">
                    <h6>Support</h6>
                        <div>FAQ</div>
                        <div>Features</div>
                        <div>Contact</div>
                        <div>Reporting</div>
                    </div>
                    <div className='mb-2'>
                        <h6>Contact Us</h6>
                        <div>+000 00000000</div>
                        <div>mail@mail.com</div>                     
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full text-xs text-white bg-darkGreen'>
            <div className='max-2-7xl flex flex-col md:flex-row justify-between'>
                    <div className='text-center font-light'>Copyright 2023;</div>
                    
            </div>
        </div>
    </footer>
  )
}
