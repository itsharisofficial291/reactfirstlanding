// src/components/Header.jsx
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const tabs = [
  { name: 'Banner', href: '#banner' },
  { name: 'Experts', href: '#experts' },
  { name: 'Newsletter', href: '#newsletter' },
  { name: 'Plans', href: '#plans' }
];

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='bg-blue-900 p-4 sticky top-0 w-full z-50'>
      <div className='max-w-[1240px] flex justify-between items-center mx-auto'>
        <div className='text-3xl font-bold text-white'>
          Haris Ahmed Inc
        </div>

        {/* Toggle Icons for Mobile Menu */}
        <div className='md:hidden'>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl cursor-pointer"
              aria-label="Close menu"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl cursor-pointer"
              aria-label="Open menu"
            />
          )}
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex text-white space-x-10'>
          {tabs.map(tab => (
            <a
              key={tab.name}
              href={tab.href}
              className='hover:text-gray-400'
            >
              {tab.name}
            </a>
          ))}
        </nav>

        {/* Responsive Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white py-4 transition-transform duration-300 ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
          aria-hidden={!toggle} // Helps with screen reader accessibility
        >
          <div className='px-4'>
            <div className="flex flex-col space-y-4 border-b border-gray-700">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className='py-2 px-4 text-white hover:border-blue-500'
                >
                  {tab.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
