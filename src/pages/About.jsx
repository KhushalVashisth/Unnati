import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import VisionMissionValues from './VisionMissionValues'
const About = () => {
  return (
<div className="bg-white">
            {/* Title Section */}
            <div className='text-3xl text-center pt-10 border-t border-gray-200'>
                <Title text1={'ABOUT'} text2={' US'} />
            </div>

            {/* Content Section */}
            <div className='my-12 flex flex-col md:flex-row items-center gap-28 px-6 md:px-16'>
                {/* Left Image */}
                <img
                    className='w-full md:max-w-[420px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                    src={assets.AboutOt_img}
                    alt="About Pediatric OT"
                />

                {/* Right Content */}
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-m leading-relaxed'>
                    <p className='text-gray-700 text-m font-medium'>
                        At our Pediatric Occupational Therapy Clinic, we believe that every child deserves the chance to thrive — in their own way, at their own pace.
                    </p>

                    <div className="space-y-5">
                        <p>
                            <span className='text-gray-800 font-semibold flex items-center gap-2'>
                                ✅ Child-Focused Care
                            </span>
                            We understand that no two children are the same. Our therapy plans are carefully designed around each child’s unique strengths, needs, and goals, ensuring meaningful progress in a supportive and engaging environment.
                        </p>

                        <p>
                            <span className='text-gray-800 font-semibold flex items-center gap-2'>
                                ✅ Playful, Research-Driven Approach
                            </span>
                            Children learn best through play. We combine evidence-based techniques with fun, hands-on activities to promote development while making therapy enjoyable and stress-free.
                        </p>

                        <p>
                            <span className='text-gray-800 font-semibold flex items-center gap-2'>
                                ✅ Individualized Therapy Plans
                            </span>
                            From motor skills to sensory processing, every therapy session is customized to suit your child’s developmental journey — helping them grow with confidence and independence.
                        </p>

                        <p>
                            <span className='text-gray-800 font-semibold flex items-center gap-2'>
                                ✅ Experienced & Caring Professionals
                            </span>
                            Our team of licensed pediatric occupational therapists brings both expertise and heart to every session. We’re passionate about helping children reach their fullest potential in a nurturing and respectful space.
                        </p>
                        
                    </div>
                </div>

            </div>
            <div>
               <div className='text-3xl text-center pt-10 border-t border-gray-200'>
                <Title text1={'WHY'} text2={' CHOOSE US'} />
            </div> 
            <p className='pb-4 pt-4'>
                Choosing the right therapy center for your child is a deeply personal and important decision. At our Pediatric Therapy Clinic, we understand the trust you place in us, and we honor it with compassion, expertise, and dedication. Here’s why families choose us — and why we might be the perfect fit for yours.

            </p>
         <div className="space-y-5">
                    
                        <p>
                            <span className='text-gray-800 font-semibold flex items-center gap-2'>
                                🌟 Multidisciplinary Team
                            </span>
                            Our team includes experienced occupational therapists, speech-language pathologists, special educators, ABA therapists, and early intervention specialists who work collaboratively to offer holistic care. This ensures your child receives well-rounded support under one roof.

                        </p>

                        

                        <p>
                            <span className='text-gray-800 font-semibold flex items-center gap-2'>
                                🌟 Family Involvement
                            </span>
                            Parents and caregivers are essential partners in a child’s progress. We involve families at every step — offering guidance, regular feedback, and home programs to ensure skills carry over beyond the clinic.
                        </p>
                         <p>
                            <span className='text-gray-800 font-semibold flex items-center gap-2'>
                                🌟 Safe, Warm, and Welcoming Environment
                            </span>
                            Our clinic is designed to be a safe and joyful space where children feel comfortable and motivated to participate. From our colorful therapy rooms to our friendly staff, we strive to make every visit a positive experience.

                        </p>
                         <p>
                            <span className='text-gray-800 font-semibold flex items-center gap-2'>
                                🌟 Focus on Real-Life Skills
                            </span>
                            Whether it’s tying shoelaces, eating independently, or participating in the classroom, our goal is to equip children with practical, everyday skills that improve their quality of life and boost their confidence.

                        </p>
                         <p>
                            <span className='text-gray-800 font-semibold flex items-center gap-2'>
                                🌟 Consistent Progress Monitoring
                            </span>
                            We regularly assess and track each child’s progress to ensure they are meeting their goals. Therapy plans are adjusted based on the child’s development and growth, ensuring continued success. 
                        </p>
                    </div>
            </div>
      <VisionMissionValues/>
        </div>
  )
}

export default About
