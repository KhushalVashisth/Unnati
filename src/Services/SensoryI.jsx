import React from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Title';

const SensoryI = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center"
        loading="lazy" style={{ backgroundImage: `url(${assets.sibanner_img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Text */}
        <div className="relative flex items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">SENSORY INTEGRATION</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center text-2xl pt-10">
        <Title text1={'SENSORY'} text2={' INTEGRATION'} />
      </div>

      <div className="my-12 flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6 md:px-16">
        {/* Image */}
        <img
          className="w-full md:max-w-[420px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src={assets.sensoryintegration_img}
          loading="lazy"
          alt="About Sensory Integration"
        />

        {/* Text */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose font-medium">
            Some children may be <span className="italic">over-</span> or <span className="italic">under-responsive</span> to everyday 
            <span className="font-semibold text-[#2c3e50]"> sensory experiences</span> such as 
            <span className="italic"> sounds</span>, 
            <span className="italic"> textures</span>, 
            <span className="italic"> movement</span>, or 
            <span className="italic"> light</span>.
            <br />
            <span className="font-semibold text-[#16a085]">Sensory integration therapy</span> helps children process and respond appropriately to sensory input. Using a playful and structured approach, we create activities that 
            <span className="font-semibold"> stimulate</span> and 
            <span className="font-semibold"> challenge the senses</span> in a safe environment.
            <br/>
            These activities improve the child’s ability to 
            <span className="italic"> focus</span>, 
            <span className="italic"> stay calm</span>, 
            <span className="italic"> manage transitions</span>, and 
            <span className="italic"> engage more successfully</span> in everyday routines at home and school.
            
            By supporting <span className="font-semibold text-[#2c3e50]">sensory regulation</span>, we promote 
            <span className="font-semibold text-[#16a085]"> better behavior</span>, 
            <span className="font-semibold text-[#16a085]"> emotional balance</span>, and 
            <span className="font-semibold text-[#16a085]"> readiness to learn</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SensoryI
