import React from "react";
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

function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Buttons onClick={handleOpen} title="Sign Up" type="signup-button" />
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full w-[40vw] bg-[#F2E6D8] text-[#BF612A] px-[3vw] pt-[1vw]">
          <CardBody className="flex flex-col gap-4">
            <Typography
              variant="h2"
              color="BF612A"
              className="arya-regular text-center pb-[0.7vw] mb-[1vw] mx-[5vw] border-b-[0.2vw] border-[#BF612A]"
            >
              <b>Sign Up</b>
            </Typography>
            <Input label="Your Name" size="lg" bg="rgba(66, 45, 28, 0.15)" />
            <Input label="Email" size="lg" />
            <Input type="password" label="Password" size="lg" />
            <Input type="password" label="Confirm password" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="bg-[#BF612A] rounded-full"
              onClick={handleOpen}
              fullWidth
            >
              Sign Up
            </Button>
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
export default Login;
