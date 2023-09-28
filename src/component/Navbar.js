import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center mt-5 h-14 max-w-[1240px] mx-auto px-4 text-black  bg-white rounded-full'>
      <h1 className='w-full text-3xl font-bold text-[black]'>Skillbanao.com</h1>
      <ul className='hidden md:flex'>
        <Link to="/"> <li className='p-4 text-[black]'>Home</li></Link>
        <Link to="/About"><li className='p-4 text-[black]'>About</li></Link>
        <li className='p-4 text-[black]'>Service</li>
        
        <Link to="/Contact"> <li className='p-4 text-[black]'>Contact</li></Link>
        <Link to="/Login"><li className='p-4 text-[black]'>Login</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[white] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <Link to="/"><h1 className='w-full text-3xl font-bold text-[black] m-4'>SkB.com</h1></Link>
        <Link to="/"><li className='p-4 border-b border-gray-600 text-[#1E2C53]'>Home</li></Link>
        <Link to="/Servie"><li className='p-4 border-b border-gray-600 text-[#1E2C53]'>Service</li></Link>
        <Link to="/About"><li className='p-4 border-b border-gray-600 text-[#1E2C53]'>About</li></Link>
        <Link to="/Contact"><li className='p-4 border-b border-gray-600 text-[#1E2C53]'>Contact</li></Link>
        <Link to="/Login"><li className='p-4 border-b border-gray-600 text-[#1E2C53]'>Login</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;