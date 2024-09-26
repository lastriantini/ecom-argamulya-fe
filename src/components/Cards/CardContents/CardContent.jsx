import { Typography } from "@material-tailwind/react";
import React from "react";

const CardContent = ({ title, desc, image, rating, type }) => {
  return (
    <>
      {type === "card_ulasan" && (
        <div className="bg-[#BF612A] w-[20vw] rounded-[0.8vw]">
          <img
            className="w-full rounded-t-[0.8vw]"
            src={image}
            alt="Card Image"
          />

          <Typography className="text-center text-[#F2E6D8] text-[0.97vw] py-[2vw] px-[1.6vw] arya-regular">
            <p className="font-thin">{desc}</p>
          </Typography>

          {/* Rating */}
          <div className="flex justify-center space-x-1">
                {Array.from({ length: rating }).map((_, index) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#F8B84E"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
          </div>

          <Typography className="text-center text-[#F2E6D8] text-[1.5vw] arya-bold pb-[1.5vw]">
            {title}
          </Typography>
        </div>
      )}
    </>
  );
};

export default CardContent;
