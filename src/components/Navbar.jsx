import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Navbar;
