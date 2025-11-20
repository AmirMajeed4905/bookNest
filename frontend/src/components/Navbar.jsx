import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleBarsClick = () => {
    setOpen(!open);
  };

  return (
    <section className="nav-container">
      <div className={`nav ${open ? "open" : ""}`}>
        <div className="logo">
          <div className="logo-word">
            <span style={{ color: "orangered" }}>Book</span>Nest
          </div>

          <div className="bars" onClick={handleBarsClick}>
            |||
          </div>
        </div>

        <div className={`list ${open ? "show" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/feature">Feature</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={`social-icon ${open ? "show" : ""}`}>
           <ul>
            
            <li><Link to="/feature">Feature</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
