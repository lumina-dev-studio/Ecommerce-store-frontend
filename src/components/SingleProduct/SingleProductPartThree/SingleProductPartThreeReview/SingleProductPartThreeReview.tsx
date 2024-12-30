import { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { AiOutlineDislike } from 'react-icons/ai';

const SingleProductPartThreeReview = ({ reviewsData }: any) => {
  const [sortOption, setSortOption] = useState<string>('Default');
  const [onlyWithImages, setOnlyWithImages] = useState<boolean>(false);

  // Function to sort reviews based on the selected option
  const sortReviews = (reviews: any[], option: string): any[] => {
    switch (option) {
      case 'Newest':
        return [...reviews].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); // Sort by createdAt (newest first)
      case 'Oldest':
        return [...reviews].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()); // Sort by createdAt (oldest first)
      case 'Highest rated':
        return [...reviews].sort((a, b) => b.rating - a.rating); // Sort by rating (highest first)
      case 'Lowest rated':
        return [...reviews].sort((a, b) => a.rating - b.rating); // Sort by rating (lowest first)
      default:
        return reviews; // Default no sorting
    }
  };

  // Filter reviews to only show those with images if the checkbox is checked
  const filteredReviews = onlyWithImages
    ? reviewsData.filter((review: any) => review.hasImage) // Filter reviews with images
    : reviewsData;

  // Sort the filtered reviews based on the selected sort option
  const sortedReviews = sortReviews(filteredReviews, sortOption);

  return (
    <div>
      <div className="md:flex items-center justify-between mb-4 mt-10">
        <p className="font-[600]">{reviewsData?.length} reviews for the product</p>
        <div className="md:flex items-center gap-5">
          <div>
            <input
              type="checkbox"
              id="onlyWithImages"
              className="mr-2"
              checked={onlyWithImages}
              onChange={(e) => setOnlyWithImages(e.target.checked)}
            />
            <label htmlFor="onlyWithImages" className="text-sm text-gray-600">
              Only with images
            </label>
          </div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-600"
          >
            <option value="Default">Default</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Most helpful">Most helpful</option>
            <option value="Highest rated">Highest rated</option>
            <option value="Lowest rated">Lowest rated</option>
          </select>
        </div>
      </div>

      {/* Display reviews in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sortedReviews?.slice(0, 2).map((review: any, index: any) => (
          <div key={index}>
            <div className="border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-[600] text-md">{review?.name}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(review?.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.97 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.884a1 1 0 00-1.176 0l-3.97 2.884c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.463 10.1c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{review?.review?.slice(0,250)}</p>

              <div className="flex gap-2 items-center mt-3">
                <BiLike className="text-[20px] hover:text-green-500 cursor-pointer" /> 1{' '}
                <AiOutlineDislike className="text-[20px] hover:text-red-500 cursor-pointer" /> 0
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProductPartThreeReview;
