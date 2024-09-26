import { Typography } from "@material-tailwind/react";
import Buttons from "../Buttons/button";
import React, { useState } from "react";

const ContentPreview = ({ name, description, price, stock }) => {
  const [count, setCount] = useState(0);

  // Increment the count
  const increment = () => setCount(count + 1);

  // Decrement the count
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Typography>
        <h1 className="text-[#F2E6D8] text-[4vw] arya-bold pt-[1vw]">{name}</h1>
      </Typography>
      <Typography>
        <h1 className="text-[#D07C2E] text-[3.2vw] arya-regular mt-[-1vw]">
          Rp. {price}
        </h1>
      </Typography>
      <Typography>
        <p className="text-[#F2E6D8] text-[1.2vw] arya-regular mt-[1.5vw]">
          {description}
        </p>
      </Typography>

      <div className="grid grid-cols-12 items-center space-x-4 mt-[5vw] mb-[1vw]">
        <Typography className="col-span-1">
          <p className="text-[#F2E6D8] text-[1.2vw] arya-regular ">
            quantity
          </p>
        </Typography>
        <div className="col-span-4 flex">
          {/* Decrement Button */}
          <svg
            onClick={decrement}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#F2E6D8"
            class="size-[2.7vw] mt-[-0.1vw] mx-[0.4vw]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="bg-[#422D1C] w-10 h-8 text-center rounded-md border-2 border-[#F2E6D8] text-[#F2E6D8]"
          />
          {/* Increment Button */}
          <svg
            onClick={increment}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#F2E6D8"
            className="size-[2.7vw] mt-[-0.1vw] mx-[0.4vw]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>

      <Typography>
        <p className="text-[#F2E6D8] text-[1.2vw] arya-regular mb-[2vw]">
          stock {stock} avaible
        </p>
      </Typography>
      {/* two button */}
      <div className="grid grid-cols-12 mt-[1vw]">
        <div className="col-span-4">
          <Buttons type="add-to-cart" title="Add to cart" />
        </div>
        <div className="col-span-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#D07C2E"
            className="size-[2.6vw] mr-[0.3vw]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;
