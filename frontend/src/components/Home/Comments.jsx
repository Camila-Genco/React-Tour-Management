import React from 'react'

import { FaStar } from 'react-icons/fa'
import { PiMountainsBold } from 'react-icons/pi'
import { RiDoubleQuotesR } from 'react-icons/ri'

import customer1 from "../../assets/images/customer1.jpg"
import customer2 from "../../assets/images/customer2.jpg"
import customer3 from "../../assets/images/customer3.jpg"

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
                <img src={customer1} alt="customer" className='commentImg'/>
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
                <img src={customer2} alt="customer" className='commentImg'/>
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
                <img src={customer3} alt="customer" className='commentImg'/>
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
