import Container from "@/SharedComponent/Container/Container";
import SingleProductPartOneDetail from "./SingleProductPartOneDetail/SingleProductPartOneDetail";
import SingleProductPartOneSlider from "./SingleProductPartOneSlider/SingleProductPartOneSlider";

const SingleProductPartOne = ({data}:any) => {
  return (
    <Container>

   
    <div className=" grid lg:grid-cols-2 bg-white rounded-md shadow-md mt-20 xl:mt-10">
      <SingleProductPartOneSlider data={data}/>
      <SingleProductPartOneDetail data={data}/>
    </div>
    </Container>
  );
};

export default SingleProductPartOne;