import { Typography } from "@material-tailwind/react"

const DescSection = ({ desc, type }) => {
    return (
        <>
        {type === "desc_about" && (
            <Typography className="mr-[1.5vw] pl-[14vw] text-right">
                <div dangerouslySetInnerHTML={{ __html: desc }} />
            </Typography>
        )}
        {type === "desc_kerjasama" && (
            <Typography style={{fontSize: "1.45vw"}} className="mt-[0vw] pl-[14vw] mr-[-5vw] py-[5.5vw] text-left">
                <div dangerouslySetInnerHTML={{ __html: desc }} />
            </Typography>
        )}
        </>
    )
} 
export default DescSection