import React from 'react'
import { Hero } from '../components/Home/Hero'
import { ToursItems } from '../components/Home/ToursItems'
import { SearchTour } from '../components/Home/SearchTour'
import { Contact } from '../components/Home/Contact'
import { Comments } from '../components/Home/Comments'
import { Services } from '../components/Home/Services'

export const Home = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <ToursItems/>
    <Comments/>
    <Contact/>
    </>
  )
}
