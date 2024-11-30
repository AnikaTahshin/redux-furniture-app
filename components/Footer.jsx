import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import Image from "next/image";
import card from '../public/img/card.png'

const Footer = () => {
  return (
    <>
      <div className="w-11/12 mx-auto h-full gap-3 px-3 py-5  flex justify-center items-center">
        <div className="col flex-1">
          <h1 className="logo font-bold text-2xl">Bohemian</h1>
          <p className="text-sm text-gray-500 italic py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            doloremque nam voluptas consequuntur sapiente aspernatur saepe rem
            doloribus esse dolore voluptatibus tempora hic dicta ad voluptatem
            voluptatum, beatae deserunt. Odit.
          </p>
        </div>
        <div className="col flex-1">
          <h1 className="font-bold py-2 title text-2xl">Quick Links</h1>
          <ul className="flex flex-col gap-3 w-fit">
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Home
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              About
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Contact
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Shop
            </li>
          </ul>
        </div>

        <div className="col flex-1">
          <h1 className="font-bold py-2 title text-2xl">Terms & Conditions</h1>
          <ul className="flex flex-col gap-3 w-fit">
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Privacy Policy
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Terms of use
            </li>
          </ul>
        </div>

        <div className="col flex-1">
          <h1 className="font-bold py-2 title text-2xl">Social Links</h1>
          <ul className="flex text-2xl gap-3 w-fit">
            <li className="font-bold hover:text-lime-400 cursor-pointer transition-all ease-linear duration-300 rounded-sm hover:text-white">
              <button className="p-3 bg-lime-400">
                <FaFacebook />
              </button>
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer transition-all ease-linear duration-300 hover:text-white">
              <button className="p-3 bg-lime-400">
                <FaSquareInstagram />
              </button>
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              <button className="p-3 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 hover:text-white">
                <FaSquareXTwitter />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-11/12 border-t border-gray-600 mx-auto py-3 justify-between items-center">
        <h4 className="flex items-center gap-2 font-semibold">
          <FaRegCopyright />All rights reserved Bohemian 2024.
        </h4>
        <Image src={card} className="object-cover" width={200} height={200} alt="" />
      </div>
    </>
  );
};

export default Footer;
