// import heroImage from "../assets/download.jpg";
import React from "react";
import Lottie  from "lottie-react";
import booksAnimation from "../assets/lottie/book.json"; // ensure valid JSON


const Hero = () => {
  return (
<section className="hero">
  <div className="hero-section">
    <div className="hero-content">
      <h1>Discover Your Next Favorite Book</h1>
      <p>Find bestsellers, new arrivals, and hidden gems across all genres.</p>
      <button type="button">Browse Books</button>
      <ul className="hero-features">
        <li>Bestsellers & New Arrivals</li>
        <li>Free shipping on orders $50+</li>
        <li>Gift cards & special offers</li>
      </ul>
    </div>
    <div className="hero-image">
{/* <img src="https://covers.openlibrary.org/b/id/8231996-M.jpg" alt="Book Cover" />
 */}
 <Lottie animationData={booksAnimation} loop={true} />

    </div>
  </div>
</section>

  );
};

export default Hero;
