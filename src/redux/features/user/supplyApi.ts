import { baseApi } from "../../api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSupply: builder.query({
      query: () => "/supplies",
      providesTags: ["supplies"],
    }),
    addSupply: builder.mutation({
      query: (supply) => ({
        url: "/supplies",
        method: "POST",
        body: supply,
      }),
      invalidatesTags: ["supplies"],
    }),
    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const {
  useAddSupplyMutation,
  useGetAllSupplyQuery,
  useDeleteSupplyMutation,
} = supplyApi;
