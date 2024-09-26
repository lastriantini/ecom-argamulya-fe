import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import Buttons from "../Buttons/button";
import { useSelector, useDispatch } from "react-redux";
import {
  useAuthLoginMutation,
  useEmailVerifyMutation,
} from "../../redux/services/AuthApi";
import { toast, ToastContainer } from "react-toastify"; //
import "react-toastify/dist/ReactToastify.css";
import { logout } from "../../redux/slice/AuthSlice";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  const isVerified = useSelector((state) => state.auth?.isVerified);
  const [isVerifyOnClick, setIsVerifyOnClick] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [authLogin] = useAuthLoginMutation();
  const [verifyData, setVerifyData] = useState({
    email: "",
    verification_code: "",
  });
  const [emailVerify] = useEmailVerifyMutation();

  console.log("isLoggedIn", isLoggedIn);
  console.log("isverified", isVerified);
  console.log(
    "Auth state:",
    useSelector((state) => state.auth)
  );
  console.log("isVerifiedClicked", isVerifyOnClick);

  const handleOpen = () => setOpen((cur) => !cur);

  const handleLogin = async () => {
    try {
      const { email, password } = loginData;
      console.log("response", loginData);

      const response = await authLogin({ email, password }).unwrap();
      if (response) {
        console.log("response", response); 
        setIsLogin(true);
        setOpen(false);
      }
    } catch (error) {
      console.error("Login failed", error.data.message);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const { email, verification_code } = verifyData;
      console.log("verifyData", verifyData);
      const response = await emailVerify({ email, verification_code }).unwrap();
      if (response) {
        console.log("response", response);
      }
      setIsVerifyOnClick(false)
    } catch (error) {
      console.error("Verification failed", error);
      toast.error("Verification failed."); 
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Success!");
  };

  return (
    <>
      <Buttons onClick={handleOpen} title="LOG IN" type="login-button" />
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <ToastContainer />
        <Card className="mx-auto w-[40vw] bg-[#F2E6D8] text-[#BF612A] px-[3vw] pt-[1vw]">
          <CardBody className="flex flex-col gap-4">
            <Typography
              variant="h2"
              color="BF612A"
              className="arya-regular text-center pb-[0.5vw] mb-[1vw] mx-[5vw] border-b-[0.2vw] border-[#BF612A]"
            >
              <b>Log In</b>
            </Typography>
            {!isVerifyOnClick ? (
              <>
                <Input
                  label="Email"
                  size="lg"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                <Input
                  type="password"
                  label="Password"
                  size="lg"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </>
            ) : (
              <>
                <Input
                  label="email"
                  size="lg"
                  value={verifyData.email}
                  onChange={(e) =>
                    setVerifyData({ ...verifyData, email: e.target.value })
                  }
                />
                <Input
                  label="Verification Code"
                  size="lg"
                  value={verifyData.verification_code}
                  onChange={(e) =>
                    setVerifyData({
                      ...verifyData,
                      verification_code: e.target.value,
                    })
                  }
                />
              </>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            {!isVerifyOnClick ? (
              <Button
                className="bg-[#BF612A] rounded-full"
                onClick={handleLogin}
                fullWidth
              >
                Log In
              </Button>
            ) : (
              <Button
                className="bg-[#BF612A] rounded-full"
                onClick={handleVerifyCode}
                fullWidth
              >
                Verify Code
              </Button>
            )}
            <Button
              className="bg-[#BF612A] rounded-full"
              onClick={handleLogout}
              fullWidth
            >
              Logout
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
            {!isVerifyOnClick && (
              <Typography variant="small" className="mt-4 flex justify-center">
                haven&apos;t verify your account?
                <Typography
                  as="a"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={() => setIsVerifyOnClick(true)}
                >
                  Verify Code
                </Typography>
              </Typography>
            )}
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
export default LogIn;
