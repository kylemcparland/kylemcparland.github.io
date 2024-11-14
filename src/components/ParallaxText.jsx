import React from "react";
import "../styles/ParallaxText.css";
import useScrollPosition from "../helpers/useScrollPosition";

const ParallaxText = ({ text, backwards, speed }) => {
  const scrollPosition = useScrollPosition();

  const transform = {
    transform: `translate(${
      backwards ? -scrollPosition / speed : scrollPosition / speed
    }px)`,
  };

  // const transform2 = {
  //   transform: `translate(0, ${scrollPosition / 2}px)`,
  // };

  return (
    <div className="ParallaxText">
      <ul className="ParallaxText-list" style={transform}>
        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>

        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>

        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>

        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>

        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>
      </ul>
    </div>
  );
};

export default ParallaxText;

console.log(window.scrollY);
