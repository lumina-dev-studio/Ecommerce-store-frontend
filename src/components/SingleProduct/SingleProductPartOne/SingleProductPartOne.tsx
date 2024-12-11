import Container from "@/SharedComponent/Container/Container";
import SingleProductPartOneDetail from "./SingleProductPartOneDetail/SingleProductPartOneDetail";
import SingleProductPartOneSlider from "./SingleProductPartOneSlider/SingleProductPartOneSlider";

const SingleProductPartOne = () => {
  return (
    <Container>

   
    <div className=" grid md:grid-cols-2 bg-white rounded-md shadow-md">
      <SingleProductPartOneSlider/>
      <SingleProductPartOneDetail/>
    </div>
    </Container>
  );
};

export default SingleProductPartOne;