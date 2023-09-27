import React from 'react'
import Testimonials from '../component/Testimonial'
import WhatweDo from '../component/WhatweDo'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'



const About = () => {
  return (
    <>
   <Navbar/>
    <h1 className='flex justify-center font-mono mt-10 text-2xl font-black'>ABOUT US</h1>
    <WhatweDo/>
   <Testimonials/>

   <div className='mt-10 p-10 bg-red'>
    <h1 className='flex justify-center text-2xl font-black'>WHY SkillBanao.com</h1>
    <p className='flex justify-center p-20 font-opensans font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </div>
  
 <Footer/>
    </>
    )
}

export default About