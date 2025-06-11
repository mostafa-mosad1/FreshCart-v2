import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authapi = createApi({
  reducerPath: "auth",
  tagTypes: ["Auth"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerce.routemisr.com/api/v1/",
  }),
  endpoints: (build) => ({
    signin: build.mutation({
      query: (body) => {
        return { url: "auth/signin", method: "POST", body };
      },
    }),
    signup: build.mutation({
      query: (body) => {
        return { url: "auth/signup", method: "POST", body };
      },
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authapi;
