
const HeroSection = ({ image, type }) => {
    return (
        <>
        {type == "hero_home" && (
            <img className="mx-auto h-[30vw]" src={image} alt={image}/>
        )}
        {type == "hero_about" && (
            <img className="mr-auto w-[42vw] mb-[10vw]" src={image} alt={image}/>
        )}
        {type == "hero_kerjasama" && (
            <img className="ml-[10vw] py-[1vw] w-[17vw]" src={image} alt={image}/>
        )}
        </>
    )
} 
export default HeroSection 