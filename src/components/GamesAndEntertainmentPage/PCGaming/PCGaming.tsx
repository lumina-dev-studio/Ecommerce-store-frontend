'use client'
import { Card } from "@/components/ui/card";
import { useGetAllProdectQuery } from "@/Redux/api/Product/productApi";
import ProductCard from "@/SharedComponent/ProductCard/ProductCard";
import ProductCardImageslider from "@/SharedComponent/ProductCard/ProductCardImageslider";
import ProductCardPartTow from "@/SharedComponent/ProductCard/ProductCardPartTow";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const PCGaming = () => {
    const {data,isLoading}=useGetAllProdectQuery('')
  
  
  if(isLoading){
    return <>Loading...</>
  }
  
  const  productData=  data?.data
  
  
    

    return (
      <div className="my-10">
      {/* Section Title */}
      <SectionTitle title="PC Gaming" condition={true} />
      {/* Cards Grid */}
      <div className="grid   grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-5 place-items-center  ">
      {productData?.map((a:any)=> <ProductCard data={a} />)}
        </div>
        
      </div>
  );
};

export default PCGaming;