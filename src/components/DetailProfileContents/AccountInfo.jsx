import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import InfoAccount from "./formInput";

const AccountInfo = ({ username }) => {
  return (
    <div className="bg-[#F2E6D8] h-[36vw] bg-opacity-[0.15] mx-[1vw] rounded-[1vw]">
      <Typography className="border-b border-b-[#F2E6D8] ml-[3vw] mt-[1vw] pr-[2vw] inline-block text-left pt-[1vw] text-[2vw] arya-bold text-[#F2E6D8] ">
        Account Info
      </Typography>
      <div className="grid grid-cols-12 mx-[2.8vw] my-[2vw]">
        <div className="col-span-6 mr-[1.2vw]">
          <InfoAccount type="regular" title="Nama" value="username"/>
        </div>
        <div className="pb-[1vw] col-span-6 ml-[1.2vw]">
          <InfoAccount type="regular" title="Tanggal Lahir" value="90-90-1420"/>
        </div>

        <div className="col-span-6 mr-[1.2vw]">
          <InfoAccount type="regular" title="Profinsi" value="Jawa Selatan"/>
        </div>
        <div className="pb-[1vw] col-span-6 ml-[1.2vw]">
          <InfoAccount type="regular" title="Kota" value="Bogor"/>
        </div>

        <div className="col-span-6 mr-[1.2vw]">
          <InfoAccount type="regular" title="Email" value="yourEmail@gmail.com"/>
        </div>
        <div className="col-span-6 ml-[1.2vw]">
          <InfoAccount type="password" title="Password" value="Bogor"/>
        </div>
        <Button className="bg-[#D07C2E] normal-case font-normal text-[#F2E6D8] w-[10vw] mt-[-1.5vw] ml-[45.2vw] py-[0.6vw] rounded-full arya-regular text-[1.4vw]">Simpan</Button>
      </div>
    </div>
  );
};

export default AccountInfo;
