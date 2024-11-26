import CartPartOne from "./CartPartOne/CartPartOne";
import CartPartTwo from "./CartPartTwo/CartPartTwo";

const Cart = () => {
  return (
    <div>
    <section className="xl:grid grid-cols-12 gap-5">
      {/* Left Section: Cart Part One */}
      <div className="col-span-12 md:col-span-8">
        <CartPartOne />
      </div>
  
      {/* Right Section: Cart Part Two */}
      <div className="col-span-12 md:col-span-4">
        <CartPartTwo />
      </div>
    </section>
  </div>
  );
};

export default Cart;