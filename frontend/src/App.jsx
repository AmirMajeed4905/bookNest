import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import CosmnaSection from "./components/CosmnaSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/feature" element={<CosmnaSection/>} />
        <Route path="/categories" element={<div>Categories Page</div>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
