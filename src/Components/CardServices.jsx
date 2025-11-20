import React from 'react'
import Title from './Title'
import { NavLink } from 'react-router-dom'
import { useServices } from '../context/ServicesContext'

const CardServices = () => {
    const { Servicesdata } = useServices();

    return (
        <div className='my-10'>
            {/* Heading */}
            <div className='text-center py-8 text-3xl'>
                <Title text1={'SERVICES'} text2={' PROVIDED'} />
                
            </div>

            {/* Cards Grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10'>
                {Servicesdata.map((item) => (
                    <div
                        key={item.id}
                        className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 flex flex-col'
                    >
                        {/* Image with hover zoom */}
                        <div className='overflow-hidden'>
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-60 object-contain transform hover:scale-105 transition-transform duration-500 ease-in-out bg-white" 
                            />
                        </div>

                        {/* Card Content */}
                        <div className='p-4 flex flex-col flex-grow justify-between'>
                            <div>
                                <h2 className='text-lg font-bold text-green-900'>
                                    {item.title}
                                </h2>
                                <p className='text-sm text-gray-700 mt-2'>
                                    {item.description}
                                </p>
                            </div>

                            {/* Button always at bottom */}
                            <NavLink to={`/services/${item.path}`}>
                            <button className='mt-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 group w-max'>
                                <span>Read More</span>
                                <span className='text-lg transform group-hover:translate-x-1 transition-transform duration-300'>
                                    →
                                </span>
                            </button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardServices
