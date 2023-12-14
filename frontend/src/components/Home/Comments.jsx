import React from 'react'
import { FaStar } from 'react-icons/fa'
import { PiMountainsBold } from 'react-icons/pi'

export const Comments = () => {
  return (
    <div className='w-full mx-auto p-4 text-sm mb-7 '>
        <div className='flex flex-col items-center mb-[90px]'>
            <PiMountainsBold size={20} className='text-yellow'/>
            <div className='text-3xl tracking-wide'>Customer Reviews</div>
            <p >What our customers said about us</p>
        </div>
        <div className='grid grid-cols-1 gap-20 md:gap-0 md:grid-cols-3 place-items-center'>
            <div className='comment'>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="" className='commentImg border-white border-4 mt-[-70px] ml-[80px] object-cover'/>
                <div className='flex flex-col items-center justify-end my-3'>
                        <span className='font-bold '>John Doe</span>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex text-yellow'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                </div>
            </div>
            <div className='comment'>
                <img src="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg" alt="" className='commentImg border-white  border-4 mt-[-70px] ml-[80px]' />
                <div className='flex flex-col items-center justify-end my-3'>
                        <span className='font-bold '>John Doe</span>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex text-yellow'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                </div>
            </div>
            <div className='comment'>
                <img src="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg" alt="" className='commentImg border-white  border-4 mt-[-70px] ml-[80px] object-cover' />
                <div className='flex flex-col items-center justify-end my-3'>
                        <span className='font-bold '>John Doe</span>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex text-yellow'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
