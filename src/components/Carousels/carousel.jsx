import { Carousel } from "@material-tailwind/react";
 
export function Carousels(props) {
    const { title, description, image, type } = props;
  return (
    <Carousel
      className="rounded-xl h-[38vw] rounded-none"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={image}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={image}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={image}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}