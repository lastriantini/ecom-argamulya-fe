import { Typography } from "@material-tailwind/react";
import React from "react";

const CardReview = ({
  username,
  description,
  rate,
  index,
  create_at,
  image,
  profile_pic,
}) => {
  return (
    <div className="grid grid-cols-12 mx-[2.6vw] pt-[1vw] pb-[0.2vw] px-[2.1vw] text-[#422D1C] arya-regular text-[1.4vw] my-[1.3vw] bg-[#422D1C] bg-opacity-[0.2] rounded-[1vw]">
      <div className="col-span-1">
        <img src={profile_pic} alt={profile_pic} className="rounded-full w-[4vw] h-[4vw] mt-[0.5vw] ml-[0.9vw]" />
      </div>
      <div key={index} className="mb-4 col-span-11">
        <Typography className="arya-bold text-[1.4vw]">
          <b>{username || "Anonymous"}</b>
        </Typography>
        <div className="flex ml-[-0.2vw]">
          {Array.from({ length: rate }).map((_, index) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#FFAF2B"
              className="size-[1.4vw]"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <img className="w-[8vw] h-[7vw] my-[0.7vw]" src={image} alt={image} />
        <Typography className="text-[1.2vw] arya-regular">
          {description}
        </Typography>
        <Typography className="mt-[0.5vw] text-[1vw] arya-regular">
          {create_at}
        </Typography>
      </div>
    </div>
  );
};

export default CardReview;
