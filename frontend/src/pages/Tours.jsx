import React from 'react'
import { SearchTour } from '../components/Home/SearchTour'
import { Items } from '../../src/components/Home/Items'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'


export const Tours = () => {
  const {data: tours, loading, error} = useFetch(`${BASE_URL}/tours`)

  return (
      <section className='max-w-[1640] min-h-screen m-auto px-4 py-12'>
      <SearchTour/>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
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