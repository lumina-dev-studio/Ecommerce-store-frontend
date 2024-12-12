'use client'
import Container from "@/SharedComponent/Container/Container";
import React, { useState } from "react";
import SingleProductPartThreeReview from "./SingleProductPartThreeReview/SingleProductPartThreeReview";

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

  const reviews = [5, 4, 5, 3, 5]; // Sample ratings
  const totalReviews = reviews.length;

  // Calculate counts for each rating
  const ratingCounts = [5, 4, 3, 2, 1].map((rating) =>
    reviews.filter((r) => r === rating).length
  );
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
      <div className="p-6  bg-white shadow-md my-10 rounded-md">
        <div className="grid md:grid-cols-2 gap-10">

        
        {/* Overall Rating Display */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <p className="text-5xl font-bold">5</p>
          <p className="text-yellow-500 text-2xl mb-2">★★★★★</p>
          <p className="text-gray-600">3 reviews</p>

      

<div className="w-full p-4  rounded-lg shadow-sm">
      <h2 className="text-lg font-bold mb-4">Rating Breakdown</h2>
      {ratingCounts.map((count, index) => {
        const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
        return (
          <div key={5 - index} className="flex items-center mb-2">
            <div className="flex items-center w-20">
              {[...Array(5 - index)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.97 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.884a1 1 0 00-1.176 0l-3.97 2.884c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.463 10.1c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                </svg>
              ))}
            </div>
            <div className="flex-grow mx-4 h-3 bg-gray-200 rounded-full">
              <div
                className="h-3 bg-blue-500 rounded-full"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">{count}</span>
          </div>
        );
      })}
    </div>
          {/* --------------------------- */}

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
        <SingleProductPartThreeReview/>
      </div>
    </Container>
  );
};

export default SingleProductPartThree;
