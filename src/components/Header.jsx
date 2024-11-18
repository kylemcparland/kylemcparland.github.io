import React from "react";
import "../styles/Header.css";
import useMousePosition from "../helpers/useMousePosition";
import useWindowWidth from "../helpers/useWindowWidth";

const Header = () => {
  const mousePosition = useMousePosition();
  const headerHeight = useWindowWidth();

  //MIN-MAX RATIO CONVERSION:
  // new_value = ( (old_value - old_min) / (old_max - old_min) ) * (new_max - new_min) + new_min

  // Default HEADER size...
  const defaultScaleX = 1.2;
  const defaultSkewX = 0;
  const defaultFontWeight = 800;

  // Convert horizontal mouse position into scaleX...
  const horizontalMove =
    mousePosition.x !== null ? (mousePosition.x / window.innerWidth) * 100 : 50;
  const scaleX =
    mousePosition.x !== null
      ? ((horizontalMove - 0) / (100 - 0)) * (1.9 - 0.3) + 0.3
      : defaultScaleX;

  // Convert vertical mouse position into skewX value...
  const verticalMove =
    mousePosition.y !== null
      ? (mousePosition.y / window.innerHeight) * 100
      : 50;
  const skewX =
    mousePosition.y !== null
      ? ((verticalMove - 0) / (100 - 0)) * (12 - -12) + -10
      : defaultSkewX;

  // Convert horizontal mouse position into fontWeight value...
  const fontWeight =
    mousePosition.x !== null
      ? ((horizontalMove - 0) / (100 - 0)) * (900 - 700) + 700
      : defaultFontWeight;

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
