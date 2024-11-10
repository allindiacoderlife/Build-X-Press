import React from "react";
import img3 from "../assets/image/2.jpg";
import { ProduceCard } from "../components/ProductCard";
import { Link } from "react-router-dom";
import { ProductData, ProductShop } from "../assets/ProductData";
import { useNavigate } from "react-router-dom";

const ShopDatas = [
  {
    id: 1,
    title: "Cement",
    img: img3,
    price: "100",
  },
  {
    id: 2,
    title: "Cement",
    img: img3,
    price: "100",
  },
  // ... other items
];

const Shopping = () => {
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {ProductShop.map((item) => (
            <ProduceCard
              title={item.name}
              img={item.image}
              id="/ProductList"
              price={item.price}
            />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
