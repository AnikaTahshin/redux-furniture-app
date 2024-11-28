"use client";
import React from "react";
import HeroSlider from "./HeroSlider";
import Categories from "./Categories";
const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <HeroSlider />
      </div>
      <div className="w-11/12 py-5">
      <div className="title_container py-2">
        <h1 className="title font-bold text-3xl">
          Find Your Style:Furniture Categories
        </h1>
      </div>
        <Categories />
      </div>
    </div>
  );
};

export default HomePage;
