import React from "react";
import { Typography } from "@material-tailwind/react";
import CardOrder from "../Cards/CardOrder";

const MyOrder = () => {
  return (
    <div className="bg-[#F2E6D8] h-[36vw] bg-opacity-[0.15] mx-[1vw] rounded-[1vw]">
      <Typography className="border-b border-b-[#F2E6D8] ml-[3vw] mt-[0.3vw] pr-[2vw] inline-block text-left pt-[1vw] text-[2vw] arya-bold text-[#F2E6D8] ">
        My Order
      </Typography>
      <CardOrder status={"menunggu pembayaran"} Product={"Domba Priyangan"} price={"Rp. 20.000.000"}/>
    </div>
  );
};

export default MyOrder;
