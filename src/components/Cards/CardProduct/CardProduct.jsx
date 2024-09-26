import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";

const CardProduct = ({ id, name, price, image, rating }) => {
  return (
    <>
      <Link to={`/product/${id}`}>
        <div className=" relative bg-[#DFE0DF] w-[17vw] h-[23vw] rounded-[0.8vw] mx-[1.5vw] my-[1.3vw]">
          <img
            className="w-full h-[12vw] rounded-t-[0.8vw]"
            src={image}
            alt="Card Image"
          />
          <div className="pt-[0.8vw] px-[1vw]">
            <Typography
              style={{ lineHeight: "1.85vw" }}
              className="text-left text-[#422D1C] text-[1.6vw] arya-bold "
            >
              {name}
            </Typography>
            <Typography className="text-left text-[#BF612A] text-[1.6vw] arya-bold pt-[0.2vw]">
              {price}
            </Typography>
            <Typography className="text-left text-[#BF612A] text-[0.9vw] arya-regular bottom-[0.8vw] absolute">
              *click for details
            </Typography>

            <div className="flex absolute bottom-[0.9vw] right-[1.4vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#422D1C"
                className="size-6 mr-[0.3vw]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#422D1C"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
          {/* bikin grid sama slide dan card, */}
          {/* bikin if condition kalo produk dr user ada di wishtlist, maka love di cardnya menjadi merah */}
        </div>
      </Link>
    </>
  );
};

export default CardProduct;
