import { apiCore } from "./apiCore";

const apiProduct = apiCore.injectEndpoints({
  reducerPath: 'apiProduct',
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/api/products',
      transformResponse: (response) => {
        console.log("Raw response:", response); // Log the raw response for debugging
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
  useGetProductQuery,
  useDeleteProductMutation,
} = apiProduct;

export default apiProduct;  
