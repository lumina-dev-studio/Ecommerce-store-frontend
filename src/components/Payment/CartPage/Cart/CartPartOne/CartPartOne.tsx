"use client"
import { useState } from "react";

const CartPartOne = () => {
  const [quantity, setQuantity] = useState(4);
  const price = 1600;
  const subtotal = quantity * price;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className=" w-full bg-gray-100 my-5">
      {/* Free Shipping Bar */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <p className="text-sm font-medium text-gray-500">Your order qualifies for free shipping!</p>
        <div className="mt-2 w-full h-2 bg-gray-200 rounded">
          <div className="h-full  bg-blue-500 rounded"></div>
        </div>
      </div>

      {/* Cart Table */}
      <div className="bg-white p-6 rounded-lg shadow">
       <section className=" hidden lg:block">
       <table className="w-full text-left border-collapse ">
          <thead>
            <tr>
              <th className="py-2 border-b text-center">PRODUCT</th>
              <th className="py-2 border-b ">PRICE</th>
              <th className="py-2 border-b text-center">QUANTITY</th>
              <th className="py-2 border-b text-center">SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 border-b flex items-center">
                <button className="mr-4 text-red-500 hover:text-red-700">
                  ✕
                </button>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Samsung Neo QLED 55QN85A"
                  className="w-16 h-16 rounded"
                />
                <p className="ml-4 text-sm">Samsung Neo QLED 55QN85A</p>
              </td>
              <td className="py-4 border-b text-gray-500  ">${price.toFixed(2)}</td>
              <td className="py-4 border-b">
                <div className="flex items-center justify-center  ">
                  <button
                    className="px-2 py-1  rounded hover:bg-blue-500 hover:text-white border-s border-t border-b"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <span className="px-4 border py-1">{quantity}</span>
                  <button
                    className="px-2 py-1  rounded hover:bg-blue-500 hover:text-white border-e border-t border-b"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-4 border-b text-blue-500 font-[500] text-center">${subtotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
       </section>

  {/* for small device start */}
        <section className=" flex lg:hidden w-full items-center gap-2 ">

          <div className=" h-full">
          <img
                  src="https://via.placeholder.com/100"
                  alt="Samsung Neo QLED 55QN85A"
                  className="w-16 h-16 rounded"
                />
          </div>

          <div className=" w-full space-y-2">
           <div className=" flex justify-between gap-5">
           <p className="ml-4 text-sm">Samsung Neo QLED 55QN85A</p>
           <button className="mr-4 text-red-500 hover:text-red-700">
                  ✕
                </button>
           </div>
           <div className=" flex justify-between">
           <p className="ml-4 text-sm">Price</p>
           <p className="ml-4 text-sm">${price.toFixed(2)}</p>
          
           </div>
           <div className=" flex justify-between">
           <p className="ml-4 text-sm">Quantity</p>
           <div className="flex items-center justify-center  ">
                  <button
                    className="px-2   rounded hover:bg-blue-500 hover:text-white border-s border-t border-b"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <span className="px-4 border ">{quantity}</span>
                  <button
                    className="px-2   rounded hover:bg-blue-500 hover:text-white border-e border-t border-b"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
          
           </div>
           <div className=" flex justify-between">
           <p className="ml-4 text-sm">Subtotal</p>
           <p className="ml-4 text-sm">${subtotal.toFixed(2)}</p>
          
           </div>

          </div>

          
        </section>
        {/* for small device end */}

        {/* Coupon Input */}
        <div className="mt-6 lg:flex items-center  lg:w-[50%] space-y-3 lgspace-y-0:">
          <input
            type="text"
            placeholder="Coupon code"
            className="flex-1 w-full lg:w-[200px] p-2 mt-2 border rounded focus:outline-blue-500"
          />
          <button className="lg:ml-2 px-4 py-2 w-full lg:w-[150px] bg-blue-500 text-white rounded hover:bg-blue-600">
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPartOne;
