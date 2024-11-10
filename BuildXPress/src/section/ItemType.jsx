import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductData , ProductType } from "../assets/ProductData";
import img3 from "../assets/image/2.jpg";

const ItemList = [
  { title: "Cement", img: img3 },
  { title: "Cement", img: img3 },
  { title: "Cement", img: img3 },
  { title: "Cement", img: img3 },
  { title: "Cement", img: img3 },
  { title: "Cement", img: img3 },
  { title: "Cement", img: img3 },
  { title: "Cement", img: img3 },
];

const ItemType = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Shop");
  };

  return (
    <div className="py-10 px-2">
      <div className="flex gap-4 overflow-x-scroll overflow-hidden cursor-pointer">
        {ProductType.map((item, index) => (
          <div
            key={index}
            onClick={handleClick}
            className="flex flex-col items-center sm:size-[100px] lg:size-[300px] bg-gray-800 p-4 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full sm:size-[100px] md:size-[200px] lg:size-[300px] mx-7"
            />
            <h1 className="text-lg sm:text-sm">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemType;
