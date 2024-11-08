import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

import "../styles/Navbar.css";

const Navbar = ({ scrollToArticle }) => {
  return (
    <div className="Navbar">
      <Logo />
      <NavLinks scrollToArticle={scrollToArticle} />
    </div>
  );
};

export default Navbar;
