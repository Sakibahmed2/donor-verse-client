import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  name: null | string;
  email: null | string;
  password: null | string;
};

const initialState: TInitialState = {
  name: null,
  email: null,
  password: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const { name, email, password } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
    },
  },
});

export const { createUser } = registerSlice.actions;

export default registerSlice.reducer;
