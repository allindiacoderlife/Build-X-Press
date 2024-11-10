import { useState, useEffect } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { ProductData } from "../assets/ProductData";
import { useParams } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const newProduct = ProductData.find((item) => item.id === parseInt(id));
    setProduct(newProduct);
    console.log(newProduct);
  }, [id]);
  return (
    <div>
      <div className="container mx-auto py-20 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image */}
          <div className="md:w-1/2 py-8 md:py-8 bg-gray-800 md:px-4 lg:px-0 h-96 flex justify-center rounded-xl outline outline-2 outline-white/20">
            <img
              src={product.image}
              alt=""
              className="h-full object-contain rounded-xl"
            />
          </div>
          {/* Description */}
          <div className="md:w-1/2 p-2 shadow-md md:p-16 flex flex-col items-center gap-y-2 bg-gray-800 outline outline-2 outline-white/20 rounded-xl">
            <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
            <p className="text-xl font-semibold text-gray-600 mb-4">
              ${product.price}
            </p>
            <div className="flex items-center mb-4 gap-x-2">
              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue="1"
                className="border p-1 w-16 bg-transparent"
              />
              <button className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800">
                Add to Cart
              </button>
            </div>
            <div className="flex flex-col gap-y-4 mt-4">
              <p className="flex items-center">
                <FaCarSide className="mr-1" />
                Delivery & Return
              </p>
              <p className="flex items-center">
                <FaQuestion className="mr-1" />
                Ask & Question
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>Product description will goes here.</p>
      </div>
    </div>
  );
};

export default Product;
