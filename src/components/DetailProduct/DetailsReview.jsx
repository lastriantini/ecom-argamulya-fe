import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import ErrorPage from "../../Pages/ErrorPage";
import { useGetReviewsQuery } from "../../redux/services/ReviewApi";
import CardReview from "../Cards/CardReview";

const DetailsReview = ({ description, product_id }) => {
  const [activeButton, setActiveButton] = useState("details");
  const { data: reviews, error, isLoading } = useGetReviewsQuery();
  // const reviews = data.data;
  console.log("review adalah", reviews);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorPage message={error.message} />;

  return (
    <div className="mt-3 px-14 pt-[3vw] mb-[2vw]">
      <div className="flex items-center">
        <Button
          variant="outlined"
          size="sm"
          className={`text-[#D07C2E] border-t-2 border-l-2 border-r-2 border-[#D07C2E] mr-[1vw] rounded-t-lg rounded-b-none ${
            activeButton === "details"
              ? " bg-[#F2E6D8] border-[#F2E6D8] text-[#BF612A]"
              : ""
          } transition-colors duration-200`}
          onClick={() => setActiveButton("details")}
        >
          <Typography className="normal-case arya-regular text-[1.5vw] py-[0.4vw]">
            details
          </Typography>
        </Button>
        <Button
          variant="outlined"
          size="sm"
          className={`text-[#D07C2E] border-t-2 border-l-2 border-r-2 border-[#D07C2E] rounded-t-lg rounded-b-none ${
            activeButton === "review"
              ? "text-[#BF612A] bg-[#F2E6D8] border-[#F2E6D8]"
              : ""
          } transition-colors duration-200`}
          onClick={() => setActiveButton("review")}
        >
          <Typography className="normal-case arya-regular text-[1.5vw] py-[0.4vw]">
            Review pelanggan
          </Typography>
        </Button>
      </div>

      {/* Details Section */}
      {activeButton === "details" && (
        <div className="bg-[#F2E6D8] mt-[-0.11vw] rounded-b-lg">
          <div className="bg-[rgba(66, 45, 28, 0.15)]">
            <p className="px-[3vw] py-[3vw] text-[#422D1C] arya-regular text-[1.4vw]">
              {description}
            </p>
          </div>
        </div>
      )}

      {/* Review Section */}
      {activeButton === "review" && (
        <div className="bg-[#F2E6D8] mt-[-0.11vw] rounded-b-lg">
          <div className="bg-[rgba(66, 45, 28, 0.15)] py-[1vw]">
            {reviews.length > 0 ? (
              reviews
                .filter((review) => review.product_id === Number(product_id))
                .map((review, index) => (
                  <>
                    <CardReview
                      username={review.user.username}
                      image={review.image}
                      index={index}
                      description={review.description}
                      rate={review.rate}
                      create_at={review.review_date}
                      profile_pic={review.user.image}
                    />
                  </>
                ))
            ) : (
              <Typography>No reviews yet.</Typography>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsReview;
