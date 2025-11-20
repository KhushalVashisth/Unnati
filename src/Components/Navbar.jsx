import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    return (
        
        <div className='flex  items-center justify-between py-5  font-medium'>
            
          <Link to="/">
  <img src={logo} alt="Logo" className="w-36 object-contain" />
</Link> 
            <ul className='hidden sm:flex gap-8 text-sm text-gray-700 '>

                <NavLink to='/' className='flex flex-col items-center gap-1 cursor-pointer hover:text-blue-900'>
                    <p>HOME</p>
                    <hr className='w-2/4   border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1 cursor-pointer hover:text-blue-900'>
                    <p>ABOUT US</p>
                    <hr className='w-2/4   border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <div className="relative group cursor-pointer">
                    {/* Services label */}
                    <div className='group-relative'>
                        <NavLink to='/services' className="flex flex-col items-center gap-1 hover:text-blue-900">
                            <p>SERVICES</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                        </NavLink >

                        {/* Dropdown shown on hover */}
                        <div className="group-hover:block hidden absolute dropdown-menu left-0 pt-1.5 z-50">
                            <div className="flex flex-col gap-2 w-40 py-3 px-3 bg-slate-100 text-gray-500 rounded">
                              <NavLink to='/services/ot'><p   className="cursor-pointer hover:text-black">Occupational Therapy</p></NavLink>  
                                <NavLink to='/services/aba'><p  className="cursor-pointer hover:text-black">Applied Behavior Analysis(ABA)</p></NavLink>
                                <NavLink to='/services/speech&language'><p  className="cursor-pointer hover:text-black">Speech & Language Therapy</p></NavLink>
                                <NavLink to='/services/sensoryintegration'><p  className="cursor-pointer hover:text-black">Sensory Integration</p></NavLink>
                                <NavLink to='/services/specialeducation'><p  className="cursor-pointer hover:text-black">Special Education</p></NavLink>
                                <NavLink to='/services/parentcounseling'><p  className="cursor-pointer hover:text-black">Parent Counselling</p></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <NavLink to='/contact' className='flex flex-col items-center gap-1 cursor-pointer hover:text-blue-900'>
                    <p>CONTACT</p>
                    <hr className='w-2/4   border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

            </ul>
           


            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer sm:hidden z-40 relative' />

            {/* backdrop overlay */}
            {visible && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setVisible(false)}
                />
            )}

            {/* sidebar menu for small screens */}
            <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ease-in-out z-50 ${visible ? 'w-full' : 'w-0 overflow-hidden'}`}>
                <div className={`flex flex-col text-gray-600 h-full ${visible ? 'opacity-100' : 'opacity-0'}`}>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink to='/' onClick={() => {setVisible(false); setServicesDropdownOpen(false)}} className='py-2 pl-6 border'>HOME</NavLink>
                    <NavLink to='/about' onClick={() => {setVisible(false); setServicesDropdownOpen(false)}} className='py-2 pl-6 border'>ABOUT US</NavLink>
                   {/* SERVICES with mobile dropdown */}
<div className='border-t'>
  <div
    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
    className='py-2 pl-6 flex justify-between items-center cursor-pointer'
  >
    <span>SERVICES</span>
    <img
      src={assets.dropdown_icon}
      alt="dropdown"
      className={`h-3 transition-transform ${servicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
    />
  </div>

  {servicesDropdownOpen && (
    <div className="flex flex-col gap-2 pl-10 pr-4 pb-4 text-sm text-gray-500">
      <NavLink to='/services/ot' onClick={() => setVisible(false)}>Occupational Therapy</NavLink>
      <NavLink to='/services/aba' onClick={() => setVisible(false)}>Applied Behavior Analysis (ABA)</NavLink>
      <NavLink to='/services/speech&language' onClick={() => setVisible(false)}>Speech & Language Therapy</NavLink>
      <NavLink to='/services/sensoryintegration' onClick={() => setVisible(false)}>Sensory Integration</NavLink>
      <NavLink to='/services/specialeducation' onClick={() => setVisible(false)}>Special Education</NavLink>
      <NavLink to='/services/parentcounseling' onClick={() => setVisible(false)}>Parent Counselling</NavLink>
    </div>
  )}
</div>

                    <NavLink to='/contact' onClick={() => setVisible(false)} className=' py-2 pl-6 border' >CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
