'use client'
import React, { useState, useEffect } from 'react';

const images = [
  'https://media.licdn.com/dms/image/v2/D5612AQGVcxau9UN-MA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677152200015?e=1736985600&v=beta&t=bhe5BO7EhAc9mMQTxIA5Zh36zfdQ4HJDQaiQ82DWMf4',
  'https://images.pexels.com/photos/28579172/pexels-photo-28579172/free-photo-of-minimalist-workspace-with-laptop-and-coffee-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/14979030/pexels-photo-14979030/free-photo-of-apple-cellphone-cube-and-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const HomeBannerSectionSlider: React.FC = () => {
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
    <div className="relative w-full min-h-96 bg-white rounded-lg overflow-hidden">
      {/* Image display */}
      <div className="relative flex justify-center items-center w-full h-full bg-gray-100">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[450px] object-cover rounded-lg"
        />

        {/* Content on top of the image */}
        <div className="absolute md:top-[10%] md:left-[20%] left-[7%] top-[30%]  z-10 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">Apple Shopping Event</h1>
          <p className="mt-3 text-[15px] font-medium text-gray-200">
            Shop great deals on MacBook, iPad, iPhone, and more
          </p>

          <div className="mt-2">
            <button className="py-2.5 px-6 text-[15px] text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Overlay for darkening the image */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
      </div>

      {/* Pagination (dots for navigation) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-slate-100 p-2 rounded-full">
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

export default HomeBannerSectionSlider;
