"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";

import ArticlesCard from "@/SharedComponent/ArticlesCard/ArticlesCard";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const OurArticles = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4, // Show 5 items for xl screens
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

  const carouselRef = useRef<Carousel | null>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(1);
    }
  };

  return (
    <div className="md:mt-0 xl:mt-10 mb-10">
      <SectionTitle title="Our Articles" condition={false} />

      <div className="relative w-full mt-5 xl:mt-0 group">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          arrows={false}
          itemClass="px-2" // Adds spacing between carousel items
        >
          {data.map((item, index) => (
            <ArticlesCard key={index} />
          ))}
        </Carousel>

        <button
          onClick={handlePrev}
          className="absolute hidden  group-hover:block left-[-2%] top-1/2 transform -translate-y-1/2 text-[35px] text-gray-500 p-3 rounded-full z-10"
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          className="absolute hidden  group-hover:block right-[-2%] top-1/2 transform -translate-y-1/2 text-[35px] text-gray-500 p-3 rounded-full z-10"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default OurArticles;
