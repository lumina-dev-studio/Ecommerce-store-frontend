import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";
import PCsSelectedForYouPartOne from "./PCsSelectedForYouPartOne/PCsSelectedForYouPartOne";
import PCsSelectedForYouPartTow from "./PCsSelectedForYouPartTow/PCsSelectedForYouPartTow";
import { Card } from "../../ui/card";
import ProductCardImageslider from "@/SharedComponent/ProductCard/ProductCardImageslider";
import ProductCardPartTow from "@/SharedComponent/ProductCard/ProductCardPartTow";

const PCsSelectedForYou = () => {
  return (
    <div className=" my-20">
      <SectionTitle title="PCs Selected for You" condition={true} />

      <div className="  flex gap-5 justify-center   3xl:gap-10">
        <section className=" hidden xl:block">
        <PCsSelectedForYouPartOne/>
        </section>
        
        <section className=" hidden xl:block">
        <PCsSelectedForYouPartTow/>
        </section>
        

        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-10 2xl:gap-5 md:gap-20 3xl:gap-10 space-y-5 md:space-y-0">
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
        </section>
      </div>
    </div>
  );
};

export default PCsSelectedForYou;