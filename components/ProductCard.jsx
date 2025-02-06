"use client";

import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const ProductCard = ({ data }) => {
  return (
    <div className="w-full h-full group cursor-pointer">
      <div className="relative  overflow-hidden">
        <Image src={`/` + data?.images[0]} alt="" width={450} height={400} />
        <div className="absolute -bottom-10 w-full transition-all duration-500 ease-in-out group-hover:bottom-2 flex justify-center">
          <button className=" w-11/12 mx-auto bg-lime-200 hover:bg-lime-400 transition-all duration-200 ease-linear py-2 ">
            Add to cart
          </button>

          
        </div>
        <div className="p-2 text-xl absolute top-2 -right-20 group-hover:right-4 transition-all duration-500 ease-in-out flex flex-col gap-3">
            <button className="bg-lime-200 transition-all duration-200 ease-linear hover:bg-lime-400 p-3 rounded-full">
              <FaRegHeart />
            </button>
            <button className="bg-lime-200 transition-all duration-200 ease-linear hover:bg-lime-400 p-3 rounded-full">
              <FaRegEye/>
            </button>
          </div>
      </div>

      <div className="py-4 px-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{data?.name}</h1>
          <h4 className="font-bold text-lime-500">{data?.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
