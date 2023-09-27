import React from 'react'
import LineGradient from './LineGradient'
import Navbar from './Navbar'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 '>
        <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='mt-8 mb-10'>
                <p className='text-4xl font-bold inline border-b-4 text-red '>Contact</p>
                <LineGradient width=" w-2/5 mt-4" />
            </div>
            <input className='bg-black p-2 text-white rounded-xl' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-black text-white rounded-xl' type="email" placeholder='Email' name='email' />
            <textarea className='bg-black p-2 text-white rounded-xl' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white bg-red border-2 rounded-xl hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact