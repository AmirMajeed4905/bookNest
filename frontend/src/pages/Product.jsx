import React from "react";
import Hero from "../components/Hero";
import CosmnaSection from "../components/CosmnaSection";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const Product = () => {
  return (
    <div>
      <Hero />
      <ProductList />
      <CosmnaSection />
      <Footer />
    </div>
  );
};

export default Product;
