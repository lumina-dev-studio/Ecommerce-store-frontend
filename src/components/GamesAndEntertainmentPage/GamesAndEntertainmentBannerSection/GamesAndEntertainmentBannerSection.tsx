
'use client'
import React, { useState, useEffect } from 'react';

const images = [
    'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  
];

const GamesAndEntertainmentBannerSection = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Function to go to the next image (sequential)
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Set interval to change the image every 5 seconds
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextImage();
      }, 5000);
  
      return () => clearInterval(intervalId); // Cleanup the interval when the component is unmounted
    }, []);
  
    return (
     <div >
      <div className="relative w-full min-h-[300px] bg-white rounded-lg overflow-hidden mt-20  xl:mt-5">
        {/* Image display */}
        <div className="relative flex justify-center items-center w-full h-full bg-gray-100">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-[300px] object-cover rounded-lg"
          />
  
          {/* Content on top of the image */}
          <div className="absolute md:top-[20%] md:left-[5%] left-[7%] top-[30%]  z-10  text-white">
            <h1 className="text-3xl sm:text-4xl font-bold">Ellite Controllers</h1>
            <p className="mt-3 text-[15px] font-medium text-gray-200 ">
            White core version of your favorite gamepad
            </p>



           <div className=' flex gap-2 md:gap-5 mt-3'>

       
            <div className="mt-2">
              <button className="py-2.5 px-6 text-[15px] text-black bg-white rounded-lg hover:bg-blue-600 transition duration-300">
                Shop White
              </button>
            </div>
            <div className="mt-2">
              <button className="py-2.5 px-6 text-[15px] text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                Shop Black
              </button>
            </div>
            </div>
          </div> 
  
          {/* Overlay for darkening the image */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
        </div>
  
        {/* Pagination (dots for navigation) */}
        <div className="absolute bottom-[5%] left-[50%] lg:left-[10%] xl:left-[4%] transform -translate-x-1/2 flex space-x-3 bg-slate-100 p-2 rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
                currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
     </div> 
  );
};

export default GamesAndEntertainmentBannerSection;