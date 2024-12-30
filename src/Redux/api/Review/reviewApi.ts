import { baseApi } from "../baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllReviewByProduct: build.query({
      query: (id) => ({
        url: `/theme/storeTheme/review/${id}`,
        method: "GET",
        
      }),
    }),
    createProductReview: build.mutation({
      query: (data) => {
        return {
          url: `/theme/storeTheme/review`,
          method: "POST",
          body:data
          
        };
      },
    }),
   
  }),
});

export const {
useCreateProductReviewMutation,useGetAllReviewByProductQuery
} = reviewApi;
