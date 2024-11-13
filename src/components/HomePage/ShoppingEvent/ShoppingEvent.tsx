
import Container from "@/SharedComponent/Container/Container";
import ShoppingEventPartOne from "./ShoppingEventPartOne";
import ShoppingEventPartTow from "./ShoppingEventPartTow";

const ShoppingEvent = () => {
  const data = [1, 2, 3, 4, 5, 6, 7]; // Example data
  return (
    <div className=" bg-gradient-to-r from-red-200 via-purple-100 to-indigo-50 py-10 px-2 lg:px-5">
      <Container>

      
        <ShoppingEventPartOne/>
         <ShoppingEventPartTow data={data}/>

         </Container>
    </div>
  );
};

export default ShoppingEvent;