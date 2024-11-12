import React from "react";
import "../styles/MobileHeader.css";

// <==== MOBILE HEADER ====> //
// <==== MOBILE HEADER ====> //

const MobileHeader = () => {
  return (
    <div className="MobileHeader">
      <div className="Hero-mobile">
        <p className="Hero-text">FRONTEND</p> <br />
        <p className="Hero-text">BACKEND</p> <br />
        <p className="Hero-text">DATABASE</p> <br />
      </div>
      <img className="Hero-image" src="images/logotest2.png" />
    </div>
  );
};

export default MobileHeader;
