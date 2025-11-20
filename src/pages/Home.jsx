import React from 'react'
import Hero from '../Components/Hero'
import CardServices from '../Components/CardServices'
import Testimonials from '../Components/Testimonials'
import AboutHome from '../Components/AboutHome'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutHome/>
      <CardServices/>
      <Testimonials/>
    </div>
  )
}

export default Home
