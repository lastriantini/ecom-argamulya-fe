import { Typography } from "@material-tailwind/react";
import React from "react";

const CardProduct = ({ title, price, image, rating }) => {
  return (
    <>
      <div className="bg-[#DFE0DF] w-[20vw] rounded-[0.8vw]">
        <img
          className="w-full rounded-t-[0.8vw]"
          src={image}
          alt="Card Image"
        />

        <Typography className="text-left text-[#F2E6D8] text-[1.7vw] arya-bold pb-[1.5vw]">
          {title}
        </Typography>
        <Typography className="text-left text-[#BF612A] text-[1.8vw] arya-bold pb-[1.5vw]">
          {price}
        </Typography>

        <Typography className="text-left text-[#BF612A] text-[0.5vw] arya-bold pb-[1.5vw]">
          *click for details
        </Typography>
        {/* bikin grid sama slide dan card, */}
        {/* bikin if condition kalo produk dr user ada di wishtlist, maka love di cardnya menjadi merah */}
      </div>
    </>
  );
};

export default CardProduct;
