import { MdArrowRightAlt } from "react-icons/md";

const ShoppingCartCheckoutOrderComplete = ({condition}:any) => {
  return (
    <div className=" bg-blue-500 rounded-lg p-5 mt-20 lg:mt-20 xl:mt-5 text-center lg:p-14 lg:flex justify-center items-center gap-3 my-5">
      <h1 className={` ${condition==="ShoppingCart"?"text-white": "text-gray-300/70"} 
      ${condition!=="ShoppingCart"?" hidden lg:block": ""} 
      text-[22px] font-[600] uppercase`}>Shopping cart</h1>
        <MdArrowRightAlt className=" hidden lg:block  text-gray-300/90 text-[30px]" />

      <h1 className={` ${condition==="Checkout"?"text-white": "text-gray-300/70"} 
       ${condition!=="Checkout"?" hidden lg:block": ""} 
      text-[22px] font-[600] uppercase`}>Checkout</h1>
      <MdArrowRightAlt className=" hidden lg:block  text-gray-300/90 text-[30px]" />

      <h1 className={` ${condition==="OrderComplete"?"text-white": "text-gray-300/70"}
       ${condition!=="OrderComplete"?" hidden lg:block": ""} 
      text-[22px] font-[600] uppercase`}>Order complete</h1>
    </div>
  );
};

export default ShoppingCartCheckoutOrderComplete;