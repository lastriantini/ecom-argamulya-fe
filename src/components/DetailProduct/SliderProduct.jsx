import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SliderProduct = ({ image }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [1, 2, 3, 4, 5]; // Assuming this is a placeholder

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        // Only pass thumbs if thumbsSwiper is not null
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 pt-[1.5vw]"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={image} className="w-[50vw] h-[25vw] object-contain pb-[0.5vw]"/>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={7}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={image} className="h-[6.5vw] w-[100vw]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderProduct;
