import React from 'react';

export default function Newsletter() {
    return (
        <div className="bg-blue-400 p-4 w-full h-auto grid">
            <div className='m-2 max-w-[1240px] w-full mx-auto flex flex-col md:flex-row justify-between items-center py-[50px]'>
                {/* Text Section */}
                <div className='text-center md:text-left'>
                    <h1 className='text-white text-[20px] md:text-[40px] font-bold'>Want to Learn New IT Skills?</h1>
                    <span className='text-white text-[14px]'>Sign up for our Newsletter and stay up to date</span>
                </div>
                {/* Input and Button Section */}
                <div className='md:w-1/3 flex flex-col items-center md:items-start m-2'>
                    <div className='w-full flex flex-col md:flex-row items-center md:justify-end pb-2'>
                        <input 
                            type="email" 
                            placeholder='Enter Email' 
                            className='rounded p-3 w-full sm:w-[100%] md:w-[100%] mb-2 md:mb-0 md:mr-2'
                        />
                        <button className="rounded p-3 w-full sm:w-[100%] md:w-[100%] bg-black text-white">Get Started</button>
                    </div>
                    <span className='text-white text-[15px] md:text-[18px]  font-light pb-2 text-center md:text-left'>We care about the protection of your data. Read our </span>
                    <span className='text-black text-[15px] md:text-[18px]  font-bold pb-2 text-center md:text-left'>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
}
