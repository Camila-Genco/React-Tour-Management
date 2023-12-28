import React, { useState, useContext } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaRegBell, FaRegPaperPlane, FaTwitter } from "react-icons/fa"

import { AuthContext } from '../../context/AuthContext'

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(false);
  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)

  const handleOpen = () => {
    setOpen(!open);
    setLogo(!logo);
  }

  const logout = ()=>{
    dispatch({type: "LOGOUT"})
    navigate("/")
  }

  return (
    <div className="relative">
        <div className='flex justify-between items-center h-20 px-4'>
            <div className={logo? 'hidden' : 'flex cursor-pointer'}>
                <FaRegPaperPlane className='text-xl mt-1 mr-1'/>
                <h4>WANDERWAYS</h4>
            </div>
            <ul className='hidden md:flex mt-3 navList'>
                <li><NavLink to={"/"} className="nav">Home</NavLink></li>
                <li><NavLink to={"#"} className="nav">About</NavLink></li>
                <li><NavLink to={"/tours"} className="nav">Destinations</NavLink></li>
            </ul>
            <div className='hidden md:flex'>
                {/*<FaRegBell size={20} className='mr-2'/>
                <BsPerson size={20}/>*/}
                <button className='mr-2 buttonWhite'>Login</button>
                <button className='buttonBlue'>Sign Up</button>
            </div>

            <div onClick={handleOpen}
            className='md:hidden z-20 cursor-pointer'>
                {open ? <AiOutlineClose size={20} className='absolute right-6 top-6'/>
                : <AiOutlineMenu size={20}/>}            
            </div>

            {/*Mobile Menu*/}
            <div onClick={handleOpen} className={open ? 'absolute left-0 top-0 w-full bg-lightGreen px-4 py-7 flex flex-col z-10'
            : 'absolute left-[-100%]' }>
            <div className='flex'>
                <FaRegPaperPlane className='text-xl mt-1 mr-1'/>
                <h4>WANDERWAYS</h4>
            </div>
                <ul className='mobileNavList'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Destinations</li>
                    <div className='flex flex-col gap-3 my-4'>
                        <button className='buttonBlue'>Notifications</button>
                        <button className='buttonBlue'>Account</button>
                    </div>
                    <div className='flex justify-between mediaIcons'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaPinterest/>
                        <FaLinkedin/>
                    </div>
                </ul> 
            </div>
        </div>
    </div>
)
}
