import RelatedProducts from "./RelatedProducts/RelatedProducts";
import SingleProductPartOne from "./SingleProductPartOne/SingleProductPartOne";
import SingleProductPartThree from "./SingleProductPartThree/SingleProductPartThree";
import SingleProductPartTwo from "./SingleProductPartTwo/SingleProductPartTwo";

const SingleProduct = () => {
  return (
    <div>
      <SingleProductPartOne/>
      <SingleProductPartTwo/>
      <SingleProductPartThree/>
      <RelatedProducts/>
    </div>
  );
};

export default SingleProduct;