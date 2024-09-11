import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/iconArgamulya.png";
import Buttons from "../Buttons/button";
import SignUp from "../Modal/SignUp";
import LogIn from "../Modal/LogIn";

function NavList() {
  return (
    <div
      style={{ color: "#BF612A", margin: "0 5vw 0 2vw" }}
      className="mx-auto flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 relative"
    >
      <Typography
        as="li"
        variant="medium"
        className="py-1 text-center px-[7vw] font-medium arya-regular"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          kerjasama
        </a>
      </Typography>

      <Typography
        as="li"
        variant="medium"
        className="py-1 pr-[7vw] text-center font-medium arya-regular"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          penghargaan
        </a>
      </Typography>

      <div className="absolute h-[100px] top-[-8px] left-[35.5vw]">
        <img src={Logo} alt="logo-navbar" className="h-24 w-24" />
      </div>

      <Typography
        as="li"
        variant="medium"
        className="py-1 pl-[12vw] pr-[5vw] font-medium arya-regular"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          ulasan
        </a>
      </Typography>
      <div>
        <LogIn/>
        <SignUp/>
      </div>
    </div>
  );
}

function GuestNavbar() {
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

export default GuestNavbar;
