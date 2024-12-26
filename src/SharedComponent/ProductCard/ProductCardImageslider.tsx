'use client'

import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline, IoShuffle } from "react-icons/io5";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const ProductCardImageslider = ({data}:any) => {
    
    console.log(data?.productMediaImages[0]?.imageUrl,'ProductCardImageslider')
    
    const [currentImage, setCurrentImage] = useState(data?.productMediaImages[0]?.imageUrl);
    // const [currentImage, setCurrentImage] = useState('');
   

    return (
        <div className="relative ">
            {/* Display the current image */}
            <div className="flex justify-center items-center h-[270px]">
                {/* <img 
                    src={currentImage} 
                    alt="Product" 
                    className="w-[200px] h-[200px] transition-all duration-300" 
                /> */}
 <img 
    src={currentImage} 
    alt="Product" 
    className="w-[200px] h-[200px]  object-cover transition-all duration-300" 
/>
            </div>

            <div className=" space-y-3 absolute top-[5%] left-[5%]">
              
                 <p className=" bg-red-500  px-0.5 py-1 font-bold text-[13.5px] text-center text-white w-[50px] rounded-full">Hot</p>
                 <p className=" bg-green-600  px-0.5 py-1 font-bold text-[13.5px] text-center text-white w-[50px] rounded-full">New</p>
              
            </div>
            
            
             <div className=" absolute top-0 right-[3%]   group-hover:w-[50px] w-[10px] duration-500 opacity-0 group-hover:opacity-100">

             <Card className=" flex justify-center">
            <div className="p-2 space-y-3 ">
            <IoShuffle  className="  text-[25px] " />
            <IoSearchOutline  className="  text-[25px] " />
            <IoIosHeartEmpty  className="  text-[25px] " />
            </div>
            </Card>
             </div>

            {/* Button section to switch images on hover */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around gap-2 px-4 pb-2">
                {data?.productMediaImages?.map((image:any, index:any) => (
                     <Link href={`/productCategory/singleProduct/${data?.id}`}
                        key={index}
                        onMouseEnter={() => setCurrentImage(image?.imageUrl)} // Change image on hover
                        className="w-full cursor-pointer h-[250px] opacity-0 rounded-xl bg-gray-200 hover:bg-gray-500 transition-opacity duration-300"
                        ></Link>
                ))}
            </div>

            {/* Optional: You can use the below to create buttons with a visual indication for the current image */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around gap-2 px-4 pb-2">
                {data?.productMediaImages?.map((image:any, index:any) => (
                    <Link href={`/productCategory/singleProduct/${data?.id}`}
                        key={index}
                        onMouseEnter={() => setCurrentImage(image?.imageUrl)} // Change image on hover
                        className={`w-full cursor-pointer h-1 rounded-xl bg-gray-200 opacity-0 group-hover:opacity-100 hover:bg-gray-500 transition-opacity duration-300`}
                    ></Link>
                ))}
            </div>
        </div>
    );
};

export default ProductCardImageslider;
