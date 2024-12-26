'use client';

import React, { useState } from 'react';
import { FaArrowsUpDownLeftRight, FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const ImageGallery = ({data}:any) => {

  console.log(data?.productMediaImages,'kk')
  const images = [
    '/bannar/camera.png',
    '/bannar/headPhone.png',
    '/bannar/joypad.png',
    '/bannar/camera.png',
    '/bannar/headPhone.png',


  ];
  data?.productMediaImages?.forEach((element:any) => {

    images.push(element?.imageUrl)
  
});

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleThumbnails = 3;
  const movementRange = 100;

  const handleMouseMove = (event:any) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width - 0.5) * movementRange * 2;
    const y = ((event.clientY - top) / height - 0.5) * movementRange * 2;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handleThumbnailClick = (index:any) => {
    setCurrentIndex(index);
  };

  const handleNextThumbnail = () => {
    if (startIndex + visibleThumbnails < images.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePreviousThumbnail = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 px-5 mt-10">
        {/* Thumbnail Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex flex-col gap-4">
            {images.slice(startIndex, startIndex + visibleThumbnails).map((image, index) => (
              <img
                key={index + startIndex}
                src={image}
                alt={`Thumbnail ${index + startIndex + 1}`}
                className={`w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain cursor-pointer transition-all duration-200 ${
                  index + startIndex === currentIndex ? 'border-blue-500' : 'border-gray-300'
                }`}
                onClick={() => handleThumbnailClick(index + startIndex)}
              />
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            <button
              className="bg-gray-100 p-2 rounded-md flex justify-center w-12"
              onClick={handlePreviousThumbnail}
              disabled={startIndex === 0}
            >
              <FaChevronUp />
            </button>
            <button
              className="bg-gray-100 p-2 rounded-md flex justify-center w-12"
              onClick={handleNextThumbnail}
              disabled={startIndex + visibleThumbnails >= images.length}
            >
              <FaChevronDown />
            </button>
          </div>
        </div>

        {/* Main Image Section */}
        <div
          className="relative w-full max-w-xs md:max-w-md lg:max-w-lg group overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full h-48 md:h-64 lg:h-96 overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            />
          </div>
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-[20%] transform -translate-y-1/2 text-gray-500 text-xl p-2 rounded-full bg-white shadow-md hidden md:block"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-[20%] group-hover:block: transform -translate-y-1/2 text-gray-500 text-xl p-2 rounded-full bg-white shadow-md hidden md:block"
          >
            ❯
          </button>
          <button
            className="absolute left-1/2 bottom-[0%] md:bottom-[10%] lg:bottom-[53%] xl:bottom-[57%] transform -translate-x-1/2 flex items-center gap-2 w-[200px] text-center px-4 py-2 bg-white rounded-md shadow-md"
            onClick={toggleModal}
          >
            <FaArrowsUpDownLeftRight />
            <span>Click to enlarge</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
            <img
              src={images[currentIndex]}
              alt="Fullscreen"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full"
              onClick={toggleModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
