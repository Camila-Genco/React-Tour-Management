import React from 'react'
import { FaStar } from 'react-icons/fa'
import { PiMountainsBold } from 'react-icons/pi'
import { RiDoubleQuotesR } from 'react-icons/ri'

export const Comments = () => {
  return (
    <div className='gradient mx-auto pb-6 text-sm'>   
        <div className='sectionTitle'>
            <PiMountainsBold size={20} className='text-darkGreen'/>
            <div>Customer Reviews</div>
            <p>What our customers said about us</p>
        </div>
        <div className='commentSection'>
            <div className='comment'>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="customer" className='commentImg'/>
                <div className='flex flex-col items-center gap-3 my-3'>
                    <div className='commentInfo'>
                        <span>Janette Doe</span>
                        <div>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi odio officia possimus amet corporis ut accusantium quae voluptas facilis sed deserunt asperiores!</p>
                        <RiDoubleQuotesR className='text-darkGreen' size={25}/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg" alt="customer" className='commentImg'/>
                <div className='flex flex-col items-center justify-end my-3 gap-3'>
                    <div className='commentInfo'>
                        <span>John Doe</span>
                        <div>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi odio officia possimus amet corporis ut accusantium quae voluptas facilis sed deserunt asperiores!</p>
                        <RiDoubleQuotesR className='text-darkGreen' size={25}/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg" alt="customer" className='commentImg'/>
                <div className='flex flex-col items-center justify-end my-3 gap-3'>
                    <div className='commentInfo'>
                        <span>Jane Doe</span>
                        <div>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt laboriosam minus!</p>
                        <RiDoubleQuotesR className='text-darkGreen' size={25}/>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}
