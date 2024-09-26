import { Typography, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Profile = ({ username, image }) => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  console.log(location.pathname);
  console.log("is active", isActive);

  return (
    <div className="bg-[#F2E6D8] h-[36vw] bg-opacity-[0.15] mx-[2vw] rounded-[1vw]">
      <Typography className="border-b border-b-[#F2E6D8] mx-[7vw] text-center pt-[2vw] mb-[1.5vw] text-[1.79vw] arya-bold text-[#F2E6D8] ">
        {username}
      </Typography>
      <img
        src={image}
        alt={image}
        className="mx-auto ml-[9.2vw] w-[9.5vw] h-[9.5vw] mb-[1.2vw] mt-[2vw] rounded-full"
      />
      <div className="mx-[5.5vw] pt-[1vw]">
        {/* bg-[#D07C2E] text-[F2E6D8] */}
        {/* bg-[] border-2 border-[#D07C2E] text-[#D07C2E] */}
        <Link to="/profile">
          <Button
            className={`rounded-full normal-case arya-bold text-[1.2vw] py-[0.7vw] mb-[0.3vw] w-[17vw]  ${
              path === "/profile"
                ? "bg-[#D07C2E] text-[#F2E6D8]"
                : "bg-[] border-2 border-[#D07C2E] text-[#D07C2E]"
            }`}
          >
            Account Info
          </Button>
        </Link>
        <Link to="/address">
          <Button
            className={`rounded-full normal-case arya-bold text-[1.2vw] py-[0.7vw] mb-[0.3vw] w-[17vw] mt-[1vw] ${
              path === "/address"
                ? "bg-[#D07C2E] text-[#F2E6D8]"
                : "bg-[] border-2 border-[#D07C2E] text-[#D07C2E]"
            }`}
          >
            Address
          </Button>
        </Link>
        <Link to="/my-order">
          <Button
            className={`rounded-full normal-case arya-bold text-[1.2vw] py-[0.7vw] w-[17vw] mt-[1vw] ${
              path === "/my-order"
                ? "bg-[#D07C2E] text-[#F2E6D8]"
                : "bg-[] border-2 border-[#D07C2E] text-[#D07C2E]"
            }`}
          >
            My Order
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
