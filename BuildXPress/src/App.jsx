import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home , Shop , Cart , Product , ProductList , ReadmeMore} from "./pages";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Readme/:id" element={<ReadmeMore />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
