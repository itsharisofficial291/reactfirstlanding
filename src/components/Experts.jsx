import React from 'react';
import computer from '../assets/images/computer.jpg';

export default function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto p-14 md:grid grid-cols-2 gap-10 items-center justify-center">
      {/* Image Section on the Left */}
      <div className="md:ml-10 w-full h-full md:w-[90%] flex flex-col justify-center rounded  object-cover">
        <img src={computer} alt="Computer and Expert" className="w-full h-full object-cover rounded" />
      </div>

      {/* Text Section on the Right */}
      <div className="h-[400px] flex flex-col justify-center">
        <h3 className="text-left text-[#00df9a] font-bold text-[20px]">LEARN FROM EXPERT</h3>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati possimus voluptatum, eum recusandae consequatur fugit natus voluptates vero distinctio eveniet reiciendis culpa ipsum nobis unde rerum? Dolor, id dolorem.
        </p>
        <button className="sm:w-[50%] md:w-[40%] p-3 bg-black text-white rounded mt-5">Get Started</button>
      </div>
    </div>
  );
}
