import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProduceCard = ({ id, title, img, price, onClick, addToCart }) => {
  return (
    <div className="bg-gray-800 p-4 shadow rounded-lg relative border border-white/20 tranform transition-transform duration-300 hover:scale-105">
      <Link to={id}>
        <div className=" justify-center items-center">
          <img
            src={img}
            alt={title}
            className="w-48 h-48 object-cover mb-4 rounded-lg top-0 left-0 right-0 bottom-0 mx-auto"
          />
        </div>
        <h3 className="text-lg font-semibold text-center">{title}</h3>
        <p className="text-white/50 text-center">{price}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-gray-500" />
        </div>
      </Link>
      {addToCart && (
        <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-500 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition">
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block" onClick={onClick}>
            Add to Cart
          </span>
        </div>
      )}
    </div>
  );
};
