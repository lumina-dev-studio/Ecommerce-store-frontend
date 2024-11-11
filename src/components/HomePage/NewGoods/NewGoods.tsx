import { Card } from "@/components/ui/card";

import ProductCardImageslider from "@/SharedComponent/ProductCard/ProductCardImageslider";
import ProductCardPartTow from "@/SharedComponent/ProductCard/ProductCardPartTow";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";
import NewGoodsAdvertise from "./NewGoodsAdvertise";

const NewGoods = () => {
  return (
    <div className=" my-20 lg:flex gap-5">
        <section className=" hidden lg:inline-flex">
        <NewGoodsAdvertise/>
        </section>
      
        
        <section>
       <SectionTitle title="New Goods" condition={true} />

       <div className=" grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4  justify-center gap-5 ">
      <Card className="w-[250px]  p-3.5 group   shadow-sm border-none relative hover:rounded-b-none  hover:scale-105 hover:shadow-xl duration-300 hover:z-20">
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
      <Card className="w-[250px]  p-3.5 group shadow-sm border-none relative hover:rounded-b-none  hover:scale-105 hover:shadow-xl duration-300 hover:z-20">
       <ProductCardImageslider/>
       <ProductCardPartTow/>
       
      </Card>
    
    </div>
       </section>
    </div>
  );
};

export default NewGoods;