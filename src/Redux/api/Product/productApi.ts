import { baseApi } from "../baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProdect: build.query({
      query: () => ({
        url: "/allProduct",
        method: "GET",
        
      }),
    }),
    getSingleProduct: build.query({
      query: (id) => {
        return {
          url: `/singleProduct/${id}`,
          method: "GET",
          
        };
      },
    }),
   
  }),
});

export const {
useGetAllProdectQuery,useGetSingleProductQuery
} = productApi;
