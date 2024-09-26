import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Input,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/iconArgamulya.png";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/AuthSlice";
import Buttons from "../Buttons/button";

function NavList() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Success!");
  };

  return (
    <div
      style={{ color: "#BF612A", margin: "0 5vw 0 2vw" }}
      className="mx-auto flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 relative"
    >
      <Typography
        as="li"
        variant="medium"
        className="py-1 text-center px-[5vw] font-medium arya-regular"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          favorite
        </a>
      </Typography>

      <Typography
        as="li"
        variant="medium"
        className="py-1 pr-[5vw] text-center font-medium arya-regular"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          keranjang
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        className="py-1 pr-[15vw] text-center font-medium arya-regular"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          kategori
        </a>
      </Typography>

      <div className="absolute h-[100px] top-[-8px] left-[37.5vw]">
        <img src={Logo} alt="logo-navbar" className="h-24 w-24" />
      </div>

      <div className="w-[17vw] h-[2.5vw] mt-[-1vw]">
        <Input
          type="email"
          placeholder="Search.."
          color="orange"
          size="lg"
          style={{ border: "1px solid #BF612A", borderRadius: "40vw" }}
          className="px-[2vw] focus:!border !border focus:!border-gray-900 focus:!border-t-gray-900 focus:border-[#BF612A] placeholder:text-[#BF612A] placeholder:opacity-100"
          labelProps={{
            className: "hidden",
          }}
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.7}
        stroke="#BF612A"
        className="w-[2.2vw]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.7}
        stroke="#BF612A"
        className="w-[2.2vw]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>

      <Menu>
        <MenuHandler>
          <svg
            onClick={() => setIsOpen(!isOpen)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke={!isOpen ? "#BF612A" : "#422D1C"}
            className="w-[2.2vw] profile"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </MenuHandler>
        <MenuList className="bg-[#F2E6D8] text-[#422D1C] mt-[1vw] w-[9vw] arya-bold text-[1.3vw]">
          <Link to="/profile">
            <MenuItem href="/profile" className="text-center">
              Profile
            </MenuItem>
          </Link>
          <hr className="my-[0.5vw] border-[#422D1C]" />
          <MenuItem className="text-center">My Order</MenuItem>
          <hr className="my-[0.5vw] border-[#422D1C]" />
          <MenuItem onClick={handleLogout} className="text-center" >Sign Out</MenuItem>
        </MenuList>
      </Menu>

      <div></div>
    </div>
  );
}

function CustomerNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Navbar
        style={{ background: "#F2E6D8", width: "100vw", overflowX: "none" }}
        variant="filled"
        className="z-50 fixed border-none rounded-none px-12 py-3"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="hidden lg:block mx-auto">
            <NavList />
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
}

export default CustomerNavbar;
