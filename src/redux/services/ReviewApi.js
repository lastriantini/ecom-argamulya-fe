import { apiCore } from "./apiCore"; // Verify this import path and the existence of `apiCore`

const ReviewApi = apiCore.injectEndpoints({
  reducerPath: 'ReviewApi',
  tagTypes: ["Review"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => '/api/review',
      transformResponse: (response) => {
        console.log("Raw response:", response); // Log the raw response for debugging
        return response.data; 
      },
    }),
    getReview: builder.query({
      query: (id) => `/api/review/${id}`,
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/api/review/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetReviewQuery,
  useDeleteReviewMutation,
} = ReviewApi;

export default ReviewApi;
