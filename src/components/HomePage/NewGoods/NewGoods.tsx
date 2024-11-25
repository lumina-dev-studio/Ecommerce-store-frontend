
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";
import NewGoodsAdvertise from "./NewGoodsAdvertise";
import ProductCard from "@/SharedComponent/ProductCard/ProductCard";

const NewGoods = () => {
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
   


  ]
      
  return (
    <div className=" my-20 lg:flex gap-5">
        <section className=" hidden lg:inline-flex">
        <NewGoodsAdvertise/>
        </section>
      
        
        <section>
       <SectionTitle title="New Goods" condition={true} />

       <div className=" grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4  justify-center gap-5 ">
       {productdData?.map(data=> <ProductCard data={data} />)}
    
    </div>
       </section>
    </div>
  );
};

export default NewGoods;