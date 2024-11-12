
import Container from "@/SharedComponent/Container/Container";
import ShoppingEventPartOne from "./ShoppingEventPartOne";
import ShoppingEventPartTow from "./ShoppingEventPartTow";

const ShoppingEvent = () => {
  return (
    <div className=" bg-gradient-to-r from-red-200 via-purple-100 to-indigo-50 py-10 px-2 lg:px-5">
      <Container>

      
        <ShoppingEventPartOne/>
         <ShoppingEventPartTow/>

         </Container>
    </div>
  );
};

export default ShoppingEvent;