import React from "react";
import { Button } from "flowbite-react/lib/esm/components";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <h1 className="text-2xl lg:text-6xl font-bold">Welcome to Babri's PhotoGraphy</h1>
        <p className="w-full lg:w-3/5 mx-auto mt-5">
          I am a professional photographer. If you are interesed in photoshot
          then you are in the right place. If you want to see my services. then
          kindly check my services section. And for photoshot kindly contact me.
        </p>
        <button type="button" className="d-block mx-auto mt-5 text-white border-2 border-white hover:text-black hover:border-2 b order-black font-bold bg-transparent hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800 ">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
