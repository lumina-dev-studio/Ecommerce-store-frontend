
'use client'
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";
import NewGoodsAdvertise from "./NewGoodsAdvertise";
import ProductCard from "@/SharedComponent/ProductCard/ProductCard";
import { useGetAllProdectQuery } from "@/Redux/api/Product/productApi";

const NewGoods = () => {
  const {data,isLoading}=useGetAllProdectQuery('')
 
 
 if(isLoading){
   return <>Loading...</>
 }
 
 const  productData=  data?.data
 

      
  return (
    <div className=" my-20 lg:flex gap-5">
        <div className=" hidden lg:inline-flex">
        <NewGoodsAdvertise/>
        </div>
      
        
        <div className=" w-full">
       <SectionTitle title="New Goods" condition={true} />

       <div className=" w-full grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4  md:justify-center gap-5 ">
       {productData?.map((a:any)=> <ProductCard data={a} />)}
    
    </div>
       </div>
    </div>
  );
};

export default NewGoods;