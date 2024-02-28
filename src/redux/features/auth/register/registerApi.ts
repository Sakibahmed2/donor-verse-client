import { baseApi } from "../../../api/baseApi";

const registerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (userInfo) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useAddUserMutation } = registerApi;
