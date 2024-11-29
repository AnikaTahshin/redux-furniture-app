import Image from "next/image";
import React from "react";
import banner from "../public/img/Hero_banner/01.jpg";
import banner2 from "../public/img/Hero_banner/04.jpg";

const OfferBanner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-3">
      <div className="flex-1 relative">
        <div>
          <Image
            src={banner}
            className="h-full w-full"
            height=""
            width=""
            alt=""
          />
        </div>
        <div className="absolute bottom-4 p-3">
          <h1 className="text-[clamp(1em,2.5vw,3em)] font-semibold">
            Exclusive Deal:
          </h1>
          <h1 className="text-[clamp(1em,3vw,4em)] font-bold">
            Save Big on Stylish Chairs!
          </h1>
        </div>
      </div>
      <div className="flex-1 relative">
        <div>
          <Image
            src={banner2}
            className="h-full w-full"
            height=""
            width=""
            alt=""
          />
        </div>
        <div className='absolute top-4 p-3'>
                <h1 className='text-[clamp(1em,2.5vw,3em)] font-semibold'>Limited Time Offer:</h1>
                <h1 className='text-[clamp(1em,3vw,4em)] font-bold'>Get Cozy with Discounted Sofas!</h1>

            </div>
      </div>
    </div>
  );
};

export default OfferBanner;
