import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const AboutHome = () => {
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
        </div>
    )
}

export default AboutHome
