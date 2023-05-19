import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6449c0c8a8370fb3213d3b73.mockapi.io",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 1) => `/Users?page=${page}&limit=3`,
      providesTags: ["Users"],
    }),
    setFollowers: builder.mutation({
      query: ({ id, followers }) => ({
        url: `/Users/${id}`,
        method: "PUT",
        body: {
          followers: followers,
        },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useSetFollowersMutation } = usersApi;
