import React from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Title';

const ParentC = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-[200px] md:h-[350px] flex items-center justify-center bg-cover bg-center"
       loading="lazy"
        style={{ backgroundImage: `url(${assets.pcbanner_img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Text */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            PARENT COUNSELING
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center text-xl md:text-2xl pt-8 md:pt-10">
        <Title text1={'PARENT'} text2={' COUNSELING'} />
      </div>

      <div className="my-10 md:my-12 flex flex-col md:flex-row items-center gap-12 md:gap-20 px-4 sm:px-8 md:px-16">
        {/* Image */}
        <img
          className="w-full md:max-w-[420px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src={assets.parentcounselling_img}
          loading="lazy"
          alt="Parent Counseling"
        />

        {/* Text */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          <p className="text-gray-700 font-medium max-w-3xl">
            Parenting a <span className="font-semibold text-[#2c3e50]">child with special needs</span> can sometimes feel 
            overwhelming — but <span className="font-semibold">you don’t have to do it alone</span>.  
            <br /><br />
            Through our <span className="font-semibold text-[#16a085]">counseling sessions</span>, we empower parents with 
            <span className="italic"> practical strategies</span>, <span className="italic">emotional support</span>, and 
            <span className="italic">guidance</span> to better understand their child’s unique challenges.  
            <br /><br />
            We focus on <span className="font-semibold">building strong parent–child connections</span>, 
            <span className="font-semibold">reducing stress</span>, and 
            <span className="font-semibold"> creating positive routines at home</span>.  
            
            Our approach helps parents feel <span className="font-semibold text-[#16a085]">confident</span> in handling 
            behavioral, emotional, and developmental concerns. By working together, we ensure that parents become 
            <span className="font-semibold"> active partners</span> in their child’s therapy journey.  
            <br /><br />
            With the right support, <span className="font-semibold text-[#16a085]">families grow stronger, more resilient, and more hopeful</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ParentC
