import React from 'react';

const Banner = () => {
  return (
    <div className='flex justify-around items-center m-10 bg-blue-200 p-10'>
          <div>
               <h2 className='text-5xl'>Lorem ipsum dolor sit</h2>
               <button className='btn btn-accent m-2'>Read More</button>
          </div>
          <div>
             <img className='w-[300px]' src="https://i.ibb.co.com/cKp6PxpV/boi.jpg" alt="" />
          </div>
    </div>
  );
};

export default Banner;