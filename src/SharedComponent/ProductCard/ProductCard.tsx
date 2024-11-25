'use client'
import { Card } from "@/components/ui/card";

import ProductCardImageslider from "./ProductCardImageslider";
import ProductCardPartTow from "./ProductCardPartTow";


const ProductCard = ({ data }: any) => {
 
  


  return (
    
      <Card className="w-full  p-3.5 group  shadow-sm border-none relative hover:rounded-b-none hover:scale-105 hover:shadow-xl duration-300 hover:z-20">
       <ProductCardImageslider data={data}/>
       <ProductCardPartTow data={data}/>
       
      </Card>
    
   
  );
};

export default ProductCard;
