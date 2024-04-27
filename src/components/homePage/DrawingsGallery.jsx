import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay, Navigation, Pagination } from "swiper/modules";



export const DrawingsGallery = ({imgList}) => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-theme-color": "rgb(192 132 252 / var(--tw-text-opacity)",
        }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={imgList[0]}
            alt=""
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgList[1]}
            alt=""
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgList[2]}
            alt=""
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgList[3]}
            alt=""
            className="rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
