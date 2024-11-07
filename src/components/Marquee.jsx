import React from "react";
import "../styles/Marquee.css";

const Marquee = () => {
  return (
    <div className="Marquee">
      <ul className="Marquee-list">
        <li className="Marquee-list-item">FRONTEND</li>
        <li className="Marquee-list-item">BACKEND</li>
        <li className="Marquee-list-item">DATABASE</li>
        <li className="Marquee-list-item">FRONTEND</li>
        <li className="Marquee-list-item">BACKEND</li>
        <li className="Marquee-list-item">DATABASE</li>
      </ul>
      {/* CLONED LIST */}
      <ul className="Marquee-list" aria-hidden="true">
        <li className="Marquee-list-item">FRONTEND</li>
        <li className="Marquee-list-item">BACKEND</li>
        <li className="Marquee-list-item">DATABASE</li>
        <li className="Marquee-list-item">FRONTEND</li>
        <li className="Marquee-list-item">BACKEND</li>
        <li className="Marquee-list-item">DATABASE</li>
      </ul>
    </div>
  );
};

export default Marquee;
