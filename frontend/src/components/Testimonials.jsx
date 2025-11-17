// Testimonials.jsx
import React from "react";
import "./Testimonials.css";

const testimonials = [
  { name: "Alice", text: "Amazing collection! I found all my favorite books here." },
  { name: "Bob", text: "Fast delivery and excellent service. Highly recommend!" },
  { name: "Catherine", text: "The website is very easy to navigate and user-friendly." },
   { name: "Alice", text: "Amazing collection! I found all my favorite books here." },
  { name: "Bob", text: "Fast delivery and excellent service. Highly recommend!" },
  { name: "Catherine", text: "The website is very easy to navigate and user-friendly." },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Readers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
