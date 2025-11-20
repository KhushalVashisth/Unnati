import React from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Title'

const SpecialEd = () => {
  return (
    <div>
      {/* Banner Section */}
     <div
  className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] 
           flex items-center justify-center bg-cover bg-right"
loading="lazy"
  style={{ backgroundImage: `url(${assets.specialedbanner_img})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Banner Text */}
  <div className="relative text-center text-white px-4">
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
      SPECIAL EDUCATION
    </h1>
  </div>
</div>

      {/* Content Section */}
      <div className="text-center text-xl sm:text-2xl pt-10">
        <Title text1={'SPECIAL'} text2={' EDUCATION'} />
      </div>

      <div className="my-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 px-4 sm:px-8 md:px-16">
        <img
          className="w-full md:max-w-[420px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src={assets.specialed_img}
          loading="lazy"
          alt="About Special Education"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed md:leading-loose font-medium max-w-3xl">
            We provide{' '}
            <span className="font-semibold text-[#2c3e50]">
              academic and cognitive support
            </span>{' '}
            for children with <span className="italic">learning difficulties</span> and{' '}
            <span className="italic">developmental delays</span>.
            <br />
            <br />
            Our{' '}
            <span className="font-semibold text-[#16a085]">
              special educators
            </span>{' '}
            develop{' '}
            <span className="font-semibold">
              Individualized Education Plans (IEPs)
            </span>{' '}
            tailored to each child’s{' '}
            <span className="italic">abilities</span>,{' '}
            <span className="italic">learning style</span>, and{' '}
            <span className="italic">classroom challenges</span>.
            <br />
            <br />
            Through{' '}
            <span className="font-semibold">focused strategies</span>,{' '}
            <span className="font-semibold">remedial teaching</span>, and{' '}
            <span className="font-semibold">interactive learning tools</span>, we help{' '}
            <span className="italic">bridge academic gaps</span>,{' '}
            <span className="italic">build foundational skills</span>, and foster a{' '}
            <span className="font-semibold text-[#16a085]">
              positive attitude toward learning
            </span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpecialEd
