import { Typography } from "@material-tailwind/react";

const TitleSection = ({ title, type }) => {
  return (
    <>
      {type === "title_home" && (
        <Typography className="text-center mt-[-12vw] px-[7vw] py-[3vw]">
          <div dangerouslySetInnerHTML={{ __html: title }} />
        </Typography>
      )}
      {type === "title_about" && (
        <Typography className="text-center my-[3vw]">
          <div dangerouslySetInnerHTML={{ __html: title }} />
        </Typography>
      )}
      {type === "title_kerjasama" && (
        <Typography className="text-center my-[3.5vw] ml-[-3vw]">
          <div dangerouslySetInnerHTML={{ __html: title }} />
        </Typography>
      )}
      {type === "title_ulasan" && (
        <div style={{backgroundColor: "#F2E6D8", border: "2px solid #BF612A"}} className="mx-[35vw] mb-[3vw] rounded-full">
          <Typography style={{ fontSize: "2.5vw" }} className="text-center pt-[0.5vw]">
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </Typography>
        </div>
      )}
    </>
  );
};
export default TitleSection;
