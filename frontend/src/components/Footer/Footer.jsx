import React from 'react'
import {BsFacebook, BsInstagram, BsGithub} from "react-icons/bs"

export const Footer = () => {
  return (
    <footer>
        <div className="p-10 bg-[#092635] text-white text-sm buttom-0 font-light">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="mb-4">
                        <h4>Company</h4>
                        Buenos Aires, Argentina <br/>
                        <strong>Phone: </strong>11-44362933 <br/>
                        <strong>Email: </strong> gencocamila@gmail.com
                    </div>
                    <div className="mb-2">
                    <h4>Discover</h4>
                        <div>Home</div>
                        <div>About</div>
                        <div>Tours</div>
                    </div>
                    <div className="mb-2">
                    <h4>Quick Links</h4>
                        <div>Login</div>
                        <div>Register</div>
                    </div>
                    <div className='mb-2'>
                        <h4>Contact Us</h4>
                        <div className='flex flex-col gap-1'>
                        <BsFacebook className='w-5 h-6 cursor-pointer'/>
                        <BsInstagram className='w-5 h-6 cursor-pointer'/>
                        <BsGithub className='w-5 h-6 cursor-pointer'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full text-xs px-10 bg-[#092635] text-white'>
            <div className='max-2-7xl flex flex-col cm:flex-row'>
                    <div className='text-center font-light'>Copyright 2023; Online illustrations by <a href="https://storyset.com/online">Storyset</a></div>
                    
            </div>
        </div>
    </footer>
  )
}
