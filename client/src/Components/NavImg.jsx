import React from 'react';
import { navData } from '../Constant/data';

const NavImg = () => {
  return (
    <div className="flex  bg-gray-200 pb-3   ">
        <div className='flex space-x-6 mx-auto mt-4'>
      {
        navData.map((data) => {
          return (
            <div key={data.text}>
              <img src={data.url} alt='nav'  />
              <p>{data.text}</p>
            </div>
          );
        })
      }
    </div>
    </div>
  );
};

export default NavImg;
