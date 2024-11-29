"use client";
import React from "react";
import HeroSlider from "./HeroSlider";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <HeroSlider />
      </div>

      {/* category section starts */}
      <div className="w-11/12 py-5">
        <div className="title_container py-2">
          <h1 className="title font-bold text-3xl">
            Find Your Style:Furniture Categories
          </h1>
        </div>
        <Categories />
      </div>
      {/* category section ends */}

      {/* featured product section starts */}
      <div className="w-11/12 py-5">
        <div className="title_container py-2">
          <h1 className="title font-bold text-3xl text-center">
            Discover Our Featured Products{" "}
          </h1>
        </div>
        <FeaturedProducts />
        {/* <Categories /> */}
      </div>
      {/* featured product section ends */}
    </div>
  );
};

export default HomePage;
