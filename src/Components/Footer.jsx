import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm'>
            <div>
               <NavLink to='/'><img src={assets.logo} className='mb-5 w-32' alt="" /></NavLink> 
           <p className='w-full md:w-2/3 text-gray-600'>House  No 177, First Floor Back Side, Ashoka Enclave Main, Sector 35, Faridabad, Haryana 121003 </p>
            </div>
      <div>

        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
        <NavLink to='/' className='cursor-pointer'><li>Home</li></NavLink>
       <NavLink to='/about' className='cursor-pointer'><li>About us</li></NavLink> 
        <NavLink to='/services' className='cursor-pointer'><li>Services</li></NavLink>
        <NavLink to='/contact' className='cursor-pointer'><li>Contact</li></NavLink>
        <li className='cursor-pointer'>Privacy Policy</li>
        </ul>
      </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-9211394908</li>
            <li>unnatitherapycentre@gmail.com</li>
            <li><a href="https://www.instagram.com/unnati_therapycentre/" 
  target="_blank" 
  rel="noopener noreferrer"><img src={assets.insta_icon} alt="" /></a></li>
            </ul>
            </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@Unnati.com-All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer