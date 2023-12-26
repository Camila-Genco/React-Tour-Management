import React, { useContext, useRef, useState } from 'react'
import {BsFillPeopleFill, BsFillStarFill} from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6";
import {CgProfile} from "react-icons/cg"
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import {AuthContext} from "../context/AuthContext.js"
import { MdOutlineAttachMoney } from 'react-icons/md';

export const TourDetails = () => {
  const {user} = useContext(AuthContext)
  const {id} = useParams()
  const {data:tour} = useFetch(`${BASE_URL}/tours/${id}`)
  const {title, photo, desc, price, reviews, city, maxGroupSize} = tour
  const reviewsMsgRef = useRef()
  const [tourRating, setTourRating] = useState(null)
  
  const [userRating, setUserRating] = useState(0); // Initial state is 0 for no rating selected

  const handleRatingClick = (rating) => {
    setUserRating(rating === userRating ? 0 : rating); // Toggle rating if clicked twice
  };

  const navigate = useNavigate()
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookedAt: ""
  })

  const Tour = 
    { _id: 1,
      photo: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
      title: "New Zealand",
      city: "Tokyo",
      price: 400
    }
 

  const handleChange = e =>{
    setBooking(prev =>({...prev, [e.target.id]:e.target.value}) )
  }
  
  const handleClick = async e =>{
    e.preventDefault();
    console.log(booking);
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

  
  const serviceFee = 10;
  const totalPrice = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const totalRating = reviews?.reduce((acc,item)=> acc + item.rating, 0)
  
  const avgRating = 
      totalRating === 0
      ? "" 
      : totalRating === 1
      ? totalRating 
      : totalRating / reviews?.length

  const options = {day: "numeric", month: "long", year:"numeric"}
      
  const submitHandler = async e => {
        e.preventDefault();
        const reviewText = reviewsMsgRef.current.value;

        if(!user || user === undefined || user===null){
          alert("Please sign in")
        }
        try {
          const reviewObj = {
            username: user?.username,
            reviewText, 
            rating: tourRating
          }
          const res = await fetch(`${BASE_URL}/review/${id}`,{
            method: "post",
            headers:{
              "content-type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify(reviewObj)
          })
          const result = await res.json();
          if(!res.ok){
            return alert(result.message);
          } 
          alert("review submitted")
        } catch (err) {
          alert(err.message)
        }
   }

  return (
    <section className='max-w-[1640px] mx-auto py-4 bg-gradient-to-b from-lightGreen to-white '>
      <div className="max-w-[1100px] grid grid-cols-1 md:grid-cols-[63%_37%] mx-auto gap-3">
        <div id='product' className='grid grid-cols w-full'>
          <img src={Tour.photo} alt="" className='rounded' />
          <div id='description' className='border border-gray-400 p-4 mt-4 rounded bg-white font-light shadow-md'>
            <h4>{Tour.title}</h4>
            <div className='flex gap-4 text-sm mb-2'>
              <div className='flex items-center'>
              <BsFillStarFill className='text-yellow mr-1'/>
              <span>{avgRating === 0 ? null : avgRating} ({reviews?.length})</span>
              </div>
            </div>
            <div className='flex gap-4 text-sm'>
              <div className='flex items-center'>
              <FaLocationDot className='text-darkGreen mr-1'/>
              <span>{Tour.city}</span>
              </div>
              <div className='flex items-center'>
              <MdOutlineAttachMoney className='text-darkGreen'/>
              <span>{Tour.price} per person</span>
              </div>
              <div className='flex items-center'>
              <BsFillPeopleFill className='text-darkGreen mr-1'/>
              <span>{maxGroupSize} people</span>
              </div>
            </div>
            <div className='mt-3'>
              <h5>Description</h5>
              <p className='text-sm'>{desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae illo dolore quisquam recusandae itaque laboriosam odio nostrum provident, facilis blanditiis similique harum vitae unde expedita in deserunt consectetur eos.</p>
            </div>
          </div>
          <div id='comments' className='border border-gray-400 mt-4 rounded bg-white p-4 shadow-md'>
            <div className='flex gap-2 items-center'>
            <h5>Reviews</h5>
            <span className='text-sm'>({reviews?.length} reviews)</span>
            </div>
            <div className='flex gap-3 font-light'>
      {[1, 2, 3, 4, 5].map((rating) => (
        <div
          key={rating}
          className={`flex items-center text-yellow cursor-pointer hover:text-orange-700 ${
            rating <= userRating ? 'text-orange-700' : ''
          }`}
          onClick={() => {handleRatingClick(rating); setTourRating(rating)}}
        >
          <span>{rating}</span>
          <BsFillStarFill className='ml-1' color={rating <= userRating ? 'text-orange-700' : 'text-black'} />
        </div>
      ))}
    </div>
            <div className='w-[85%] border-2 border-gray rounded-full p-1 mx-auto my-3'>
              <form action="" onSubmit={submitHandler} className='flex justify-between w-full'>
                <input type="text" placeholder='Share your experience' ref={reviewsMsgRef} className='outline-none rounded-full text-sm py-2 px-3 w-full text-darkGray font-light'/>
                <button className='rounded-full self-end buttonBlue'>Send</button>
              </form>
            </div>
            <div>
              {reviews?.map(review =>(
                <div>
                <div className='flex justify-between text-sm mt-5'>
                <div className='flex'>
                <CgProfile className='w-[40px] h-auto mr-2' />
                <div className='flex flex-col'>
                  <span className='font-bold'>{review.username}</span>
                  <span className='text-gray-400'>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</span>
                </div>
                </div>
                <div className='flex items-center text-yellow-500'>
                  <span>{review.rating}</span>
                  <BsFillStarFill className='ml-2'/>
                </div>
               </div>
               <p className='text-sm mt-2'>{review.reviewText}</p>
               </div>
              ))}
              
            </div>
          </div>
        </div>

        
        <div id='cart' className='w-full rounded px-3 max-h-[760px] bg-darkGreen font-light shadow-md text-white'>
          <div className='flex justify-between py-4 px-2 text-center border-b-2 border-gray'>
          <h3 className='text-lg'>${price} /per person</h3>
          <div className='flex items-center'>
          <BsFillStarFill className='text-yellow'/>
          <span className='mx-2 text-sm'>{avgRating === 0 ? null : avgRating} ({reviews?.length})</span>
          </div>         
          </div>
          <div className="mx-2 p-2">
            <h4 className='text-lg mt-4'>Your Booking</h4>
            <form action="" onSubmit={(e)=> handleClick} className='grid grid-cols gap-3 rounded'>
              <label htmlFor="fullName">Name and Surname</label>
              <input id="fullName" type="text" onChange={handleChange} className='outline-none  bg-lightGreen p-2 rounded text-darkGray px-3'/>            
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="text" onChange={handleChange} className='outline-none  bg-lightGreen p-2 rounded text-darkGray px-3'/>   
              <label htmlFor="bookedAt">Date</label>           
              <input id="bookedAt" type="date" onChange={handleChange} className="outline-none text-sm  bg-lightGreen p-2 rounded text-darkGray px-3"/>
              <label htmlFor="guestSize">Guest Number</label>
              <input id="guestSize" type="number" name="" onChange={handleChange} className='outline-none bg-lightGreen p-2 rounded text-darkGray px-3'/>              
            </form>
            <div className='flex justify-between mx-3 text-md text-gray-400 mt-5'>
              <p>${price} per person</p>
              <span>$99</span>
            </div>
            <div className='flex justify-between mx-3 text-md text-gray-400'>
              <p>Service cost</p>
              <span>${serviceFee}</span>
            </div>
            <div className='flex justify-between mx-3 text-md font-bold'>
              <p className='font-bold'>Total</p>
              <span>${totalPrice}</span>
            </div>
            <div className='flex justify-center pb-3'>
            <button onClick={handleClick} className='rounded-full px-8 buttonWhite hover:bg-white hover:font-bold hover:text-darkGreen'>Book Now</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
