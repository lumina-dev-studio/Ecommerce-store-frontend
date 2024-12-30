'use client';
import Container from "@/SharedComponent/Container/Container";
import React, { useState } from "react";
import SingleProductPartThreeReview from "./SingleProductPartThreeReview/SingleProductPartThreeReview";
import { toast } from "sonner";
import { useCreateProductReviewMutation, useGetAllReviewByProductQuery } from "@/Redux/api/Review/reviewApi";

interface Review {
  id: string;
  rating: number;
  valueForMoney: number;
  durability: number;
  deliverySpeed: number;
  review: string;
  pros: string;
  cons: string;
  name: string;
  email: string;
}

interface ProductData {
  id: string;
}

interface ReviewResponse {
  success: boolean;
  message: string;
  data: Review[];
}

interface Props {
  data: ProductData | null;
}

const SingleProductPartThree: React.FC<Props> = ({ data }) => {
  const [rating, setRating] = useState<number>(0);
  const [valueForMoney, setValueForMoney] = useState<number>(0);
  const [durability, setDurability] = useState<number>(0);
  const [deliverySpeed, setDeliverySpeed] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [pros, setPros] = useState<string>("");
  const [cons, setCons] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const [createReview] = useCreateProductReviewMutation();
  const { data: reviewsData, isLoading, refetch, error } = useGetAllReviewByProductQuery(data?.id);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      rating === 0 ||
      valueForMoney === 0 ||
      durability === 0 ||
      deliverySpeed === 0
    ) {
      toast.error("Please fill in all rating required fields.");
      return;
    }

    const reviewData = {
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
      productId: data?.id,
    };

    try {
      const createdData: ReviewResponse = await createReview(reviewData).unwrap();
      if (createdData.success) {
        toast.success(createdData.message);
        // Reset form
        setRating(0);
        setValueForMoney(0);
        setDurability(0);
        setDeliverySpeed(0);
        setReview("");
        setPros("");
        setCons("");
        setName("");
        setEmail("");
        setTermsAccepted(false);
        refetch();
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to submit the review.");
    }
  };

  const totalReviews = reviewsData?.data?.length || 0;
  const overallRating = totalReviews
    ? (
        reviewsData.data.reduce((sum: number, review: Review) => sum + review.rating, 0) /
        totalReviews
      ).toFixed(1)
    : "0";

  const ratingCounts = [5, 4, 3, 2, 1].map((star) =>
    reviewsData?.data?.filter((review: Review) => review.rating === star).length || 0
  );

  if (!data?.id) {
    return <p className="text-center text-red-500">Product data is missing!</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to load reviews. Please try again later.</p>;
  }

  return (
    <Container>
      <div className="p-6 bg-white shadow-md my-10 rounded-md">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Overall Rating Display */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
            <p className="text-5xl font-bold">{overallRating}</p>
            <p className="text-yellow-500 text-2xl mb-2">
              {"★".repeat(Math.round(Number(overallRating)))}{"☆".repeat(5 - Math.round(Number(overallRating)))}
            </p>
            <p className="text-gray-600">{totalReviews} reviews</p>

            <div className="w-full p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Rating Breakdown</h2>
              {ratingCounts.map((count, index) => {
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                return (
                  <div key={5 - index} className="flex items-center mb-2">
                    <div className="flex items-center w-20">
                      {"★".repeat(5 - index)}{"☆".repeat(index)}
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
          </div>

          {/* Add a Review */}
          <div className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Add a review</h3>
            <p className="mb-5 text-gray-500">
              Your email address will not be published. Required fields are marked *
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Rating Fields */}
              {[["Your rating", rating, setRating], ["Value for money", valueForMoney, setValueForMoney], ["Durability", durability, setDurability], ["Delivery speed", deliverySpeed, setDeliverySpeed]].map(([label, value, setValue]:any, idx:any) => (
               <div key={idx} className="grid grid-cols-12 gap-4 items-center">
               <label className="block text-gray-700 font-medium col-span-3">{label}: *</label>
               <div className="flex space-x-2 text-yellow-500 col-span-9">
                 {[1, 2, 3, 4, 5].map((star) => (
                   <button
                     type="button"
                     key={star}
                     className={star <= value ? "text-yellow-500" : "text-gray-300"}
                     onClick={() => setValue(star)}
                   >
                     ★
                   </button>
                 ))}
               </div>
             </div>
             
              ))}

              {/* Text Fields */}
              {[
                ["Your review", review, setReview, true],
                ["Pros", pros, setPros, false],
                ["Cons", cons, setCons, false],
                ["Name", name, setName, true],
                ["Email", email, setEmail, true],
              ].map(([label, value, setValue, required]:any, idx):any => (
                <div key={idx} className="mt-5">
                  <label className="block text-gray-700 font-medium">{label}{required && " *"}</label>
                  {label === "Your review" ? (
                    <textarea
                      className="w-full p-2 border rounded focus:ring focus:outline-none"
                      style={{ height: "150px" }}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      required={required}
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full p-2 border rounded focus:ring focus:outline-none"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      required={required}
                    />
                  )}
                </div>
              ))}

              {/* Terms */}
              <label className="flex items-center mt-5 text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  required
                />
                Save my name, email, and website in this browser for the next time I comment.
              </label>

              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Render Reviews */}
        {isLoading ? (
          <p className="text-center">Loading reviews...</p>
        ) : (
          <SingleProductPartThreeReview reviewsData={reviewsData?.data} />
        )}
      </div>
    </Container>
  );
};

export default SingleProductPartThree;
