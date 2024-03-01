import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteers",
        method: "POST",
        body: data,
      }),
    }),
    getAllVolunteer: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddVolunteerMutation, useGetAllVolunteerQuery } =
  volunteerApi;
