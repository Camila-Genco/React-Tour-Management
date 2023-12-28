import React, { useContext, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import {BsFillPeopleFill, BsFillStarFill} from "react-icons/bs"
import {MdOutlineAttachMoney} from 'react-icons/md';
import {FaLocationDot} from "react-icons/fa6";
import {CgProfile} from "react-icons/cg"

import { Checkout } from '../components/Cart/Checkout.jsx';
import { BASE_URL } from '../utils/config'
import {AuthContext} from "../context/AuthContext.js"
import useFetch from '../hooks/useFetch'

export const TourDetails = () => {  
  const {id} = useParams()
  const reviewsMsgRef = useRef()
  const {user} = useContext(AuthContext)
  const {data:tour} = useFetch(`${BASE_URL}/tours/${id}`)
  const {title, photo, desc, price, reviews, city, maxGroupSize} = tour
   
  //Date config
  const options = {day: "numeric", month: "long", year:"numeric"}

  //Tour Rating
  const [tourRating, setTourRating] = useState(0)
      
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

  const totalRating = reviews?.reduce((acc,item)=> acc + item.rating, 0)
  
  const avgRating = 
    totalRating === 0
    ? "" 
    : totalRating === 1
    ? totalRating 
    : totalRating / reviews?.length

   //Review in Stars
  const handleRatingClick = (rating) => {
    setTourRating(rating === tourRating ? 0 : rating);
  }; 
  
  return (
    <section className='max-w-[1640px] mx-auto py-4 bg-gradient-to-b from-lightGreen to-white'>
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[63%_37%] gap-3">
        {/*Tour Details*/}
        <div id='product' className='grid grid-cols w-full'>
            {/*Image*/}
            <img src={photo} alt="tour landscape" className='rounded' />
            {/*Description*/}
            <div id='description' className='detailContainer'>
                <h4>{title}</h4>
                <div className='tourDetail mb-2'>
                    <div>
                      <BsFillStarFill className='text-yellow mr-1'/>
                      <span>{avgRating === 0 ? null : avgRating} ({reviews?.length})</span>
                    </div>
                </div>
                <div className='tourDetail'>
                    <div>
                        <FaLocationDot className='text-darkGreen mr-1'/>
                        <span>{city}</span>
                    </div>
                    <div>
                        <MdOutlineAttachMoney className='text-darkGreen'/>
                        <span>{price} per person</span>
                    </div>
                    <div>
                        <BsFillPeopleFill className='text-darkGreen mr-1'/>
                        <span>{maxGroupSize} people</span>
                    </div>
                </div>
                <div className='mt-3'>
                    <h5>Description</h5>
                    <p className='text-sm'>{desc}</p>
                </div>
            </div>

          {/*Review Section*/}            
          <div id='comments' className='detailContainer'>
              <div className='flex items-center gap-2'>
                  <h5>Reviews</h5>
                  <span className='text-sm'>({reviews?.length} reviews)</span>
              </div>
              {/*Review posting*/}
              <div className='flex gap-3 font-light'>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <div
                      key={rating}
                      className={`flex items-center text-yellow cursor-pointer hover:text-orange-700`}
                      onClick={() => handleRatingClick(rating)}
                    >
                    <span>{rating}</span>
                    <BsFillStarFill className={`ml-1 ${
                          rating <= tourRating ? 'text-orange-700' : 'text-yellow'}`}/>
                    </div>
                  ))}
              </div>
              <div className='w-[85%] border-2 border-gray rounded-full p-1 mx-auto my-3'>
                  <form onSubmit={submitHandler} className='flex justify-between w-full'>
                    <input type="text" placeholder='Share your experience' ref={reviewsMsgRef} className='rounded-full text-sm py-2 px-3 w-full text-darkGray font-light'/>
                    <button className='rounded-full self-end buttonBlue'>Send</button>
                  </form>
              </div>
              {/*Tour reviews*/}
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
                          <div className='flex items-center text-yellow'>
                            <span>{review.rating}</span>
                            <BsFillStarFill className='ml-2'/>
                          </div>
                      </div>
                      <p className='mt-2'>{review.reviewText}</p>
                  </div>
                ))}
                </div>
            </div>
          </div>

        {/*Checkout*/}
        <Checkout title={title} price={price} reviews={reviews} avgRating={avgRating}/>
      </div>
    </section>
  )
}
