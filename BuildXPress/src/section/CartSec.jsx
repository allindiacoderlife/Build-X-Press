import { useState } from "react";
import { TbGardenCart } from "react-icons/tb";
import CartScreen from "../components/CartScreen";

const CartList = [
  {
    title: "Product 1",
    price: 100,
    quatity: 2,
    img: "src/assets/image/2.jpg",
  },
  {
    title: "Product 1",
    price: 100,
    quatity: 2,
    img: "src/assets/image/2.jpg",
  },
];

const CartSec = () => {
  const [EmptyCart, setEmptyCart] = useState(false);
  return (
    <div className="container mx-auto py-20 px-4 md:px-16 lg:px-24">
      {EmptyCart ? (
        <div className="flex flex-col items-center py-10">
          <TbGardenCart className="size-[300px]" />
          <h3>Your Cart is Empty</h3>
          <p className="text-sm text-white/50">Add something to make a happy</p>
        </div>
      ) : (
        <div className="">
          <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-sm font-bold">
                <p>Product</p>
                <div className="flex space-x-8">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>SubTotal</p>
                  <p>Remove</p>
                </div>
              </div>
              <div>
                {CartList.map((Product) => (
                  <div className="" key={Product}>
                    <CartScreen
                      title={Product.title}
                      img={Product.img}
                      price={Product.price}
                      quantity={Product.quatity}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 p-6 rounded-lg shadow-md border mt-2">
                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                <div className="flex justify-between mb-5 border-b pb-1">
                  <span className="text-sm">Total Item:</span>
                  <span>{}totalQautity</span>
                </div>
                <div className="mb-4 border-b pb-2">
                  <p>Shipping:</p>
                  <p className="ml-2">Shipping to:{""}</p>
                  <span className="text-xs font-bold">{}address</span>
                  <button className="text-blue-500 hover:underline mt-1 ml-2">
                    change address
                  </button>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total Price :</span>
                  <span>{""}</span>
                </div>
                <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800 rounded-2xl">
                  Proceed to Checkout
                </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSec;
