
const HeroSection = ({ image, type }) => {
    return (
        <>
        {type == "hero_home" && (
            <img className="mx-auto h-[30vw]" src={image} alt={image}/>
        )}
        {type == "hero_about" && (
            <img className="mx-auto w-[42vw] mb-[10vw]" src={image} alt={image}/>
        )}
        {type == "hero_kerjasama" && (
            <img className="" src={image} alt={image}/>
        )}
        </>
    )
} 
export default HeroSection 