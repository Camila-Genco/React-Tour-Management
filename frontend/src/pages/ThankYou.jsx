import React from 'react'
import {BsFillCalendarCheckFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import image from "../assets/images/Successful purchase-cuate.svg"

export const ThankYou = () => {
    const navigate = useNavigate();

  return (
    <section className='w-full min-h-screen flex justify-center items-start relative pt-40 md:pt-0'>
        <div className='w-[90%] grid md:grid-cols-2 justify-center md:justify-between'>
          <div className='flex flex-column justify-center items-center'>
              <BsFillCalendarCheckFill className='text-yellow mb-3' size={30}/>
              <h2>Thank You!</h2>
              <p>Your tour has been succesfully booked.</p>
              <button className='bg-yellow hover:bg-brown text-white rounded-full px-8 py-2' onClick={()=> navigate("/home")}>Back to Home</button>
          </div>
        <div className='hidden rounded-l-xl md:flex items-center'><img src={image} className="object-contain" alt="" /></div>
        </div>
    </section>
  )
}
