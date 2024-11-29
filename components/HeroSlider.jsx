"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import slides from '../public/img/Hero_Slider/slider.json'
import Link from "next/link";

const HeroSlider = () => {

 

  return (
    <div className="w-full">
      <Swiper
        slideperview ={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {slides.heroSlider.length > 0 &&
          slides?.heroSlider?.map((slide) => (
            <SwiperSlide key={slide.id} className="max-h-[90vh] relative">
              <Image
                src={`/`+slide?.image}
                width={400}
                height={350}
                alt="Picture of the author"
              />

              <div className="text-container absolute top-[30%] text-center w-full h-full">
                <h1 className="font-bold text-5xl text-slate-800">{slide.title}</h1>
                <p className="text-sm italic py-3 text-gray-100">{slide.subtitle}</p>
              
              <Link href={slide.link}>
              <button className="font-bold bg-lime-400 px-5 text-sm hover:bg-lime-600 transition ease-in duration-200 py-2">{slide.buttonText}</button>

              </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
