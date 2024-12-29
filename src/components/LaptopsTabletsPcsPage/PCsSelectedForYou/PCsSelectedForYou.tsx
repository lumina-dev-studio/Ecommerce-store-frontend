'use client'
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";
import PCsSelectedForYouPartOne from "./PCsSelectedForYouPartOne/PCsSelectedForYouPartOne";
import PCsSelectedForYouPartTow from "./PCsSelectedForYouPartTow/PCsSelectedForYouPartTow";

import ProductCard from "@/SharedComponent/ProductCard/ProductCard";
import { useGetAllProdectQuery } from "@/Redux/api/Product/productApi";

const PCsSelectedForYou = () => {
   const {data,isLoading}=useGetAllProdectQuery('')
 
 
 if(isLoading){
   return <>Loading...</>
 }
 
 const  productData=  data?.data
     
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
        {productData?.map((a:any)=> <ProductCard data={a} />)}
        </div>
      </div>
    </div>
  );
};

export default PCsSelectedForYou;