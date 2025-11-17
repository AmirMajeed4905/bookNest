// Newsletter.jsx
import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get the latest books and updates delivered to your inbox.</p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
