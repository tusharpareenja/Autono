import React from 'react';
import carImage from '../assets/car.png.png';

function Services() {
    return (
        <>
            <div className='bg-white w-full h-screen flex items-center justify-center'>
                <div className='border-l-2 h-56 w-full ml-0'>
                    <div className='border-l-2 border-black h-56 w-full ml-8'>
                        <h1 className='ml-10 font-abc mb-3 tracking-widest'>SERVICES</h1>
                        <h2 className='ml-10 font-abc text-4xl mb-2 tracking-widest'>We Deliver Exceptional</h2>
                        <h2 className='ml-10 font-abc text-4xl mb-2 tracking-widest'>Products and Services</h2>
                        <h3 className='ml-10 font-abc text-4xl mb-10 tracking-widest'>Around the World</h3>
                    </div>
                    <div className='mt-48 relative w-full h-screen'>
                        <div className=' font-abc font-normal text-3xl mb-10 tracking-widest ml-10 sm:ml-10 sm:5xl'>
                            <h1>AUTONOMOUS</h1>
                            <h1>DRIVING</h1>
                        </div>
                        <div className=' w-96 ml-10 h-40 font-abc text-black break-words whitespace-normal sm:ml-10'>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                        </div>
                        <div className='ml-10 flex items-center sm:ml-10'>
                            <div className='border border-solid border-black p-4 w-32 h-12 rounded-l-md text-center flex items-center justify-center hover:bg-black hover:text-white cursor-pointer'>
                                READ MORE
                            </div>
                            <div className='border border-solid border-black w-14 h-12 flex items-center justify-center cursor-pointer rounded-r-md'>
                                <svg className='w-6 h-6 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                                </svg>
                            </div>
                        </div>
                        <div className='absolute top-96 right-0 h-20 md:top-0 '>
                            <div className='mt-0 mr-0 ml-10 flex'>
                                <img className='h-4/6 w-5/6' src={carImage} alt='Car' />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Services;
