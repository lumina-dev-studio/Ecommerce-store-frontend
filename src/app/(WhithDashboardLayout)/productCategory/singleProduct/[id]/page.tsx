'use client'
import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { useGetSingleProductQuery } from "@/Redux/api/Product/productApi";

const page = ({params}:any) => {


  const {id}=params
  const {data,isLoading}=useGetSingleProductQuery(id);


  
  
  if(isLoading){
    return <>Loading...</>

   
  }
  
  const  productData=  data?.data;

  console.log(productData,'lll')
  return (
    <div >
        <SingleProduct data={productData}/>
      
    </div>
  );
};

export default page;