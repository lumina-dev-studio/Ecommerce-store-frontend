import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";
import PCsSelectedForYouPartOne from "./PCsSelectedForYouPartOne/PCsSelectedForYouPartOne";
import PCsSelectedForYouPartTow from "./PCsSelectedForYouPartTow/PCsSelectedForYouPartTow";

import ProductCard from "@/SharedComponent/ProductCard/ProductCard";

const PCsSelectedForYou = () => {
  const productdData = [
    {
      id:1,
      images : [
        "/bannar/camera.png", 
        "/bannar/headPhone.png", 
        "/bannar/joypad.png", 
        "/bannar/camera.png", 
        "/bannar/headPhone.png"
    ],
    price:3000 },
    {
      id:2,
      images : [
        "/bannar/camera.png", 
        "/bannar/headPhone.png", 
        "/bannar/joypad.png", 
        "/bannar/camera.png", 
        "/bannar/headPhone.png"
    ],
    price:3000 },
    {
      id:3,
      images : [
        "/bannar/camera.png", 
        "/bannar/headPhone.png", 
        "/bannar/joypad.png", 
        "/bannar/camera.png", 
        "/bannar/headPhone.png"
    ],
    price:3000 },
   


  ]
     
  return (
    <div className=" my-20">
      <SectionTitle title="PCs Selected for You" condition={true} />

      <div className="  flex gap-5 justify-center   3xl:gap-5">
        <div className=" hidden xl:block w-[400px]">
        <PCsSelectedForYouPartOne/>
        </div>
        
        <div className=" hidden xl:block">
        <PCsSelectedForYouPartTow/>
        </div>
        

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3  lg:gap-10 xl:gap-4 2xl:gap-5  md:gap-5 3xl:gap-5 space-y-5 md:space-y-0">
        {productdData?.map(data=> <ProductCard data={data} />)}
        </div>
      </div>
    </div>
  );
};

export default PCsSelectedForYou;