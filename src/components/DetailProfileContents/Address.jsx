import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import InfoAccount from "./formInput";

const Address = () => {
  return (
    <div className="bg-[#F2E6D8] h-[36vw] bg-opacity-[0.15] mx-[1vw] rounded-[1vw]">
      <Typography className="border-b border-b-[#F2E6D8] ml-[3vw] mt-[0.3vw] pr-[2vw] inline-block text-left pt-[1vw] text-[2vw] arya-bold text-[#F2E6D8] ">
        Address
      </Typography>
      <div className="grid grid-cols-12 mx-[2.8vw] my-[1.9vw]">
        <div className="col-span-6 mr-[1.2vw]">
          <InfoAccount type="regular" title="Profinsi" value="Jawa Selatan"/>
        </div>
        <div className="pb-[0.6vw] col-span-6 ml-[1.2vw]">
          <InfoAccount type="regular" title="Kota" value="Bogor"/>
        </div>

        <div className="col-span-6 mr-[1.2vw]">
          <InfoAccount type="regular" title="Kabupaten" value="Bogor Tenggara"/>
        </div>
        <div className="pb-[0.6vw] col-span-6 ml-[1.2vw]">
          <InfoAccount type="regular" title="Kelurahan" value="Tajur"/>
        </div>

        <div className="col-span-6 mr-[1.2vw]">
          <InfoAccount type="text-box" title="Detail Alamat" value="komplek melati raya,  89/98, no.776"/>
        </div>
        <div className="col-span-6 ml-[1.2vw]">
          <InfoAccount type="text-box" title="Details/Note" value="rumah pagar tinggi warna kuning"/>
        </div>
        <Button className="bg-[#D07C2E] normal-case font-normal text-[#F2E6D8] w-[10vw] mt-[0.7vw] ml-[45.2vw] py-[0.55vw] rounded-full arya-regular text-[1.4vw]">Simpan</Button>
      </div>
    </div>
  );
}

export default Address