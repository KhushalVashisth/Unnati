import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141] px-4 sm:px-6 text-center sm:text-left'>
          
          {/* Top Line */}
          <div className='flex items-center gap-2 justify-center sm:justify-start'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>
              YOUR CHILD, OUR FOCUS
            </p>
          </div>

          {/* Heading */}
          <h1 className='prata-regular text-2xl xs:text-3xl sm:py-3 lg:text-4xl leading-snug sm:leading-relaxed mt-4 sm:mt-2'>
            Therapies that Transform
          </h1>

          {/* Bottom Line */}
          <div className='flex items-center gap-2 justify-center sm:justify-start mt-3 sm:mt-4'>
            <p className='font-semibold text-sm md:text-base'>START TODAY</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img
        src={assets.hero_img}
        className='w-full sm:w-1/2 object-cover'
        alt=""
        loading='lazy'
        onLoad={(e) => {
          e.currentTarget.classList.remove("opacity-0", "blur-sm")
        }}
      />
    </div>
  )
}

export default Hero
