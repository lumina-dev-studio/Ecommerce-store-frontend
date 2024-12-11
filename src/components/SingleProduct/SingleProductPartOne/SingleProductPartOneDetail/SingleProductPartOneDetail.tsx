import { FaFacebookF, FaPinterest, FaXTwitter } from "react-icons/fa6";
import { IoEyeOutline, IoShuffle } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";
import { RiTelegramLine } from "react-icons/ri";


const SingleProductPartOneDetail = () => {
  return (

        <div className="  p-6  ">
          {/* Product title */}
          <h1 className="text-[25px] font-bold text-gray-800">
            Samsung Neo QLED 55QN85A
          </h1>
          
          {/* Reviews and SKU */}
          <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="flex items-center text-[20px] text-yellow-500">
                ★★★★☆
              </span>
              <span className="ml-2">(2 customer reviews)</span>
            </div>
            <span>SKU: 631046</span>
          </div>
    
          {/* Promo Section */}
          <div className="mt-4 p-4 bg-[#E8EFFD] rounded-lg flex justify-between items-center">
            <div className=" flex gap-3 items-center">

                <div>
                <PiNotePencilLight className=" text-[30px] text-blue-500" />

                </div>
             <div className=" space-y-2">
             <h2 className="font-semibold text-gray-900">Apple Shopping Event</h2>
              <p className="text-sm text-gray-500">
                Hurry and get discounts on all Apple devices up to 20%
              </p>
             </div>
            </div>
            <button className=" text-blue-500 font-semibold text-xs px-3 py-3 rounded border border-blue-500" >
              Sale_coupon_15
            </button>
          </div>
    
          {/* Price Section */}
          <div className="mt-6 text-3xl font-bold text-blue-600">$1,600.00</div>
    
          {/* Quantity and Buttons */}
          <div className="mt-4 flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border rounded">
              <button className="px-2 py-2 text-gray-600 border-r hover:bg-gray-100">-</button>
              <input
                type="text"
                className="w-8 text-center outline-none"
                defaultValue="1"
              />
              <button className="px-2 py-2 text-gray-600 border-l hover:bg-gray-100">+</button>
            </div>
    
            {/* Action Buttons */}
            <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 block w-full">
              Add To Cart
            </button>
            <button className="px-6 py-2 text-white bg-[#5F9E2C] rounded hover:bg-green-700  block w-full">
              Buy Now
            </button>
          </div>
         
    
          {/* Compare and Wishlist */}

          <div className=" flex justify-between">
          <div className="mt-4 flex items-center gap-6 text-sm text-gray-600 font-[600]">
            
            <button className="flex items-center hover:text-gray-800 ">
              <span className="mr-2"><IoShuffle  className="  text-[20px] " /></span> Compare
            </button>
            <button className="flex items-center hover:text-gray-800 ">
              <span className="mr-2 text-[20px] ">♡</span> Add to wishlist
            </button>
          </div>
    
          {/* Social Share */}
          <div className="mt-6 flex items-center gap-1  text-sm text-gray-600 font-[600]">
            <span className="">Share:</span>
            <div className="flex items-center gap-1">
              <a href="#" className="hover:text-blue-600 text-[15px]"><FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-600 text-[15px]"><FaXTwitter />
              </a>
              <a href="#" className="hover:text-blue-600 text-[15px]"><FaPinterest />
              </a>
              <a href="#" className="hover:text-blue-600 text-[15px]"><RiTelegramLine />
              </a>
            </div>
          </div>
          </div>

            {/* Watching Info */}
      <div className="p-4  rounded-lg bg-[#E8EFFC] flex items-center gap-2 my-5">
        <span className="text-xl text-[15px]"><IoEyeOutline />
        </span>
        <p className="text-sm font-medium text-gray-500">
          <strong className=" font-[600] text-black me-2">20</strong> People watching this product now!
        </p>
      </div>
          
    <div className="max-w-4xl mx-auto border py-3 px-2 bg-white rounded-xl shadow-sm  mt-6">
    

      {/* Delivery Options */}
      <div className="p-3 space-y-4">
        {/* Pickup Option */}
        <div className="flex justify-between items-cente pb-4">
          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-xl">🏬</span>
            <div>
              <p className="font-semibold">Pick up from the Woodmart Store</p>
              <p className="text-sm text-gray-600">To pick up today</p>
            </div>
          </div>
        
          <p className="font-medium text-gray-800">Free</p>
        </div>

        {/* Courier Delivery */}
        <div className="flex justify-between items-center  pb-4">
          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-xl">🚚</span>
            <div>
              <p className="font-semibold">Courier delivery</p>
              
              <p className="text-sm text-gray-600">
                Our courier will deliver to the specified address
              </p>
            </div>
          </div>
          <p className=" text-gray-500 text-[14px]">2-3 Days</p>
          <p className="font-medium text-gray-800">Free</p>
        </div>

        {/* DHL Delivery */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-yellow-500 text-xl">📦</span>
            <div>
              <p className="font-semibold">DHL Courier delivery</p>
              <p className="text-sm text-gray-600">
                DHL courier will deliver to the specified address
              </p>
            </div>
          </div>
          <p className=" text-gray-500 text-[14px]">1-3 Days</p>
          <p className="font-medium text-gray-800">Free</p>
        </div>
      </div>
      </div>

      {/* Warranty and Returns */}
      <div className="max-w-4xl mx-auto border py-3 px-2 bg-white rounded-xl shadow-sm  mt-6">
      <div className="p-3 space-y-4 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-xl">🛡️</span>
            <p className="font-semibold">Warranty 1 year</p>
          </div>
          <a href="#" className="text-blue-500 text-md hover:underline">
            More details
          </a>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-xl">📦</span>
            <p className="font-semibold">Free 30-Day returns</p>
          </div>
          <a href="#" className="text-blue-500 text-md hover:underline">
            More details
          </a>
        </div>
      </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-6 ">
       
        <div className="mt-2 flex items-center gap-4">
        <p className=" text-gray-800 font-[600]">Payment Methods:</p>
          <img
            src="https://www.playcasino.com/img/payment/Visa%20Card__200_17.png" // Replace with your own icons
            alt="Visa"
            className="w-12 block border p-0.5 rounded-lg"
          />
          <img
            src="https://www.playcasino.com/img/payment/Visa%20Card__200_17.png" // Replace with your own icons
            alt="Visa"
            className="w-12 block border p-0.5 rounded-lg"
          />
          <img
            src="https://www.playcasino.com/img/payment/Visa%20Card__200_17.png" // Replace with your own icons
            alt="Visa"
            className="w-12 block border p-0.5 rounded-lg"
          />
          <img
            src="https://www.playcasino.com/img/payment/Visa%20Card__200_17.png" // Replace with your own icons
            alt="Visa"
            className="w-12 block border p-0.5 rounded-lg"
          />
        
        </div>
      </div>
  
          
        </div>
  );
};

export default SingleProductPartOneDetail;