import { Card } from "@/components/ui/card";
import ProductCard from "@/SharedComponent/ProductCard/ProductCard";
import ProductCardImageslider from "@/SharedComponent/ProductCard/ProductCardImageslider";
import ProductCardPartTow from "@/SharedComponent/ProductCard/ProductCardPartTow";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const PCGaming = () => {
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
    {
      id:4,
      images : [
        "/bannar/camera.png", 
        "/bannar/headPhone.png", 
        "/bannar/joypad.png", 
        "/bannar/camera.png", 
        "/bannar/headPhone.png"
    ],
    price:3000 },
    {
      id:5,
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
      <div className="my-10">
      {/* Section Title */}
      <SectionTitle title="PC Gaming" condition={true} />
      {/* Cards Grid */}
      <div className="grid   grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-5 place-items-center  ">
      {productdData?.map(data=> <ProductCard data={data} />)}
        </div>
        
      </div>
  );
};

export default PCGaming;