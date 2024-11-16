import React, { useEffect } from "react";
import "../styles/ScrollDown.css";

import useScrollPosition from "../helpers/useScrollPosition";

const ScrollDown = () => {
  const scrollPosition = useScrollPosition();

  // console.log(scrollPosition);

  return (
    <div className="ScrollDown-container">
      {scrollPosition < 200 ? (
        <div className="ScrollDown">
          <i className="fa-solid fa-hand-point-down"></i>
        </div>
      ) : null}
    </div>
  );
};

export default ScrollDown;
