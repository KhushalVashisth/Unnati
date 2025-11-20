import React from 'react'
import { assets } from '../assets/assets';
import Title from '../Components/Title';

const Aba = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-cover bg-center"
        loading="lazy" style={{ backgroundImage: `url(${assets.ababanner_img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Text */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            ABA Therapy
          </h1>
         
        </div>
      </div>

      {/* Title */}
      <div className="text-center text-xl sm:text-2xl md:text-3xl font-semibold pt-8 sm:pt-10">
        <Title text1={'ABA'} text2={" THERAPY"} />
      </div>

      {/* Content Section */}
      <div className="my-8 sm:my-12 flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-16">
        {/* Image */}
        <img
          className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src={assets.aba_img}
          loading="lazy"
          alt="About ABA Therapy"
        />

        {/* Text */}
        <div className="flex flex-col justify-center gap-4 sm:gap-6 md:w-2/4 text-gray-600">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose font-medium max-w-3xl">
            <span className="font-semibold text-[#2c3e50]">ABA</span> is a
            <span className="italic"> scientifically validated approach</span> widely used for children with
            <span className="font-semibold"> Autism Spectrum Disorder (ASD)</span> and other behavioral needs.  
            Our ABA programs focus on <span className="text-[#16a085] font-semibold">increasing positive behaviors </span> 
            and reducing behaviors that interfere with learning and social interaction.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose font-medium max-w-3xl">
            With structured sessions tailored to each child’s goals, we teach 
            <span className="italic"> communication skills</span>, 
            <span className="italic"> social skills</span>, 
            <span className="italic"> self-regulation</span>, and 
            <span className="italic"> daily living skills</span>.  
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose font-medium max-w-3xl">
            The goal is to promote <span className="font-semibold text-[#2c3e50]">independence</span> and improve 
            <span className="font-semibold text-[#16a085]"> quality of life</span> across all environments — 
            <span className="italic"> home, school, and community</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aba;
