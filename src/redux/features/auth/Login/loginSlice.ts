import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  email: string;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { logOut, setUser } = loginSlice.actions;

export default loginSlice.reducer;
