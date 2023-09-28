import React from 'react'

import trees from '../assests/login.jpg'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[450px] shadow-lg shadow-gray-600 sm:max-w-[900px] bg-white rounded-2xl'>
            <div className='w-full h-[450px] hidden md:block'>
                <img className='h-full rounded-2xl' src={trees} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>SkillBanao.com</h2>
                    <div className='grid grid-flow-row auto-rows-max' >
                        <input className='border-4 p-2  rounded-md' type="text" placeholder='Name' />
                        <input className='border-4 p-2 rounded-md mt-3' type="password" placeholder='Password' />
                        <input className='border-4 p-2 rounded-md w-auto mt-3' type="text" placeholder='Email' />       
                        <input className='border-4 p-2 rounded-md w-auto mt-3' type="text" placeholder='Phone Number' />
                    </div>
                    <button className='w-full py-2 my-4 bg-blue hover:bg-grey font-extrabold rounded-md'>Sign Up</button>
                    <p className='text-center'>Already Have an Account?
                    <Link to='/Login'><a className='text-red hover:text-blue'>Sign In</a></Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}