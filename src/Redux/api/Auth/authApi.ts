import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: "/simpleUser/registration",
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data) => {
        return {
          url: "/simpleUser/login",
          method: "POST",
          body: data,
        };
      },
    }),
    changePassword: build.mutation({
      query: (data) => {
        return {
          url: "/changePassword",
          method: "PUT",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,useChangePasswordMutation,useRegisterMutation
} = authApi;
