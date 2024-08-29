import { Typography } from "@material-tailwind/react"

const DescSection = ({ desc, type }) => {
    return (
        <>
        {type === "desc_about" && (
            <Typography className="mt-[0vw] pl-[14vw] text-right">
                <div dangerouslySetInnerHTML={{ __html: desc }} />
            </Typography>
        )}
        {type === "desc_kerjasama" && (
            <Typography className="mt-[0vw] pl-[14vw] py-[5vw] text-right">
                <div dangerouslySetInnerHTML={{ __html: desc }} />
            </Typography>
        )}
        </>
    )
} 
export default DescSection