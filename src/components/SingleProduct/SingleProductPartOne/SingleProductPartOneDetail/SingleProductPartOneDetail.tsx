import {
  FaFacebookF,
  FaPinterest,
  FaXTwitter
} from "react-icons/fa6";
import { IoEyeOutline, IoShuffle } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";
import { RiTelegramLine } from "react-icons/ri";

const SingleProductPartOneDetail = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Product Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        Samsung Neo QLED 55QN85A
      </h1>

      {/* Reviews and SKU */}
      <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-lg">★★★★☆</span>
          <span>(2 customer reviews)</span>
        </div>
        <span>SKU: 631046</span>
      </div>

      {/* Promo Section */}
      <div className="flex flex-wrap items-center justify-between p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <PiNotePencilLight className="text-2xl text-blue-500" />
          <div>
            <h2 className="font-semibold text-gray-900">Apple Shopping Event</h2>
            <p className="text-sm text-gray-500">
              Hurry and get discounts on all Apple devices up to 20%
            </p>
          </div>
        </div>
        <button className="px-4 py-2 text-blue-500 font-semibold border border-blue-500 rounded">
          Sale_coupon_15
        </button>
      </div>

      {/* Price Section */}
      <div className="text-3xl font-bold text-blue-600">$1,600.00</div>

      {/* Quantity and Buttons */}
      <div className="flex flex-wrap items-center space-y-4 lg:space-y-0 gap-4">
        <div className="flex items-center border rounded">
          <button className="px-3 py-2 text-gray-600 border-r hover:bg-gray-100">-</button>
          <input
            type="text"
            className="w-10 text-center outline-none"
            defaultValue="1"
          />
          <button className="px-3 py-2 text-gray-600 border-l hover:bg-gray-100">+</button>
        </div>
        <button className="flex-grow px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Add To Cart
        </button>
        <button className="flex-grow px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700">
          Buy Now
        </button>
      </div>

      {/* Compare and Wishlist */}
      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex space-x-6 text-sm font-semibold text-gray-600">
          <button className="flex items-center space-x-2 hover:text-gray-800">
            <IoShuffle className="text-lg" /> <span>Compare</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-800">
            <span className="text-lg">♡</span> <span>Add to wishlist</span>
          </button>
        </div>
        <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600">
          <span>Share:</span>
          <div className="flex space-x-2">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-600"><FaXTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaPinterest /></a>
            <a href="#" className="hover:text-blue-600"><RiTelegramLine /></a>
          </div>
        </div>
      </div>

      {/* Watching Info */}
      <div className="flex items-center p-4 bg-blue-50 rounded-lg space-x-2">
        <IoEyeOutline className="text-lg" />
        <p className="text-sm font-medium text-gray-500">
          <strong className="font-semibold text-black">20</strong> people are watching this product now!
        </p>
      </div>

      {/* Delivery Options */}
      <div className="space-y-6 p-4 bg-white rounded-xl shadow-sm">
        {[
          {
            icon: "🏬",
            title: "Pick up from the Woodmart Store",
            subtitle: "To pick up today",
            price: "Free",
          },
          {
            icon: "🚚",
            title: "Courier delivery",
            subtitle: "Our courier will deliver to the specified address",
            time: "2-3 Days",
            price: "Free",
          },
          {
            icon: "📦",
            title: "DHL Courier delivery",
            subtitle: "DHL courier will deliver to the specified address",
            time: "1-3 Days",
            price: "Free",
          },
        ].map(({ icon, title, subtitle, time, price }, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-b pb-4 last:border-b-0"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl text-blue-500">{icon}</span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-gray-600">{subtitle}</p>
              </div>
            </div>
            <div className="text-right">
              {time && <p className="text-sm text-gray-500">{time}</p>}
              <p className="font-medium text-gray-800">{price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Warranty and Returns */}
      <div className="space-y-4 p-4 bg-white rounded-xl shadow-sm">
        {[
          {
            icon: "🛡️",
            title: "Warranty 1 year",
          },
          {
            icon: "📦",
            title: "Free 30-Day returns",
          },
        ].map(({ icon, title }, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-b pb-4 last:border-b-0"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl text-blue-500">{icon}</span>
              <p className="font-semibold">{title}</p>
            </div>
            <a href="#" className="text-blue-500 hover:underline">More details</a>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div>
        <p className="font-semibold text-gray-800">Payment Methods:</p>
        <div className="flex items-center space-x-4 mt-2">
          {Array(4)
            .fill(
              "https://www.playcasino.com/img/payment/Visa%20Card__200_17.png"
            )
            .map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Visa"
                className="w-12 border p-0.5 rounded-lg"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPartOneDetail;