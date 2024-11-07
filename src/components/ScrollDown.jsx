import React, { useEffect } from "react";
import "../styles/ScrollDown.css";

import useScrollPosition from "../helpers/useScrollPosition";

const ScrollDown = () => {
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);

  return (
    <div className="ScrollDown">
      {scrollPosition < 200 ? (
        <i className="fa-solid fa-hand-point-down"></i>
      ) : null}
    </div>
  );
};

export default ScrollDown;
