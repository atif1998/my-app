import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
};

export const Slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, actions) => {
      state.product.push(actions.payload);
      return state;
    },
  },
});
export default Slice.reducer;
