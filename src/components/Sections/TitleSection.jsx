import { Typography } from "@material-tailwind/react"

const TitleSection = ({ title, type }) => {
    return (
        <>
        {type === "title_home" && (
            <Typography className="text-center mt-[-27vw]">
                <div dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
        )}
        {type === "title_about" && (
            <Typography className="text-center my-[3vw]">
                <div dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
        )}
        {type === "title_kerjasama" && (
            <Typography className="text-center my-[4vw]">
                <div dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
        )}
        </>
    )
} 
export default TitleSection