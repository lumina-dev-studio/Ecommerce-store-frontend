'use client'
import { useGetSingleProductQuery } from "@/Redux/api/Product/productApi";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import SingleProductPartOne from "./SingleProductPartOne/SingleProductPartOne";
import SingleProductPartThree from "./SingleProductPartThree/SingleProductPartThree";
import SingleProductPartTwo from "./SingleProductPartTwo/SingleProductPartTwo";

const SingleProduct = ({data}:any) => {

  
  

  return (
    <div>
      <SingleProductPartOne data={data}/>
      <SingleProductPartTwo data={data}/>
      <SingleProductPartThree/>
      <RelatedProducts/>
    </div>
  );
};

export default SingleProduct;