import React from 'react'
import GeneralTransport from '../assets/General_Transport.png'
import IdiSoftware from '../assets/IDI_Software.png'
import ImogenCars from '../assets/Imogen_Cars.jpg'
import TriNext from '../assets/Tri-Nex20.png'

function Partners() {
    return (
        <>
           <div className='bg-black w-full h-screen flex items-center justify-center relative font-abc'>
                <div className='border-l-2 border-white h-96 w-full ml-8'>
                    <div>
                        <h1 className='text-white ml-10 font-abc mb-10 tracking-widest'>PARTNERS</h1>
                        <h2 className='text-white ml-10 font-abc text-3xl mb-2 tracking-wide sm:tracking-widest sm:text-4xl'>OUR</h2>
                        <h2 className='text-white ml-10 font-abc text-3xl mb-20 tracking-wide sm:tracking-widest sm:text-4xl'>PARTNERS</h2>
                    </div>
                    <div className=' w-72 ml-10 h-40 font-abc text-white break-words whitespace-normal'>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </div>
                </div>
                <div className=' absolute right-10 md:flex w-128 h-screen justify-center items-center bottom-0 hidden'>
                   <div className='w-36 bg-black h-48 absolute flex flex-col items-center top-40 left-1 text-center'>
                    <img className='w-32 h-32' src={GeneralTransport}></img>
                    <h1 className='text-white mt-2'>GENERAL TRANSPORT</h1>
                   </div>

                   <div className='w-36 bg-black h-48 absolute flex flex-col items-center top-40 right-10 text-center'>
                    <img className='w-32 h-32' src={IdiSoftware}></img>
                    <h1 className='text-white mt-2'>IDI SOFTWARE</h1>
                   </div>

                   <div className='w-36 bg-black h-48 absolute flex flex-col items-center top-96 left-1 text-center'>
                    <img className='w-32 h-32' src={GeneralTransport}></img>
                    <h1 className='text-white mt-2'>IMOGEN CARS</h1>
                   </div>

                   <div className='w-36 bg-black h-48 absolute flex flex-col items-center top-96 right-10 text-center'>
                    <img className='w-32 h-32' src={TriNext}></img>
                    <h1 className='text-white mt-2'>TRI-NEX</h1>
                   </div>
 

                </div>
            </div>
        </>
    )
}

export default Partners
