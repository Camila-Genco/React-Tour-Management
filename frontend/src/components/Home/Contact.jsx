import React from 'react'

export const Contact = () => {
  return (
    <section className='max-w-[1640] m-auto px-10 py-14 bg-lightGreen flex justify-center'>
        <div className='flex flex-row md:flex-col items-center gap-5 '>
        <div className='w-full'>
            <h2 className='tracking-wide'>Don't Miss Our Latest Offers!</h2>
            <div className='min-w-[320px] max-w-[500px] flex justify-between p-2 mt-3 bg-white rounded'>
                <input type="text" name="" id="" placeholder='Enter your email' className='text-sm outline-none px-2' />
                <button className='rounded text-white bg-darkGreen hover:bg-brown text-sm'>Subscribe</button>
            </div>
            <p className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Temporibus quae facere atque aut repellendus illo dolores doloribus odit, dolore id.</p>
        </div>
        </div>
        
    </section>

  )
}
