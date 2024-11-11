'use client'
import { Card } from "@/components/ui/card";

import ProductCardImageslider from "./ProductCardImageslider";
import ProductCardPartTow from "./ProductCardPartTow";


const ProductCard = ({ data }: any) => {
  // Array of image URLs for the slider


  return (
    <div className=" grid xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 ">
      <Card className="w-[250px]  p-3.5 group  shadow-sm border-none relative hover:rounded-b-none hover:scale-105 hover:shadow-xl duration-300 hover:z-20">
       <ProductCardImageslider/>
       <ProductCardPartTow/>
       
      </Card>
      <Card className="w-[250px]  p-3.5 group  shadow-sm border-none relative hover:rounded-b-none hover:scale-105 hover:shadow-xl duration-300 hover:z-20">
       <ProductCardImageslider/>
       <ProductCardPartTow/>
       
      </Card>
      <Card className="w-[250px]  p-3.5 group shadow-sm border-none relative hover:rounded-b-none  hover:scale-105 hover:shadow-xl duration-300 hover:z-20">
       <ProductCardImageslider/>
       <ProductCardPartTow/>
       
      </Card>
      <Card className="w-[250px]  p-3.5 group shadow-sm border-none relative  hover:rounded-b-none hover:scale-105 hover:shadow-xl duration-300 hover:z-20">
       <ProductCardImageslider/>
       <ProductCardPartTow/>
       
      </Card>
      <Card className="w-[250px]  p-3.5 group shadow-sm border-none relative hover:rounded-b-none  hover:scale-105 hover:shadow-xl duration-300 hover:z-20">
       <ProductCardImageslider/>
       <ProductCardPartTow/>
       
      </Card>
    </div>
  );
};

export default ProductCard;
