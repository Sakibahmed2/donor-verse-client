import { baseApi } from "../../api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDonations: builder.mutation({
      query: (data) => ({
        url: "/donations",
        method: "POST",
        body: data,
      }),
    }),
    getAllDonation: builder.query({
      query: () => "/donations",
    }),
  }),
});

export const { useAddDonationsMutation, useGetAllDonationQuery } = donationApi;
