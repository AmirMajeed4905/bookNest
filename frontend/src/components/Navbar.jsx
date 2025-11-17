import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Tumhara original JS logic ka React version
  const handleBarsClick = () => {
    setOpen(!open); // toggle open
  };

  return (
    <section className="nav-container">
      <div className={`nav ${open ? "open" : ""}`}>
        <div className="logo">
          <div className="logo-word">
            <span style={{ color: "orangered" }}>Book</span>Nest
          </div>
          {/* Original bars click */}
          <div className="bars" onClick={handleBarsClick}>
            |||
          </div>
        </div>

        <div className={`list ${open ? "show" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Feature</li>
            <li>Books</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={`social-icon ${open ? "show" : ""}`}>
          <ul>
            <li>F</li>
            <li>W</li>
            <li>L</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
