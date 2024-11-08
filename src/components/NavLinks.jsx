import React from "react";
import "../styles/NavLinks.css";

const NavLinks = ({ scrollToArticle }) => {
  const scrollToAbout = () => {
    window.scrollTo({ top: 777, behavior: "smooth" });
  };

  return (
    <div className="NavLinks">
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
      <button className="NavLinks-button">
        <i className="fa-solid fa-moon"></i>
      </button>

      {/* For hover: */}
      {/* <i class="fa-regular fa-moon"></i> */}
    </div>
  );
};

export default NavLinks;
