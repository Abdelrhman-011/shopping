import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Footer from "./Footer";
import PageCategories from "./home/PageCategories";
import PageofDetialsproduct from "./home/PageofDetialsproduct";
import Cart from "./home/Cart";
import OutputSearch from "./home/OutputSearch";
import Login from "./home/Login";
import Signup from "./home/Signup";

const App = () => {
  return (
    <div className="bg-light">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<PageCategories />} />
        <Route
          path="/category/product/details/:id"
          element={<PageofDetialsproduct />}
        />
        <Route path="/category/cart" element={<Cart />} />
        <Route path="/search" element={<OutputSearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
