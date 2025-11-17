// CosmnaSection.jsx
import React from "react";
import "./CosmnaSection.css";

const features = [
  { icon: "📚", title: "Wide Collection", desc: "Explore thousands of books across genres." },
  { icon: "🚚", title: "Fast Delivery", desc: "Get your books delivered at lightning speed." },
  { icon: "💳", title: "Secure Payments", desc: "Safe and reliable payment methods." },
];

const CosmnaSection = () => {
  return (
    <section className="cosmna-section">
      <div className="container">
        <h2>Our Features</h2>
        <div className="cards">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <button className="learn-more">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmnaSection;
