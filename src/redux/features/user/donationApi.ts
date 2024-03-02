import { baseApi } from "../../api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonation: builder.query({
      query: () => "/donations",
      providesTags: ["supplies"],
    }),
    addDonations: builder.mutation({
      query: (data) => ({
        url: "/donations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const { useAddDonationsMutation, useGetAllDonationQuery } = donationApi;
