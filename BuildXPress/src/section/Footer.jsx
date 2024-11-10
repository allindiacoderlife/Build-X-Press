import React from "react";
import { PiFacebookLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="py-3 md:py-4 lg:py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <div className="lg:w-[33%]">
            <h1 className="uppercase font-serif font-semibold text-2xl">
              buildxpress
            </h1>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatum quae sint ipsa fuga!
            </p>
            <div className="flex flex-row gap-3">
              <PiFacebookLogoBold className="size-10" />
              <PiFacebookLogoBold className="size-10" />
              <PiFacebookLogoBold className="size-10" />
              <PiFacebookLogoBold className="size-10" />
            </div>
          </div>
          <div className="">
            <h1 className="uppercase font-serif font-semibold text-2xl">
              Contect Info
            </h1>
            <div>
              <p>• 201 Liverpool Street, Suite 721, London</p>
              <p>• London, United Kingdom</p>
              <p>• youremail@yourdomain.com</p>
              <p>• +88 (0) 101 0000 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
