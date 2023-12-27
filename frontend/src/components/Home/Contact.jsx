import React from 'react'

export const Contact = () => {
  return (
    <section className='max-w-[1640] flex justify-center px-10 py-14 bg-lightGreen'>        
          <div>
              <h3 className='font-bold'>Don't Miss Our Latest Offers!</h3>
              <div className='min-w-[320px] max-w-[500px] flex justify-between p-2 mt-3 bg-white rounded'>
                  <input type="text" placeholder='Enter your email'/>
                  <button className='buttonBlue'>Subscribe</button>
              </div>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br/> Temporibus quae facere atque aut repellendus illo dolores doloribus odit, dolore id.</p>
          </div>               
    </section>
  )
}
