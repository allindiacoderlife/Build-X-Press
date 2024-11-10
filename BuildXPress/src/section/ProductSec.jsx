import React from "react";
import img3 from "../assets/image/2.jpg";
import { ProduceCard } from "../components/ProductCard";
import { Link } from "react-router-dom";
import {
  ProductData,
  ProductCement,
  ProductConcrete,
  ProductSand,
  ProductSteel,
  ProductTiles,
} from "../assets/ProductData";

const ProductSec = () => {
  const handleAddtoCart = () => {};
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <div className="">
        <h2 className="text-2xl font-bold mb-6 text-center">Cement</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ProductCement.map((item) => (
            <ProduceCard
              title={item.name}
              img={item.image}
              price={item.price}
              id={`/Product/${item.id}`}
              addToCart={true}
              onClick={handleAddtoCart}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Concrete</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ProductConcrete.map((item) => (
            <ProduceCard
              title={item.name}
              img={item.image}
              price={item.price}
              id={`/Product/${item.id}`}
              addToCart={true}
              onClick={handleAddtoCart}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Sand</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ProductSand.map((item) => (
            <ProduceCard
              title={item.name}
              img={item.image}
              price={item.price}
              id={`/Product/${item.id}`}
              addToCart={true}
              onClick={handleAddtoCart}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Steel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ProductSteel.map((item) => (
            <ProduceCard
              title={item.name}
              img={item.image}
              price={item.price}
              id={`/Product/${item.id}`}
              addToCart={true}
              onClick={handleAddtoCart}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Tiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ProductTiles.map((item) => (
            <ProduceCard
              title={item.name}
              img={item.image}
              price={item.price}
              id={`/Product/${item.id}`}
              addToCart={true}
              onClick={handleAddtoCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSec;
