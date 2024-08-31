import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-blue-900 p-4 sticky '>
      <div className='max-w-[1240px] py-[10px] items-center flex justify-between mx-auto sticky '>
        <div className='text-3xl font-bold text-white'>Haris Ahmed Inc</div>

        {/* Toggle Icons */}
        <div className='md:hidden'>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl"
            />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex text-white gap-10'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>

        {/* Responsive Mobile Menu */}
        <ul
          className={` md:hidden bg-black text-white w-full h-screen fixed top-[87px] py-[17px] transition-transform duration-300 
          ${toggle ? 'left-0' : 'left-[100%]'}`}
        >
          <li className='p-5'>Home</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contact</li>
          <li className='p-5'>Services</li>
        </ul>
      </div>
    </div>
  );
}
