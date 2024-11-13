import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import useMousePosition from "../helpers/useMousePosition";
import useWindowWidth from "../helpers/useWindowWidth";

const Header = () => {
  const mousePosition = useMousePosition();
  const headerHeight = useWindowWidth();

  //MIN-MAX RATIO CONVERSION:
  // new_value = ( (old_value - old_min) / (old_max - old_min) ) * (new_max - new_min) + new_min

  // Convert horizontal mouse position into scaleX...
  const horizontalMove = (mousePosition.x / window.innerWidth) * 100;
  const scaleX = ((horizontalMove - 0) / (100 - 0)) * (2 - 0.3) + 0.3;

  // Convert vertical mouse position into skewX value...
  const verticalMove = (mousePosition.y / window.innerHeight) * 100;
  const skewX = ((verticalMove - 0) / (100 - 0)) * (12 - -12) + -10;

  // Convert horizontal mouse position into fontWeight value...
  const fontWeight = ((horizontalMove - 0) / (100 - 0)) * (900 - 700) + 700;

  // Store updated values to pass to Hero-text...
  const transform = {
    fontWeight: fontWeight,
    fontSize: "9.5vw",
    lineHeight: "6.8vw",
    transform: `skewX(${skewX}deg) scaleY(1.9) scaleX(${scaleX}) `,
  };

  return (
    <div className="Header" style={{ height: headerHeight }}>
      <div className="Hero">
        <p className="Hero-text" style={transform}>
          FRONTEND
        </p>
        <p className="Hero-text" style={transform}>
          BACKEND
        </p>
        <p className="Hero-text" style={transform}>
          DATABASE
        </p>
      </div>
    </div>
  );
};

export default Header;
