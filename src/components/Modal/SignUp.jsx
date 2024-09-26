import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import Buttons from "../Buttons/button";
import { useAuthRegisterMutation, useEmailVerifyMutation } from "../../redux/services/AuthApi";
import { toast, ToastContainer } from "react-toastify"; // Untuk notifikasi
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [open, setOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // State untuk melacak pendaftaran
  // const [verification_code, setVerification_code] = useState(""); // State untuk kode verifikasi
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [authRegister] = useAuthRegisterMutation();
  const [verifyData, setVerifyData] = useState({
    email: "",
    verification_code: "",
  });
  const [emailVerify] = useEmailVerifyMutation();


  const handleOpen = () => setOpen((cur) => !cur);

  const handleRegister = async () => {
    try {
      const { username, email, password, password_confirmation } = registerData;
      console.log("response", registerData)
      
      if (password !== password_confirmation) {
        toast.error("Passwords do not match!");
        return;
      }

      // Panggil API register
      const response = await authRegister({ username, email, password, password_confirmation }).unwrap();
      if (response) {
        console.log("response", response)
        // Jika register berhasil, tampilkan input untuk kode verifikasi
        setIsRegistered(true);
        toast.success("Registration successful! Please check your email for the verification code.");
      }
    } catch (error) {
      console.error("Registration failed", error);
      toast.error("Registration failed.");
    }
  };

  const handleVerifyCode = async () => {
    try {
      const{ email, verification_code } = verifyData;
      console.log("verifyData", verifyData)
      const response = await emailVerify({email, verification_code}).unwrap();
      if (response) {
        console.log("response", response);
      }
      setOpen(false)
    } catch (error) {
      console.error("Verification failed", error);
      toast.error("Verification failed.");
    }
  };

  return (
    <>
      <Buttons onClick={handleOpen} title="Sign Up" type="signup-button" />
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <ToastContainer/>
        <Card className="mx-auto w-full w-[40vw] bg-[#F2E6D8] text-[#BF612A] px-[3vw] pt-[1vw]">
          <CardBody className="flex flex-col gap-4">
            <Typography
              variant="h2"
              className="arya-regular text-center pb-[0.7vw] mb-[1vw] mx-[5vw] border-b-[0.2vw] border-[#BF612A]"
            >
              <b>Sign Up</b>
            </Typography>

            {!isRegistered ? (
              <>
                <Input
                  label="Your Name"
                  size="lg"
                  value={registerData.username}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, username: e.target.value })
                  }
                />
                <Input
                  label="Email"
                  size="lg"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                />
                <Input
                  type="password"
                  label="Password"
                  size="lg"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, password: e.target.value })
                  }
                />
                <Input
                  type="password"
                  label="Confirm password"
                  size="lg"
                  value={registerData.password_confirmation}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password_confirmation: e.target.value,
                    })
                  }
                />
              </>
            ) : (
              <>
              <Input
                label="email"
                size="lg"
                value={verifyData.email}
                onChange={(e) => setVerifyData({...verifyData,
                  email: e.target.value
                })
                }
              />
              <Input
                label="Verification Code"
                size="lg"
                value={verifyData.verification_code}
                onChange={(e) => setVerifyData({...verifyData,
                  verification_code: e.target.value
                })
                }
              />
              </>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            {!isRegistered ? (
              <Button
                className="bg-[#BF612A] rounded-full"
                onClick={handleRegister}
                fullWidth
              >
                Sign Up
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
            <Typography variant="small" className="mt-4 flex justify-center">
              Already have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Log In
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default SignUp;
