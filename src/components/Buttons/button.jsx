import React from "react";
import { Button } from "@material-tailwind/react";

const Buttons = ({ title, type }) => {
  return (
    <>
      {type === "login-button" && (
        <Button
          // onClick={}
          variant="outlined"
          style={{
            borderColor: "#BF612A",
            color: "#BF612A",
            width: "8vw",
            height: "3vw",
          }}
          className="mr-[0.5vw] rounded-full border-2 arya-bold text-center"
        >
          <h5 style={{fontSize: "1.1vw", marginTop: "-0.2vw"}}>{title}</h5>
        </Button>
      )}
      {type === "signup-button" && (
        <Button
          // onClick={}
          variant="filled"
          style={{
            backgroundColor: "#BF612A",
            color: "#F8FBED",
            width: "8vw",
            height: "3vw",
          }}
          className="rounded-full arya-bold"
        >
          <h5 style={{fontSize: "1.1vw", paddingTop: "-1.5vw"}}>{title}</h5>
        </Button>
      )}
    </>
  );
};

export default Buttons;
