import Container from "@/SharedComponent/Container/Container";
import ShoppingCartCheckoutOrderComplete from "@/SharedComponent/ShoppingCartCheckoutOrderComplete/ShoppingCartCheckoutOrderComplete";
import Cart from "./Cart/Cart";
import YouMayBeInterestedIn from "./YouMayBeInterestedIn/YouMayBeInterestedIn";

const CartPage = () => {
  return (
    <Container>
      <ShoppingCartCheckoutOrderComplete condition="ShoppingCart"/>
      <Cart/>
      <YouMayBeInterestedIn/>
    </Container>
  );
};

export default CartPage;