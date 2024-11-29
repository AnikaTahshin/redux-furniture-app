import React from "react";
import ProductCard from "./ProductCard";
import product from "../public/img/Products/products.json";
const FeaturedProducts = () => {
  return (
    <div className="w-full grid grid-cols-3">
      {product.products.map((item, index) => (
        <div key={item.id} className="">
            {/* <h1>{item.name}</h1> */}
          <ProductCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
