import React from 'react'

import trees from '../assests/skills-image.png'
import { Link } from 'react-router-dom';
import Signup from './Signup';

export default function Login3() {
  return (
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[450px] shadow-lg shadow-gray-600 sm:max-w-[900px] bg-white rounded-2xl'>
            <div className='w-full h-[450px] hidden md:block'>
                <img className='h-full rounded-2xl' src={trees} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>SkillBanao.com</h2>
                    <div>
                        <input className='border-4 p-2 mr-2 rounded-md' type="text" placeholder='Username' />
                        <input className='border-4 p-2 rounded-md' type="password" placeholder='Password' />
                    </div>
                    <button className='w-full py-2 my-4 bg-blue hover:bg-red font-extrabold rounded-md'>Sign In</button>
                    <p className='text-center'>Forgot Username or Password?</p>
                </form>
                <Link to='/Signup'><button className='w-full py-2 my-4 bg-blue hover:bg-red font-extrabold rounded-md'>Sign Up</button></Link>
                
            </div>
        </div>
    </div>
  )
}