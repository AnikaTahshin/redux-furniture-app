import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full mx-auto h-full bg-gray-200 py-14 px-2 flex justify-center items-center">
     <div className="max-w-md w-full">
     <h1 className="py-3 font-bold text-3xl">Subscribe for Exclusive Updates</h1>
      <div className="flex">
        <input className="w-full border h-10 border-gray-400 p-2 focus:outline-none focus:border-gray-400" type="email" id="newsletteremail" name="newsletteremail" />
        <button className="bg-black hover:bg-slate-900 transition-all duration-300 ease-in text-white px-5">Send</button>
      </div>
     </div>
    </div>
  );
};

export default NewsLetter;
