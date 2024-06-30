import React from 'react';
import FactoryImg from '../assets/factory.jpg';

function Factory() {
    return (
        <>
            {/* New div with background image */}
            <div
                className='w-full h-screen flex items-center mt-60 relative'
                style={{ 
                    backgroundImage: `url(${FactoryImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
               <div className='absolute bg-black h-128 w-96 ml-10 rounded-lg flex left-0'>
                   <div className='border-l-2 border-white h-100 w-full ml-8 mt-10'>
                       <div className='text-white ml-8 font-abc tracking-widest'>WHY AUTONO</div>
                       <div className='text-white ml-8 font-abc text-2xl'>
                           <h1 className='mt-10'>A different approach,</h1>
                           <h1 className='mt-2'>using a new method of</h1>
                           <h1 className='mt-2'>manufacturing.</h1>
                       </div>
                       <div className='text-white ml-8 font-abc mt-5'>
                           <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                       </div>
                       <div className='flex ml-8 mt-4'>
                           <div className='border border-solid border-white p-4 w-32 h-12 rounded-l-md text-center flex items-center justify-center hover:bg-white hover:text-black cursor-pointer text-white'>
                               READ MORE
                           </div>
                           <div className='border border-solid border-white w-14 h-12 flex items-center justify-center cursor-pointer rounded-r-md'>
                               <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                               </svg>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </>
    );
}

export default Factory;
