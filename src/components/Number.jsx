import React, { useEffect, useRef, useState } from 'react';
import Hand from '../assets/download.png';
import './Number.css'; // You will create this CSS file

function Number() {
  const [isInView, setIsInView] = useState(false);
  const numberRef1 = useRef(null);
  const numberRef2 = useRef(null);
  const numberRef3 = useRef(null);
  const numberRef4 = useRef(null);

  const handleScroll = () => {
    if (numberRef1.current || numberRef2.current) {
      const rect1 = numberRef1.current.getBoundingClientRect();
      const rect2 = numberRef2.current.getBoundingClientRect();
      if ((rect1.top >= 0 && rect1.bottom <= window.innerHeight) || (rect2.top >= 0 && rect2.bottom <= window.innerHeight)) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen flex items-center relative">
        <div className="w-128 h-128 mt-20 sm:flex absolute hidden">
          <div>
            <img src={Hand} alt="Hand" />
          </div>
        </div>
        <div className="w-128 h-144 absolute right-0 flex">
          <div className="h-20 w-full">
            <h1 className="font-abc text-black ml-36 sm:ml-8 mt-10 text-3xl">Autono In Numbers</h1>
          </div>
          <div className="flex absolute left-36 sm:left-0 top-44 w-44 h-44" ref={numberRef1}>
            <div className="font-abc tracking-wider">
              <h1 className='text-3xl font-medium'>200</h1>
              <div className={`small-line ${isInView ? 'animate' : ''}`}></div>
              <div className='flex absolute top-20 text-xl'>Employees</div>
            </div>
          </div>

          <div className="flex absolute right-0 top-44 w-44 h-44" ref={numberRef2}>
            <div className="font-abc tracking-wider">
              <h1 className='text-3xl font font-medium'>5</h1>
              <div className={`small-line ${isInView ? 'animate' : ''}`}></div>
              <div className='flex absolute top-20 text-xl'>CORE TEAMS</div>
            </div>
          </div>
          
          <div className="flex absolute left-36  sm:left-0 bottom-0  w-44 h-44" ref={numberRef3}>
            <div className="font-abc tracking-wider">
              <h1 className='text-3xl font font-medium'>200M$</h1>
              <div className={`small-line ${isInView ? 'animate' : ''}`}></div>
              <div className='flex absolute top-20 text-xl'>CAPITAL</div>
            </div>
          </div>

          <div className="flex absolute right-0 bottom-0  w-44 h-44" ref={numberRef4}>
            <div className="font-abc tracking-wider">
              <h1 className='text-3xl font font-medium'>326</h1>
              <div className={`small-line ${isInView ? 'animate' : ''}`}></div>
              <div className='flex absolute top-20 text-xl'>PARTNERS</div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default Number;
