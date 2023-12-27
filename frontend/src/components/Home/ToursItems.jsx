import React from 'react'

import { PiMountainsBold } from "react-icons/pi";

import { Items } from './Items'
import { BASE_URL } from '../../utils/config.js'
import useFetch from '../../hooks/useFetch'

const Tours = [
{ _id: 1,
  photo: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
  title: "New Zealand",
  city: "Tokyo",
  price: 400
},
{ _id: 2,
  photo: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
  title: "New Zealand",
  city: "Tokyo",
  price: 400
},
{ _id: 3,
  photo: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
  title: "New Zealand",
  city: "Tokyo",
  price: 400
},
{ _id: 4,
  photo: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
  title: "New Zealand",
  city: "Tokyo",
  price: 400
},
{ _id: 5,
  photo: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
  title: "New Zealand",
  city: "Tokyo",
  price: 400
}
]

const loading = false;
const error = false;

export const ToursItems = () => {
  //const {data: tours, loading, error} = useFetch(`${BASE_URL}/tours`)
  
  return (
    <section className='max-w-[1640] px-4 py-12 mx-8 mb-10 text-sm'>
        <div className='sectionTitle'>
            <PiMountainsBold size={20} className='text-darkGreen'/>
            <div>Our Tours</div>
            <p>Find your next destination</p>
        </div>
        <div className='px-4'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}.</p>}
        </div>
        {!loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
            {Tours?.map(tour => (
                <Items key={tour._id} photo={tour.photo} title={tour.title} city={tour.city} price={tour.price} id={tour._id} />
            ))}
        </div>}
    </section>
  )
}
