import React from 'react'
import { Items } from './Items'
import { BASE_URL } from '../../utils/config.js'
import useFetch from '../../hooks/useFetch'
import { PiMountainsBold } from "react-icons/pi";

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
    <section className='max-w-[1640] px-4 py-12 mb-10 text-sm rounded mx-8'>
        <div className='flex flex-col items-center mb-7'>
        <PiMountainsBold size={20} className='text-darkGreen'/>
        <div className='text-3xl tracking-wide font-bold'>Our Tours</div>
        <p className='text-black uppercase'>Find your next destination</p>
        </div>
        {/*{
          loading && <h4>Loading...</h4>
        }
        {
          error && <h4>{error}</h4>
        }*/}
        {!loading && !error && <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {Tours?.map(tour => (
                <Items key={tour._id} photo={tour.photo} title={tour.title} city={tour.city} price={tour.price} id={tour._id} />
            ))}
        </div>}
    </section>
  )
}
