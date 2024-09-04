import React from 'react'
import { ReactTyped } from "react-typed"; 
export default function Banner() {
  return (
   <section id="banner">
    <div className='bg-blue-400 w-full h-full py-[100px]'>
      <div className='max-w-[1240px] my-[10px] mx-auto text-center font-bold'>
        <h2 className='text-black text-xl md:text-2xl font-bold mt-4'>Learn With Us</h2>
        <h2 className='text-white text-3xl md:text-6xl font-bold mt-4'>Grow With Us</h2>
        <h2 className='text-white text-2xl md:text-4xl font-bold mt-4 text-capitialize'>Learn     <ReactTyped className='text-black' strings={['Web Development', 'Ethical Hacking', 'SEO', 'Digital Marketing']} typeSpeed={100} loop={true} />
        </h2>
        <button className='p-3 bg-black text-white rounded my-[20px]'>Get Started</button>

      </div>

    </div>
    </section>
  )
}
