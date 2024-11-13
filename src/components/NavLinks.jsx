import React from "react";
import "../styles/NavLinks.css";

const NavLinks = ({ scrollToArticle }) => {
  return (
    <div className="NavLinks">
      <div className="NavLinks-desktop">
        <button className="NavLinks-button" onClick={scrollToArticle}>
          About
        </button>
        <a
          className="NavLinks-button"
          href="https://www.linkedin.com/in/kyle-mcparland-9aa877103"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <a
          className="NavLinks-button"
          href="https://www.github.com/kylemcparland"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="NavLinks-mobile">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default NavLinks;
