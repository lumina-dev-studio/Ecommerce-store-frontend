"use client";
import { CiStar } from "react-icons/ci";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import necessary styles
import { useRef } from "react";

const ShoppingEventPartTow = ({data}:any) => {
  

  // Responsive settings for carousel (number of products shown per device size)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5, // Show 5 items for xl screens
    },
    desktop: {
      breakpoint: { max: 1199, min: 1024 },
      items: 3, // Show 3 items for large screens
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2, // Show 2 items for medium screens
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1, // Show 1 item for small screens
    },
  };

  // Create a reference to the carousel component
  const carouselRef = useRef<Carousel | null>(null);

  // Function to go to the next item
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1); // Calls the next method with 1 slide to pass
    }
  };

  // Function to go to the previous item
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(1); // Calls the previous method with 1 slide to pass
    }
  };

  return (
    <div className="relative w-full group mt-5 xl:mt-0 ">
      <Carousel
        ref={carouselRef} // Attach the ref to the carousel
        responsive={responsive}
        infinite={true} // Enable infinite scrolling (optional)
        arrows={false} // Hide the default navigation arrows
      >
        {/* Loop through the data to create carousel items */}
        {data?.map((item:any, index:any) => (
          <div key={index} className="m-2 bg-white rounded-xl flex gap-2 items-center">
            <section>
              <img
                src="/bannar/headPhone.png"
                className="w-[100px] h-[100px] object-contain transform transition-transform duration-500 hover:scale-110"
                alt="Headphone"
              />
            </section>

            <section className="space-y-1.5">
              <h3>iPad Mini</h3>
              <div className="flex">
                <CiStar className="text-[17px]" />
                <CiStar className="text-[17px]" />
                <CiStar className="text-[17px]" />
                <CiStar className="text-[17px]" />
                <CiStar className="text-[17px]" />
              </div>
              <p className="text-blue-500 text-[14px] font-[600]">$600.00</p>
            </section>
          </div>
        ))}
      </Carousel>

      {/* Custom Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute hidden group-hover:block left-[-2%] top-1/2 transform -translate-y-1/2 text-[35px] text-gray-500 p-3 rounded-full z-10"
      >
        ‹
      </button>

      {/* Custom Next Button */}
      <button
        onClick={handleNext}
        className="absolute hidden group-hover:block right-[-2%] top-1/2 transform -translate-y-1/2 text-[35px] text-gray-500 p-3 rounded-full z-10"
      >
        ›
      </button>
    </div>
  );
};

export default ShoppingEventPartTow;
