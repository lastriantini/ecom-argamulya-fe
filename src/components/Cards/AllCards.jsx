import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardContent from "./CardContents/cardContent";
import CardRatingImg from "../../assets/card-rating.png";

const Cards = ({ section_id }) => {
  const slides = [1, 2, 3, 4, 5];

  return (
    <>
      {section_id === 1 && (
        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={40} // Adjust space between slides
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper mx-[16vw] pt-[2vw]"
          slidesPerGroup={1} // Adjust to paginate one slide at a time
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index} className="mx-auto w-[25vw] mb-[2vw]">
              <CardContent
                type="card_ulasan"
                image={CardRatingImg}
                desc="“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae accumsan purus, imperdiet sagittis nibh. Aliquam erat volutpat “"
                rating={4}
                title="kambing_jantan"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Cards;
