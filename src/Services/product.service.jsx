import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsService = createApi({
  reducerPath: "productsService",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/users" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/",
      providesTags: () => [{ type: "Products", id: "LIST" }],
    }),
    getSingleProduct: builder.query({
      query: ({ id, name }) => `/${id}?name=${name}`,
    }),
    addProduct: builder.mutation({
      query(body) {
        return {
          url: "/",
          method: "POST",
          body,
        };
      },
      invalidatesTags: () => [{ type: "Products", id: "LIST" }],
    }),
    editProduct: builder.mutation({
      query(body) {
        return {
          url: "/",
          method: "PUT",
          body,
        };
      },
      invalidatesTags: () => [{ type: "Products", id: "LIST" }],
    }),
  }),
});
console.log(productsService);
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetSingleProductQuery,
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useAddProductMutation,
  useEditProductMutation,
} = productsService;
