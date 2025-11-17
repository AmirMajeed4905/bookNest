import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CosmnaSection from "../components/CosmnaSection";
import FeaturedBooks from "../components/FeaturedBooks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
    <Hero />
     <CosmnaSection/>
      <FeaturedBooks />
      <Testimonials />
      <Newsletter />
     <Footer/>
    </div>
  );
};

export default Home;
