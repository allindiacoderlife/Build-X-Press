import React from "react";
import { Header, Hero, Slide, Taps, Footer, ItemType } from "../section";
const Home = () => {
  return (
    <div className="text-white bg-gray-900">
      <Header />
      <Hero />
      <ItemType />
      <Slide />
      <Taps />
      <Footer />
    </div>
  );
};

export default Home;
