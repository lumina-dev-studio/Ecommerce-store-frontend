import Container from "@/SharedComponent/Container/Container";
import BillingDetails from "./BillingDetails/BillingDetails";
import PaymentInformation from "./PaymentInformation/PaymentInformation";
import ShoppingCartCheckoutOrderComplete from "@/SharedComponent/ShoppingCartCheckoutOrderComplete/ShoppingCartCheckoutOrderComplete";
import YourOrder from "./YourOrder/YourOrder";
import DeliveryAndReturn from "./DeliveryAndReturn/DeliveryAndReturn";

const CheckOut = () => {
  return (
    <Container>
         <ShoppingCartCheckoutOrderComplete condition="Checkout"/>
         <div className=" lg:grid grid-cols-2 gap-5">

        
        <form  className=" space-y-5 mb-5">
        <BillingDetails/>
        <PaymentInformation/>
        </form>

        <div >
            <YourOrder/>
            <DeliveryAndReturn/>
        </div>

        </div>
    
    </Container>
  );
};

export default CheckOut;