import React from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={" US"}/>

      </div>
       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img  className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
      <div className='flex flex-col justify-center items-start gap-6 '>
      <p className='font-semibold text-xl text-gray-600'>Our Clinic</p>
      <p className='text-gray-500'>House No 177, First Floor Back Side  <br />Ashoka Enclave Main, Sector 35<br/>Faridabad, Haryana 121003</p>
      <p className='text-gray-500'>Phn:(+91) 9211394908 <br />unnatitherapycentre@gmail.com</p>
      <p className='font-semibold text-xl text-gray-600'>Careers at Unnati</p>
      <p className='text-gray-500'>learn more about our teams and job openings.</p>
      <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
<a
  href="https://www.instagram.com/unnati_therapycentre/" 
  target="_blank" 
  rel="noopener noreferrer"
>
    
    <img src={assets.insta_icon} alt="" />
  
</a>
      
      </div>
      
      </div>
       <div className='text-center text-2xl pt-10  pb-4'>
      <Title text1={''} text2={"LOCATION"}/>

      </div>
   <div
  style={{
    width: "100%",
    height: "350px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3507.249573285528!2d77.30835917549496!3d28.47202967575276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI4JzE5LjMiTiA3N8KwMTgnMzkuNCJF!5e0!3m2!1sen!2sin!4v1755356271946!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  )
}

export default Contact
