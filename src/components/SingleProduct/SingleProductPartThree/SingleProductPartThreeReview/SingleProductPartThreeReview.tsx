import { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineDislike } from "react-icons/ai";

type Review = {
  reviewer: string;
  date: string;
  rating: number;
  content: string;
  comment: string;
  hasImage?: boolean;
};

const SingleProductPartThreeReview: React.FC = () => {
  const [sortOption, setSortOption] = useState<string>('Default');
  const [onlyWithImages, setOnlyWithImages] = useState<boolean>(false);

  const reviewsData: Review[] = [
    {
      reviewer: 'Oliwia Whitley',
      date: 'November 29, 2022',
      rating: 5,
      content:
        'If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.',
      comment:
        'Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.',
      hasImage: false,
    },
    {
      reviewer: 'Ema Norton',
      date: 'November 29, 2022',
      rating: 5,
      content:
        'If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.',
      comment:
        'Or else, an alternative route: set checkpoints, networks, processes, junctions between content and layout. Depending on the state of affairs it may be fine to concentrate either on design or content, reversing gears when needed.',
      hasImage: true,
    },
  ];

  const sortReviews = (reviews: Review[], option: string): Review[] => {
    switch (option) {
      case 'Newest':
        return [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'Oldest':
        return [...reviews].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'Highest rated':
        return [...reviews].sort((a, b) => b.rating - a.rating);
      case 'Lowest rated':
        return [...reviews].sort((a, b) => a.rating - b.rating);
      // Additional logic for "Most helpful" can be added later
      default:
        return reviews;
    }
  };

  const filteredReviews = onlyWithImages
    ? reviewsData.filter((review) => review.hasImage)
    : reviewsData;

  const sortedReviews = sortReviews(filteredReviews, sortOption);

  return (
    <div>
      <div className="md:flex items-center justify-between mb-4 mt-10">
        <p className='  font-[600]'>2 reviews for ACER ConceptD CT300</p>
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

         <div  className=' grid  grid-cols-1 md:grid-cols-2 gap-5'>
      {sortedReviews.map((review, index) => (
        <div
          key={index}
        >
            <div 
          className="border-t border-s border-e border-gray-300  rounded-t-lg  p-4 shadow-sm">

          
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-[600] text-md">{review.reviewer}</h3>
            <span className="text-sm text-gray-500">{review.date}</span>
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
          
          <p className="text-gray-700 ">{review.content}</p>

          <div className=' flex gap-2  items-center mt-3'>
          <BiLike className=' text-[20px] hover:text-green-500 cursor-pointer' /> 1 <AiOutlineDislike className=' text-[20px] hover:text-red-500 cursor-pointer' /> 0
          </div>
          </div>
          <div className="border-t border-l border-r border-b    bg-[#F5F5F5] rounded-b-lg p-4 mb-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-[600] text-md flex gap-2 "> <GrHomeRounded className='mt-[1px] font-bold text-blue-500 text-[18px]'/> Mr. Mackay</h3>
           


            <span className="text-sm text-gray-500">{review.date}</span>
          </div>
            <p className="text-sm text-gray-600">{review.comment}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SingleProductPartThreeReview;
