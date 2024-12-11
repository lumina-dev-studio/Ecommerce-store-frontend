import Container from "@/SharedComponent/Container/Container";
import SingleProductPartTwoDescription from "./SingleProductPartTwoDescription/SingleProductPartTwoDescription";
import SingleProductPartTwoSpecification from "./SingleProductPartTwoSpecification/SingleProductPartTwoSpecification";

const SingleProductPartTwo = () => {
  return (
    <Container>
        <div className=" grid md:grid-cols-2 gap-5">

       
        <SingleProductPartTwoDescription/>
        <SingleProductPartTwoSpecification/>
        </div>
    </Container>
  );
};

export default SingleProductPartTwo;