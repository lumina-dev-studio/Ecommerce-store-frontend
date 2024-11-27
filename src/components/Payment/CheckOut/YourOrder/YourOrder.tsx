'use client'
import React, { useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const YourOrder = () => {
  // State for product quantity, shipping cost, and subtotal
  const [quantity, setQuantity] = useState(2); // Default quantity is 2
  const [shipping, setShipping] = useState(20); // Default shipping value
  const pricePerItem = 449; // Price per product
  const subtotal = quantity * pricePerItem; // Calculate subtotal dynamically
  const total = subtotal + shipping; // Calculate total dynamically

  // Handlers for updating the quantity
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Your Order</h2>

      {/* Product Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="font-[600]">PRODUCT</h3>
          <h3 className="font-[600]">SUBTOTAL</h3>
        </div>
        <div className="md:flex items-center justify-between py-4 border-b">
          {/* Product Image and Info */}
          <div className="flex items-center space-x-4">
          <button className="mr-4 text-red-500 hover:text-red-700">
                  ✕
                </button>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Samsung Neo QLED 55QN85A"
                  className="w-16 h-16 rounded"
                />
            <div>
              <p className="font-medium mb-2">Oculus Quest 2</p>
              <div className="flex items-center justify-center">
                <button
                  className="px-2 py-1 rounded hover:bg-blue-500 hover:text-white border-s border-t border-b"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="px-4 border py-1">{quantity}</span>
                <button
                  className="px-2 py-1 rounded hover:bg-blue-500 hover:text-white border-e border-t border-b"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Subtotal */}
          <p className="font-medium text-gray-500 text-end me-5 md:me-0 mt-2">${subtotal.toFixed(2)}</p>
        </div>
      </div>

      {/* Order Totals */}
      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between border-b pb-4">
          <p className="font-semibold">Subtotal</p>
          <p className="font-[600] text-blue-500">${subtotal.toFixed(2)}</p>
        </div>

        {/* Shipping Options */}
        <div className="border-b pb-4">
          <RadioGroup
            defaultValue="flat-rate"
            onValueChange={(value) => {
              const shippingCost = value === "flat-rate" ? 20 : 25;
              setShipping(shippingCost);
            }}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">Shipping</p>
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-end md:space-x-2   ms-12">
                    <Label htmlFor="flat-rate">Flat rate:</Label>
                    <p className="font-[600] text-blue-500 ">$20.00</p>
                    <RadioGroupItem id="flat-rate" value="flat-rate" />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 ms-6">
                  <div className="flex items-center justify-end md:space-x-2">
                    <Label htmlFor="local-pickup">Local pickup:</Label>
                    <p className="font-[600] text-blue-500">$25.00</p>
                    <RadioGroupItem id="local-pickup" value="local-pickup" />
                  </div>
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Total */}
        <div className="flex justify-between">
          <p className="font-semibold text-lg">Total</p>
          <p className="font-semibold text-lg text-blue-500">
            ${total.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Free Shipping Progress */}
      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-2">
          Add <span className="text-blue-600 font-medium">$2,602.00</span> to
          cart and get free shipping!
        </p>
        <Progress value={(subtotal / 3500) * 100} className="w-full h-2 rounded  bg-gray-200" />
      </div>
    </div>
  );
};

export default YourOrder;
