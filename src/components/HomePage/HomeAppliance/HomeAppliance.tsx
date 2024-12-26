'use client'

import { useGetAllProdectQuery } from "@/Redux/api/Product/productApi";
import ProductCard from "@/SharedComponent/ProductCard/ProductCard";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const HomeAppliance = () => {
 const {data,isLoading}=useGetAllProdectQuery('')
 
 
 if(isLoading){
   return <>Loading...</>
 }
 
 const  productData=  data?.data
 
  return (
    <div className=" my-20">
       <SectionTitle title="Home Appliance" condition={true} />

      
       <div className=" w-full grid xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 md:justify-center gap-5 ">
       {productData?.map((a:any)=> <ProductCard data={a} />)}
        
       </div>
    </div>
  );
};

export default HomeAppliance;