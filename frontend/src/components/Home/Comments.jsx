import React from 'react'
import { FaStar } from 'react-icons/fa'
import { PiMountainsBold } from 'react-icons/pi'
import { RiDoubleQuotesR } from 'react-icons/ri'

export const Comments = () => {
  return (
    <div className='w-full mx-auto pb-6 text-sm bg-gradient-to-t from-lightGreen to-white h-full'>
        
        <div className='flex flex-col items-center mb-10'>
            <PiMountainsBold size={20} className='text-darkGreen'/>
            <div className='text-3xl tracking-wide font-bold'>Customer Reviews</div>
            <p >What our customers said about us</p>
        </div>
        <div className='max-w-[75%] m-auto grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 lg:grid-cols-3 place-items-center text-white'>
            <div className='comment'>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="" className='commentImg object-cover'/>
                <div className='flex flex-col items-center justify-end my-3 gap-3'>
                        <div className='flex flex-col font-light items-center'>
                        <span className='font-bold tracking-wide text-center'>Janette Doe</span>
                        <div className='flex text-yellow text-center'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        </div>
                        <div className='flex flex-col items-center'>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi odio officia possimus amet corporis ut accusantium quae voluptas facilis sed deserunt asperiores!</p>
                        <RiDoubleQuotesR className='text-darkGreen text-center' size={25}/>
                        </div>
                </div>
            </div>
            <div className='comment flex flex-col items-center'>
                <img src="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg" alt="" className='commentImg object-cover'/>
                <div className='flex flex-col items-center justify-end my-3 gap-3'>
                        <div className='flex flex-col font-light items-center'>
                        <span className='font-bold tracking-wide text-center'>Janette Doe</span>
                        <div className='flex text-yellow text-center'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        </div>
                        <div className='flex flex-col items-center'>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi odio officia possimus amet corporis ut accusantium quae voluptas facilis sed deserunt asperiores!</p>
                        <RiDoubleQuotesR className='text-darkGreen text-center' size={25}/>
                        </div>
                </div>
            </div>
            <div className='comment'>
                <img src="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg" alt="" className='commentImg object-cover'/>
                <div className='flex flex-col items-center justify-end my-3 gap-3'>
                        <div className='flex flex-col font-light items-center'>
                        <span className='font-bold tracking-wide text-center'>Janette Doe</span>
                        <div className='flex text-yellow text-center'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        </div>
                        <div className='flex flex-col items-center'>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt laboriosam minus!</p>
                        <RiDoubleQuotesR className='text-darkGreen text-center' size={25}/>
                        </div>
                </div>
            </div>
        </div>
  
    </div>
  )
}
