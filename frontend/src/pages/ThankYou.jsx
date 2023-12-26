import React from 'react'
import {BsFillCalendarCheckFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import image from "../assets/images/Successful purchase-cuate.svg"

export const ThankYou = () => {
    const navigate = useNavigate();

  return (
    <section className='w-full custom-height flex items-center justify-center font-light bg-gradient-to-b from-lightGreen to-white'>
          <div className='flex flex-column items-center'>
              <BsFillCalendarCheckFill className='text-darkGreen mb-3' size={30}/>
              <h2>Thank You!</h2>
              <p>Your tour has been succesfully booked.</p>
              <button className='buttonBlue rounded-full' onClick={()=> navigate("/home")}>Back to Home</button>
          </div>
    </section>

    
  )
}
