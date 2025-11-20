import React from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Title';

const Ot = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-cover bg-center"
        loading="lazy" style={{ backgroundImage: `url(${assets.otbanner_img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Text */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Occupational Therapy
          </h1>
          
        </div>
      </div>

      {/* Title */}
      <div className="text-center text-xl sm:text-2xl md:text-3xl font-semibold pt-8 sm:pt-10">
        <Title text1={'OCCUPATIONAL'} text2={" THERAPY"} />
      </div>

      {/* Content Section */}
      <div className="my-8 sm:my-12 flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-16">
        {/* Image */}
        <img
          className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src={assets.ot_img}
          loading="lazy"
          alt="About Pediatric OT"
        />

        {/* Text */}
        <div className="flex flex-col justify-center gap-4 sm:gap-6 md:w-2/4 text-gray-600">
          <p className="text-gray-700 font-medium max-w-3xl">
  Our <span className="font-semibold text-[#2c3e50]">occupational therapy sessions</span> are designed 
  to enhance a child’s ability to perform daily activities independently.  
  <br /><br />

  We work on developing <span className="italic">fine motor skills</span> (like writing and cutting), 
  <span className="italic"> gross motor skills</span> (like jumping and coordination), sensory integration, 
  and self-care routines such as dressing, brushing, and feeding.  
  <br /><br />

  Through <span className="font-semibold text-[#16a085]">play-based</span> and goal-oriented sessions, 
  we help children gain better control of their bodies, improve focus, and become more confident in 
  everyday tasks both at home and in school.  
</p>

        </div>
      </div>
    </div>
  );
};

export default Ot;
