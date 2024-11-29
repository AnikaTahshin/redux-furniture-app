import React from "react";
import ProductCard from "./ProductCard";
import product from "../public/img/Products/products.json";
import { FaArrowRightLong } from "react-icons/fa6";

const BestSeller = () => {
  return (
    <>
      
      <div className="w-full grid grid-cols-3 py-3 gap-3">
        {product.products.slice(3,9).map((item, index) => (
          <div key={item.id} className="">
            {/* <h1>{item.name}</h1> */}
            <ProductCard data={item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full">
        <button className="flex hover:text-lime-400 transition-all duration-500 ease-linear font-bold gap-2 items-center justify-center mx-auto">
          View More <FaArrowRightLong />
        </button>
      </div>
    </>
  );
};

export default BestSeller;
