import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  image: null | string;
  category: null | string;
  title: null | string;
  amount: null | number;
  description: null | string;
};

const initialState: TInitialState = {
  image: null,
  category: null,
  title: null,
  amount: null,
  description: null,
};

const supplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    addSupply: (state, action) => {
      const { image, category, title, amount, description } = action.payload;
      state.image = image;
      state.category = category;
      state.title = title;
      state.amount = amount;
      state.description = description;
    },
  },
});

export const { addSupply } = supplySlice.actions;

export default supplySlice.reducer;
