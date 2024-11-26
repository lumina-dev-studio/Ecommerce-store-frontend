'use client'
import { useState } from "react";

const CartPartTwo = () => {
  const [shippingCost, setShippingCost] = useState(20);
  const subtotal = 6400;
  const total = subtotal + shippingCost;

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full">
      {/* Cart Totals Header */}
      <h2 className="text-xl font-bold text-gray-800 ">Cart Totals</h2>

      {/* Subtotal */}
      <div className="flex justify-between mt-4">
        <span className="text-gray-600 font-[600]">Subtotal</span>
        <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
      </div>

      {/* Shipping */}
      <div className="mt-4 border-t pt-4 lg:flex gap-20 items-center">
        <h3 className="text-gray-800 font-[600]">Shipping</h3>

        <div className="mt-2 space-y-2 w-full">
          {/* Flat Rate */}
          <label className="flex items-center space-x-2 lg:justify-end">
          <span className="text-gray-600">
              Flat rate: <span className="text-blue-500 font-[500]">$20.00</span>
            </span>
            <input
              type="radio"
              name="shipping"
              value="20"
              className="text-blue-500 focus:ring-blue-500"
              checked={shippingCost === 20}
              onChange={() => setShippingCost(20)}
            />
           
          </label>

          {/* Free Shipping */}
          <label className="flex items-center space-x-2 lg:justify-end">
          <span className="text-gray-600">Free shipping</span>
            <input
              type="radio"
              name="shipping"
              value="0"
              className="text-blue-500 focus:ring-blue-500"
              checked={shippingCost === 0}
              onChange={() => setShippingCost(0)}
            />
          
          </label>

          {/* Local Pickup */}
          <label className="flex items-center space-x-2 lg:justify-end">
          <span className="text-gray-600">
              Local pickup: <span className=" text-blue-500 font-[500]">$25.00</span>
            </span>
            <input
              type="radio"
              name="shipping"
              value="25"
              className="text-blue-500 focus:ring-blue-500"
              checked={shippingCost === 25}
              onChange={() => setShippingCost(25)}
            />
           
          </label>

             {/* Shipping Note */}
        <p className="mt-2 text-sm text-gray-500 lg:text-end">
          Shipping options will be updated during checkout.
        </p>

        {/* Calculate Shipping Link */}
        <p className="mt-2  font-[600] text-blue-500 hover:underline cursor-pointer lg:text-end">
          Calculate shipping
        </p>
        </div>

     
      </div>

      {/* Total */}
      <div className="flex justify-between mt-6 border-t pt-4">
        <span className="text-gray-800 font-[600]">Total</span>
        <span className="font-medium text-blue-600">${total.toFixed(2)}</span>
      </div>

      {/* Proceed to Checkout Button */}
      <button className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartPartTwo;
