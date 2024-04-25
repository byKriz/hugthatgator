import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import screenshot from "../../public/screenshots/screenshot5.webp";

const algo = "../../public/drawings/drawing3.webp"

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Image } from "astro:assets";

export const DrawingsGallery = () => {
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
            src="../../public/drawings/drawing1.webp"
            alt=""
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../public/drawings/drawing2.webp"
            alt=""
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../public/drawings/drawing3.webp"
            alt=""
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../public/drawings/drawing4.webp"
            alt=""
            className="rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
