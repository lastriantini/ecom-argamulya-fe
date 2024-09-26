import { apiCore } from "./apiCore"; // Verify this import path and the existence of `apiCore`

const ProductApi = apiCore.injectEndpoints({
  reducerPath: 'ProductApi',
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/api/products',
      transformResponse: (response) => {
        console.log("Raw response:", response); // Log the raw response for debugging
        return response.data; 
      },
    }),
    getCategory: builder.query({
      query: () => '/api/category',
      transformResponse: (response) => {
        return response.data; 
      },
    }),
    getProduct: builder.query({
      query: (id) => `/api/products/${id}`,
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoryQuery,
  useGetProductQuery,
  useDeleteProductMutation,
} = ProductApi;

export default ProductApi;
