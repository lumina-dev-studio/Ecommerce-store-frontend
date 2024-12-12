import Container from "@/SharedComponent/Container/Container";
import SingleProductPartOneDetail from "./SingleProductPartOneDetail/SingleProductPartOneDetail";
import SingleProductPartOneSlider from "./SingleProductPartOneSlider/SingleProductPartOneSlider";

const SingleProductPartOne = () => {
  return (
    <Container>

   
    <div className=" grid lg:grid-cols-2 bg-white rounded-md shadow-md mt-20 xl:mt-10">
      <SingleProductPartOneSlider/>
      <SingleProductPartOneDetail/>
    </div>
    </Container>
  );
};

export default SingleProductPartOne;