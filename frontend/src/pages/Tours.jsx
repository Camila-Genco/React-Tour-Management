import React from 'react'

import { SearchTour } from '../components/Home/SearchTour'
import { Items } from '../../src/components/Home/Items'
import { BASE_URL } from '../utils/config'
import useFetch from '../hooks/useFetch'


export const Tours = () => {
  const {data: tours, loading, error} = useFetch(`${BASE_URL}/tours`)

  return (
    <section className='max-w-[100vw] min-h-screen'>
        {/*Heading*/}
        <div className='h-screen lg:max-h-[400px] relative mb-6'>
            <div className='tourOverlay'>
                <h2 className='text-white text-center'>Search Your <br/>Next Destination</h2>
                <div className='pt-3'>
                    <SearchTour/>
                </div>
            </div>
            <img className='tourImg' src="https://images.unsplash.com/photo-1466278313810-9aca9abea861?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hero'/>
        </div>

        {/*Tour Display*/}
        <div className='px-4'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}.</p>}
        </div>
        {
            !loading && !error &&
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {tours?.map((item, index) => (
                    <Items key={index} photo={item.photo} title={item.title} city={item.city} price={item.price} id={item._id}/>
                ))}
            </div>
        }
    </section>      
  )
}