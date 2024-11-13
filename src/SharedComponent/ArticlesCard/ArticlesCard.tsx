import React from 'react';
import { BiMessage } from 'react-icons/bi';
import { IoShareSocialOutline } from 'react-icons/io5';

const ArticlesCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL
          alt="Best Gaming Laptop Models"
          className="w-full h-full object-cover hover:scale-110 duration-500 "
        />
        <div className="absolute bottom-2 left-2 flex items-center space-x-2  text-white p-1 rounded-full">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with author's image URL if available
            alt="Mr. Mackay"
            className="w-6 h-6 rounded-full "
          />
          <span className="text-sm">Mr. Mackay</span>
        </div>

        <div className="absolute bottom-2 right-2 flex gap-3 items-center space-x-2  text-white p-1 rounded-full">
        <IoShareSocialOutline className=' text-[20px]' />

        <div className=' relative w-[30px] h-[30px]'>

        <BiMessage className='mt-2 text-[20px] ' />

        <div className=' h-[17px] w-[17px] bg-blue-500 rounded-full flex justify-center items-center absolute  top-[5%] right-[10%] '>

          <p className=' text-[10px] mt-[2px]'>0</p>

        </div>
        </div>

        </div>
      </div>

      {/* Content Section */}
      <div className="py-4 px-5">
        <div className="text-gray-400 text-sm  mt-2">
          Gaming, Laptops / 14 Nov 2022
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-2">Best Gaming Laptop Models</h3>
        <p className="text-gray-500 text-sm mt-3 line-clamp-3">
          At solmen va esser necessari far uniform grammatica, pronunciation e plu commun paroles. Ma quande lingues coalesce, li gram...
        </p>
        <a href="#" className="text-blue-500 text-[13px] mt-4 inline-block font-semibold">
          Continue Reading
        </a>
      </div>

   
   
    </div>
  );
};

export default ArticlesCard;
