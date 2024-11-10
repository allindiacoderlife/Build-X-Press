import React from "react";
import img2 from "../assets/image/hd-1.jpg";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const handleshop = () => {
    navigate("/Shop");
  }
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className=" absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <img src={img2} className="size-[100%] object-cover" />
      </div>
      <div className="container relative">
        <div className="flex flex-col items-center"></div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            BuildXpress
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            A Digital Marketplace for Building Materials
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center bg-white border border-white gap-2 text-gray-900 h-12 px-6 rounded-xl" onClick={handleshop}>
            <span>🛒</span>
            <span className="font-semibold">Explore</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
