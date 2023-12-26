import {React, useRef} from 'react'
import {FaLocationArrow} from "react-icons/fa"
import {RiPinDistanceFill} from "react-icons/ri"
import {BsFillPeopleFill, BsSearch} from "react-icons/bs"
import { BASE_URL } from '../../utils/config'
import { useNavigate } from 'react-router-dom'

export const SearchTour = () => {
    const locationRef= useRef("");
    const distanceRef= useRef(0);
    const groupSizeRef= useRef(0);
    const navigate = useNavigate()

    const searchHandler = async() =>{
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const groupSize = groupSizeRef.current.value;

        if(location === "" || distance === "" || groupSize === ""){
            return alert("Debe completar todos los campos")
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${groupSize}`)
        
        if(!res.ok) alert("Something went wrong")

        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${groupSize}`, {state:result.data})
    }

  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 lg:-top-4 bg-white/20 shadow-2xl backdrop-blur rounded-lg text-white'>
                <div className='flex flex-col border-2  rounded'>
                    <div className='p-2 px-3 flex gap-3'>
                        <FaLocationArrow className='  w-[15px] self-center'/>
                        <div className='flex flex-col'>
                        <label>Location</label>
                        <input type="text" placeholder='Where are you going?' ref={locationRef} className='outline-none text-sm bg-transparent' />
                        </div>
                    </div>
                </div>
        
        <div className='flex flex-col rounded border-2'>
            <div className='p-2 px-3 flex gap-3'>
                    <RiPinDistanceFill className='self-center w-[15px]'/>
                     <div className='flex flex-col'>
                        <label>Distance</label>
                        <input type="text" placeholder='Distance in km' ref={locationRef} className='outline-none text-sm bg-transparent' />
                    </div>
        </div>
        </div>
        <div className='flex flex-col border-2  rounded'>
            <div className='p-2 px-3 flex gap-3'>
                    <BsFillPeopleFill className='self-center  w-[15px]'/>
                    <div className='flex flex-col'>
                        <label>Number of people</label>
                        <input type="number" placeholder='0' ref={locationRef} className='outline-none text-sm bg-transparent' />
                    </div>
            </div>
        </div>
        <button className='rounded w-full lg:max-w-[162px] h-10 flex justify-center items-center bg-blue-800' onClick={searchHandler}><BsSearch className='text-white'/></button>
    </div>
  )
}
