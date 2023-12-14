import React from 'react'
import image from "../../assets/images/Social media-cuate (1).svg"

export const Contact = () => {
  return (
    <section className='max-w-[1640] m-auto px-10 py-12 bg-darkGreen flex justify-around'>
        <div className='flex flex-row md:flex-col items-center '>
        <div className='w-full'>
            <h2 className='tracking-wide text-white'>Don't Miss Our Latest Offers!</h2>
            <div className='min-w-[320px] max-w-[500px] flex justify-between p-2 mt-3 bg-white rounded'>
                <input type="text" name="" id="" placeholder='Enter your email' className='text-sm' />
                <button className='rounded text-white bg-yellow hover:bg-brown text-sm'>Subscribe</button>
            </div>
            <p className='mt-3 text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Temporibus quae facere atque aut repellendus illo dolores doloribus odit, dolore id.</p>
        </div>
        </div>
        <img src={image} alt="" className='hidden md:block md:w-[450px] '/>
        
    </section>

  )
}
