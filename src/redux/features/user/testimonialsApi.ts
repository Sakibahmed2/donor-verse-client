import { baseApi } from "../../api/baseApi";

export const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSupply: builder.query({
    //   query: () => "/supplies",
    //   providesTags: ["supplies"],
    // }),
    addTestimonials: builder.mutation({
      query: (data) => ({
        url: "/testimonials",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const { useAddTestimonialsMutation } = testimonialsApi;
