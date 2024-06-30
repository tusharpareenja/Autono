import React from 'react';
import SpeedoMeter from '../assets/watch.png.png';

function Speed() {
    return (
        <>
            <div className='h-screen w-full mt-96 sm:mt-20 text-black flex items-center justify-center relative'>
                <div className='absolute sm:right-32'>
                    <h1 className='text-3xl mb-4 font-abc mt-60 md:text-5xl'>REAL-TIME</h1>
                    <h1 className='text-3xl mb-8 font-abc md:text-5xl'>INFORMATION</h1>
                    <div className='w-96 h-40 font-abc text-black break-words whitespace-normal'>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </div>
                    <div className='flex items-center'>
                        <div className='mb-20 border border-solid border-black p-4 w-32 h-12 rounded-l-md text-center flex items-center justify-center hover:bg-black hover:text-white cursor-pointer'>
                            READ MORE
                        </div>
                        <div className='mb-20 border border-solid border-black w-14 h-12 flex items-center justify-center cursor-pointer rounded-r-md'>
                            <svg className='w-6 h-6 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='absolute left-0 top-96 md:top-60'>
                    <div className='flex ml-12 mt-48 md:mt-0'>
                        <img src={SpeedoMeter} alt='Speedometer' />
                    </div>
                </div>
            </div>
         
        </>
    );
}

export default Speed;
