import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartScreen = ({ title, img, price, quatity }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <div className="md:flex items-center justify-center space-x-4">
        <img src={img} alt={title} className="size-16 object-contain rounded" />
        <div className="flex-1 ml-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
      <div className="flex space-x-12 items-center">
        <p>${price}</p>
        <div className="flex items-center justify-center">
          <button className="text-xl px-1 outline">-</button>
          <p className="text-xl px-2 text-white">1</p>
          <button className="text-xl px-1 outline">+</button>
        </div>
        <p>${price * 1}</p>
        <button className="text-red-500 hover:text-red-700">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
