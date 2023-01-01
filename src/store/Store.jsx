import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/ComponentA";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
