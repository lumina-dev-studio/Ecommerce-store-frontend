import { setRightSidebarIsopen } from "@/Redux/api/RightSideBar/RightSideBarSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { RootState } from "@/Redux/store";
import Link from "next/link";
import { useState } from "react";

const RightSidebar = () => {
  const rightSideBarIsOpen = useAppSelector(
    (state: RootState) => state.rightSideBar.rightSidebarIsopen
  );
  const dispatch = useAppDispatch();

  // Example shopping cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Samsung Neo QLED 55QN85A",
      sku: "631046",
      price: 1600,
      quantity: 1,
    },
    {
      id: 2,
      name: "Asus GeForce GTX 1660 Ti TUF",
      sku: "5011633",
      price: 269,
      quantity: 1,
    },
    {
      id: 3,
      name: "Oculus Quest 2",
      sku: "608069",
      price: 449,
      quantity: 1,
    },
    {
      id: 4,
      name: "Acer ConceptD 7 Ezel",
      sku: "708069",
      price: 3800,
      quantity: 1,
    },
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle quantity changes
  const updateQuantity = (id:any, delta:any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + delta, 1),
            }
          : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id:any) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="h-full">
      <div
        className={`top-0 right-0 ${
          rightSideBarIsOpen ? "block" : "hidden"
        } fixed w-[100%] md:w-[350px]  bg-white h-full z-50 shadow-lg duration-300`}
      >
        <div className="p-5 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Shopping cart</h2>
          <button
            onClick={() => dispatch(setRightSidebarIsopen(false))}
            className="hover:text-gray-500"
          >
            X Close
          </button>
        </div>
        <hr />

        <div className="p-4 space-y-4 overflow-y-auto h-[60%] md:h-[70%]">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-10 items-center border-b pb-3"
            >
              <div>
                 <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className=" h-[50px] w-[50px] rounded-lg" />
              </div>
              <div className="flex-1 space-y-2  ">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-900">SKU: <span className="text-gray-500">{item.sku}</span></p>
                <div className="flex items-center ">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 rounded hover:bg-blue-500 hover:text-white border-s  border-b border-t "
                >
                  -
                </button>
                <p className=" border px-2 py-1">{item.quantity}</p>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 rounded hover:bg-blue-500 hover:text-white border-e  border-b border-t "
                >
                  +
                </button>
              </div>
                <p className="text-sm font-medium text-gray-400">
                  {item.quantity} x <span className="text-blue-600">${item.price.toFixed(2)}</span>
                </p>
              </div>
             
              <button
                onClick={() => removeItem(item.id)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                &times;
              </button>
            </div>
          ))}

          {cartItems.length === 0 && (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between">
            <span className="font-semibold text-lg">Subtotal:</span>
            <span className="font-semibold text-lg text-blue-600">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {subtotal > 0 && "Your order qualifies for free shipping!"}
          </p>

          <div className="my-4 space-y-2">
            <Link href="/payment/cart"
             onClick={() => dispatch(setRightSidebarIsopen(false))}
              className="w-full py-2 text-sm block text-center bg-blue-100 text-blue-500 rounded hover:bg-gray-200"
            >
              View Cart
            </Link>
            <Link href="/payment/checkOut"
             onClick={() => dispatch(setRightSidebarIsopen(false))}
              className="w-full text-sm py-2 block text-center bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Checkout
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
