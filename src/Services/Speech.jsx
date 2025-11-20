import React from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Title';

const Speech = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-[250px] md:h-[400px] bg-cover bg-center bg-gray-200"
        loading="lazy"
        style={{ backgroundImage: `url(${assets.speechbanner_img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Banner Text */}
        <div className="relative flex items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            SPEECH & LANGUAGE THERAPY
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center text-xl sm:text-l pt-8 sm:pt-10 px-4">
        <Title text1={'SPEECH'} text2={" THERAPY"} />
      </div>

      <div className="my-10 md:my-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6 md:px-16">
        {/* Image */}
        <img
          className="w-full md:max-w-[420px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src={assets.Speech_therapy_img}
          loading="lazy"
          alt="Speech Therapy"
        />

        {/* Text */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed md:leading-loose font-medium">
            Our <span className="font-semibold text-[#2c3e50]">speech therapy services</span> support children who face challenges in 
            <span className="italic"> speech clarity</span>, 
            <span className="italic"> language comprehension</span>, 
            <span className="italic"> expression</span>, 
            <span className="italic"> social communication</span>, 
            <span className="italic"> stammering</span>, and 
            <span className="italic"> feeding</span>.
            <br /><br />
            Whether a child has difficulty forming sounds or struggles to express thoughts, our 
            <span className="font-semibold text-[#16a085]"> speech-language pathologists</span> create engaging, personalized interventions to improve both 
            <span className="font-semibold"> verbal</span> and 
            <span className="font-semibold"> non-verbal communication</span>.
            <br /><br />
            We also work on <span className="italic">receptive</span> and 
            <span className="italic"> expressive language skills</span> to build stronger connections with others and 
            <span className="font-semibold text-[#16a085]"> boost overall confidence</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Speech
