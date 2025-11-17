// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We deliver books quickly and securely, bringing stories to your doorstep.</p>
          <button className="subscribe-btn">Subscribe</button>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@books.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Book Street, City</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Books Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
