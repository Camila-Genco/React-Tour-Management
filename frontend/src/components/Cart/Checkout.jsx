import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BsFillStarFill } from 'react-icons/bs'

import { BASE_URL } from '../../utils/config'
import {AuthContext} from "../../context/AuthContext"

export const Checkout = ({title, price, reviews, avgRating}) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()    
    
    //Booking data
    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: "",
        phone: "",
        guestSize: 1,
        bookedAt: ""
    })

    const handleChange = e =>{
        setBooking(prev =>({...prev, [e.target.id]:e.target.value}) )
    }

    //Price data
    const serviceFee = 10;
    const totalPrice = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    //Sending booking to DB
    const handleClick = async e =>{
        e.preventDefault();
        try {
          if(!user || user === undefined || user===null){
            return alert("Please sign in")}
            const res = await fetch(`${BASE_URL}/booking`, {
              method: "post",
              headers:{
                "content-type":"application/json"
              },
              credentials:"include",
              body:JSON.stringify(booking)
            })
            const result = await res.json()
            if(!res.ok){
              return alert(result.message)
            }
            navigate("/thank-you");
        } catch (err) {
          alert(err.message)
        }
    }

  return (
    <div id='cart' className='w-full px-3 max-h-[760px] font-light bg-darkGreen text-white shadow-md rounded'>
            <div className='flex justify-between py-4 px-2 text-center border-b-2 border-gray'>
                <h5>${price} /per person</h5>
                <div className='flex items-center'>
                    <BsFillStarFill className='text-yellow'/>
                    <span className='mx-2 text-sm'>{avgRating === 0 ? null : avgRating} ({reviews?.length})</span>
                </div>         
            </div>
            <div className="mx-2 p-2">
                <h4 className='text-lg mt-4'>Your Booking</h4>
                <form onSubmit={(e)=> handleClick} className='grid grid-cols gap-3 rounded checkout'>
                    <label htmlFor="fullName">Name and Surname</label>
                      <input id="fullName" type="text" onChange={handleChange}/>            
                    <label htmlFor="phone">Phone Number</label>
                      <input id="phone" type="text" onChange={handleChange}/>   
                    <label htmlFor="bookedAt">Date</label>           
                      <input id="bookedAt" type="date" onChange={handleChange}/>
                    <label htmlFor="guestSize">Guest Number</label>
                      <input id="guestSize" type="number" name="" onChange={handleChange}/>              
                </form>
                <div className='flex flex-col gap-2 mt-4 resume'>
                    <div>
                        <span>${price} per person</span>
                        <span>$99</span>
                    </div>
                    <div>
                        <span>Service cost</span>
                        <span>${serviceFee}</span>
                    </div>
                    <div className='font-bold'>
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className='self-center'>
                        <button onClick={handleClick} className='submitButton rounded-full px-8'>Book Now</button>
                    </div>
                </div>
            </div>
    </div>
  )
}
