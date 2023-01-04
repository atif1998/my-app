import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: false,
};

const getPosts = createAsyncThunk("posts", async (name) => {
  const res = await fetch("http://localhost:3004/users").then((data) =>
    data.json()
  );
  console.log(res);
  return res;
});

export const UserSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extrareducers: (builder) => {
    builder.addCase((state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});

export const UserReducer = UserSlice.reducer;
export default getPosts;
