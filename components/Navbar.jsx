"use client";

import Link from "next/link";
import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Cart",
      path: "/cart",
    },
    {
      label: "Wishlist",
      path: "/wishlist",
    },
  ];
  return (
    <div className="w-full flex justify-center py-4 items-center">
      <div className="w-10/12 flex justify-center items-center px-2 py-4">
        <div className="flex-1">
          <h1 className="logo font-bold text-2xl">Bohemian</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <ul className="flex gap-2 justify-center items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-center items-center text-xl gap-2">
          <FaRegHeart />
          <RiShoppingCartLine />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
