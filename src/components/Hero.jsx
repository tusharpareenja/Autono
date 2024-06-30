import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
import menuIcon from '../assets/menu.svg'; // Replace with your actual menu icon import

function Hero() {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (showMenu && menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        if (showMenu) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [showMenu]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(https://static.wixstatic.com/media/c837a6_02de7d4c43d44b7b890854049ed75da8f000.jpg/v1/fill/w_980,h_840,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c837a6_02de7d4c43d44b7b890854049ed75da8f000.jpg)` }}>
            <div className="absolute inset-0 bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.99) 100%)' }}></div>
            <div className='absolute inset-0 flex flex-col justify-between'>
                <div className='w-full flex justify-between items-center p-4'>
                    <div className='flex w-52 h-14  items-center sm:justify-center'>
                        <h1 className='font-abc font-semibold text-2xl tracking-widest '>AUTONO</h1>
                    </div>
                    <div className='flex w-auto'>
                        <ul className='hidden sm:flex flex-row space-x-4 font-abc mr-9 text-lg'>
                            <li className='cursor-pointer'>Technology</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Careers</li>
                            <li className='bg-white text-black rounded-md font-normal text-base p-2 hover:bg-black hover:text-white'>Subscribe</li>
                        </ul>

                        <div className='sm:hidden flex items-center' ref={menuRef}>
                            <button
                                className="mobile-menu-toggle"
                                onClick={toggleMenu}
                                aria-label="Toggle Menu"
                            >
                                <img
                                    src={menuIcon}
                                    alt="Menu"
                                    className='w-8 h-8 cursor-pointer'
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {showMenu && (
                    <div className='sm:hidden flex flex-col items-center bg-black bg-opacity-75 p-4 absolute top-0 left-0 right-0 bottom-0 pointer-events-auto'>
                        <ul className='flex flex-col items-center font-abc text-lg text-white space-y-4'>
                            <li className='cursor-pointer'>Technology</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Careers</li>
                        </ul>
                        <button className='absolute z-10 mt-5 bg-white text-black rounded-md font-normal text-base p-2 top-32 hover:bg-black hover:text-white '>
                            Subscribe
                        </button>
                    </div>
                )}
            </div>
            <div className='w-full h-50 justify-center items-center absolute'>
                <div className='absolute inset-x-0 top-60 transform -translate-y-1/2 text-white text-center font-abc h-56 w-full'>
                    <h1 className='text-4xl sm:text-7xl text-black mb-6 relative'>THE FUTURE OF</h1>
                    <h1 className='text-4xl sm:text-7xl text-black mb-5'>MOBILITY IS HERE</h1>
                    <h2 className='text-black font-abc text-lg sm:text-lg'>Discover the safest self-driving experience with Autono.</h2>
               </div>
           </div>
        </div>
    );
}

export default Hero;
