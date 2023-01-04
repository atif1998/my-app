import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../counter/CounterSlice";
import { UserReducer } from "../counter/UserSlice";
import counter2Reducer from "../counter/Counter2Slice";
import productReducer from "../counter/ProductSlice";

import { productsService } from "../Services/product.service";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    posts: UserReducer,
    counter2: counter2Reducer,
    products: productReducer,
    [productsService.reducerPath]: productsService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsService.middleware),
});
