'use client'
import Container from "@/SharedComponent/Container/Container";
import React, { useState } from "react";

const SingleProductPartThree = () => {
  const [rating, setRating] = useState(0);
  const [valueForMoney, setValueForMoney] = useState(0);
  const [durability, setDurability] = useState(0);
  const [deliverySpeed, setDeliverySpeed] = useState(0);
  const [review, setReview] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      name,
      email,
      rating,
      valueForMoney,
      durability,
      deliverySpeed,
      review,
      pros,
      cons,
      termsAccepted,
    });
  };

  return (
    <Container>
      <div className="p-6 grid grid-cols-2 gap-10 bg-white shadow-md my-10 rounded-md">
        {/* Overall Rating Display */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <p className="text-5xl font-bold">5</p>
          <p className="text-yellow-500 text-2xl mb-2">★★★★★</p>
          <p className="text-gray-600">3 reviews</p>

          <div className="mt-4">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center space-x-2">
                <p className="text-gray-800">{star} stars</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className={star === 5 ? "h-2 bg-blue-500 rounded" : "h-2 bg-gray-200"}
                    style={{ width: star === 5 ? "100%" : "0%" }}
                  ></div>
                </div>
                <p className="text-gray-800">{star === 5 ? 3 : 0}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add a Review */}
        <div className=" pt-6">
          <h3 className="text-xl font-semibold mb-4">Add a review</h3>
          <p className="mb-5 text-gray-500">Your email address will not be published. Required fields are marked *</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
          

            {/* Rating */}
            <div className=" flex  gap-[42px] items-center">
              <label className="block text-gray-700 font-medium mb-2">Your rating: <span className=" text-red-500 text-[15px]">*</span></label>
              <div className="flex space-x-2 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={star <= rating ? "text-yellow-500" : "text-gray-300"}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Value for Money */}
            <div className=" flex  gap-[15px] items-center">
              <label className="block text-gray-700 font-medium mb-2">Value for money:</label>
              <div className="flex space-x-2 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={star <= valueForMoney ? "text-yellow-500" : "text-gray-300"}
                    onClick={() => setValueForMoney(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Durability */}
            <div className=" flex  gap-[63px] items-center">
              <label className="block text-gray-700 font-medium mb-2">Durability:</label>
              <div className="flex space-x-2 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={star <= durability ? "text-yellow-500" : "text-gray-300"}
                    onClick={() => setDurability(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Speed */}
            <div className=" flex  gap-[23px] items-center">
              <label className="block text-gray-700 font-medium mb-2">Delivery speed:</label>
              <div className="flex space-x-2 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={star <= deliverySpeed ? "text-yellow-500" : "text-gray-300"}
                    onClick={() => setDeliverySpeed(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

           <div className=" pt-5">          {/* Review Text */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your review <span className=" text-red-500 text-[15px]">*</span></label>
              <textarea
                className="w-full p-2 border rounded focus:ring focus:outline-none h-[150px]"
                
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Pros */}
            <div className=" mt-5">
              <label className="block text-gray-700 font-medium mb-2">Pros</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:ring focus:outline-none"
                value={pros}
                onChange={(e) => setPros(e.target.value)}
              />
            </div>

            {/* Cons */}
            <div className=" mt-5">
              <label className="block text-gray-700 font-medium mb-2">Cons</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:ring focus:outline-none"
                value={cons}
                onChange={(e) => setCons(e.target.value)}
              />
            </div>

            
              {/* Name */}
              <div className=" mt-5">
              <label className="block text-gray-700 font-medium mb-2">Name <span className=" text-red-500 text-[15px]">*</span></label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:ring focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className=" mt-5">
              <label className="block text-gray-700 font-medium mb-2">Email  <span className=" text-red-500 text-[15px]">*</span></label>
              <input
                type="email"
                className="w-full p-2 border rounded focus:ring focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Terms Checkbox */}
            <div>
              <label className="flex items-center mt-5 text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  required
                />
                <p > Save my name, email, and website in this browser for the next time I comment.</p>
               
              </label>

            </div>
            <p className=" text-gray-500 my-5">You have to be logged in to be able to add photos to your review.</p>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit 
            </button>
           
           </div>
  
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPartThree;
