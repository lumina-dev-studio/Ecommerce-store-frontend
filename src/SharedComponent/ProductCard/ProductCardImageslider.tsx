'use client'

import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline, IoShuffle } from "react-icons/io5";
import { Card } from "@/components/ui/card";

const ProductCardImageslider = () => {
    const images = [
        "/bannar/camera.png", 
        "/bannar/headPhone.png", 
        "/bannar/joypad.png", 
        "/bannar/camera.png", 
        "/bannar/headPhone.png"
    ];
  
    // State to track the current image
    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div className="relative ">
            {/* Display the current image */}
            <section className="flex justify-center items-center h-[270px]">
                <img 
                    src={currentImage} 
                    alt="Product" 
                    className="w-[200px] h-[200px] transition-all duration-300" 
                />
            </section>

            <section className=" space-y-3 absolute top-[5%] left-[5%]">
              
                 <p className=" bg-red-500  px-0.5 py-1 font-bold text-[13.5px] text-center text-white w-[50px] rounded-full">Hot</p>
                 <p className=" bg-green-600  px-0.5 py-1 font-bold text-[13.5px] text-center text-white w-[50px] rounded-full">New</p>
              
            </section>
            
            
             <section className=" absolute top-0 right-[3%]   group-hover:w-[50px] w-[10px] duration-500 opacity-0 group-hover:opacity-100">

             <Card className=" flex justify-center">
            <div className="p-2 space-y-3 ">
            <IoShuffle  className="  text-[25px] " />
            <IoSearchOutline  className="  text-[25px] " />
            <IoIosHeartEmpty  className="  text-[25px] " />
            </div>
            </Card>
             </section>

            {/* Button section to switch images on hover */}
            <section className="absolute bottom-0 left-0 right-0 flex justify-around gap-2 px-4 pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onMouseEnter={() => setCurrentImage(image)} // Change image on hover
                        className="w-full h-[250px] opacity-0 rounded-xl bg-gray-200 hover:bg-gray-500 transition-opacity duration-300"
                    ></button>
                ))}
            </section>

            {/* Optional: You can use the below to create buttons with a visual indication for the current image */}
            <section className="absolute bottom-0 left-0 right-0 flex justify-around gap-2 px-4 pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onMouseEnter={() => setCurrentImage(image)} // Change image on hover
                        className={`w-full h-1 rounded-xl bg-gray-200 opacity-0 group-hover:opacity-100 hover:bg-gray-500 transition-opacity duration-300`}
                    ></button>
                ))}
            </section>
        </div>
    );
};

export default ProductCardImageslider;
