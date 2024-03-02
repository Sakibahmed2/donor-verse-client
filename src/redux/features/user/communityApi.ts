import { baseApi } from "../../api/baseApi";

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addComments: builder.mutation({
      query: (data) => ({
        url: "/comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["supplies"],
    }),
    getAllComments: builder.query({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
  }),
});

export const { useAddCommentsMutation, useGetAllCommentsQuery } = communityApi;
