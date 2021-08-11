import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },

    decrement: (state) => {
      state.value--;
    },
    increaseAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, increaseAmount } = counterSlices.actions;
export default counterSlices.reducer;
