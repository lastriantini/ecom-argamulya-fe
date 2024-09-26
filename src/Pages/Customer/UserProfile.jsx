import React from "react";
import { useLocation, Link } from "react-router-dom";
import AccountInfo from "../../components/DetailProfileContents/AccountInfo";
import Address from "../../components/DetailProfileContents/Address";
import MyOrder from "../../components/DetailProfileContents/MyOrder";
import Profile from "../../components/DetailProfileContents/Profile";
import Dummy from "../../assets/dummy.jpeg";
import CustomerNavbar from "../../components/Navbar/CustomerNavbar";

const UserProfile = () => {
  const location = useLocation();
  const path = location.pathname;
  // ambil data dari auth user, lalu masukin ke sini
  return (
    <>
      <CustomerNavbar />
      <div className="pt-[1vw]">UserProfile</div>
      <div className="grid grid-cols-12 mx-[3vw] mt-[5.5vw]">
        <div className="col-span-4">
          <Profile username="undifined" image={Dummy} />
        </div>
        <div className="col-span-8">
          {path === "/profile" && <AccountInfo username="undifined"/>}
          {path === "/my-order" && <MyOrder />}
          {path === "/address" && <Address />}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
