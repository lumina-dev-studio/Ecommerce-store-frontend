"use client"
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const PopularCategoriesWithSlider = ({ data }: any) => {
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  // Set the window width after component mounts to avoid server-side issues
  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically determine how many items to show per slide based on screen size
  const smItems = 2;
  const mdItems = 3;
  const lgItems = 4;

  // Determine how many items to show based on the window width
  const displayItems =
    windowWidth <= 640 ? smItems : windowWidth <= 768 ? mdItems : lgItems;

  return (
    <div>
      {/* Carousel for small to large screens */}
      <div className="block xl:hidden mt-4 overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {/* Map through data and display items per slide based on screen size */}
            {data.map((category: any, index: any) => {
              const itemsToShow = [];
              for (let i = 0; i < displayItems; i++) {
                if (data[index + i]) {
                  itemsToShow.push(
                    <div key={index + i} className=" object-cover w-[180px] sm:w-[200px]">
                      <Card>
                        <CardContent className="flex flex-col items-center justify-center p-4">
                          <img
                            src={data[index + i].img}
                            className="w-[180px] h-[150px] object-contain transition-transform duration-500 group-hover:scale-110"
                            alt={data[index + i].title}
                          />
                          <div className="text-center mt-2 space-y-1">
                            <h3 className="font-bold">{data[index + i].title}</h3>
                            <p className="text-gray-500">{data[index + i].products} products</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                }
              }

              return (
                <CarouselItem key={index} className="flex gap-4">
                  {itemsToShow}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Grid view for larger screens */}
      <div className="hidden xl:flex mt-4 gap-4">
        {data.map((category: any, index: any) => (
          <div key={index} className="group p-4 w-[180px] sm:w-[200px] md:w-[250px] lg:w-[300px] transition-shadow duration-300">
            <div className="bg-white rounded-xl p-2">
              <img
                src={category.img}
                className="w-[180px] h-[150px] object-contain transform transition-transform duration-500 group-hover:scale-110"
                alt={category.title}
              />
            </div>
            <div className="text-center mt-2 space-y-1">
              <h3 className="font-bold">{category.title}</h3>
              <p className="text-gray-500">{category.products} products</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategoriesWithSlider;
