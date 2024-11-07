import React, { useState } from "react";
import "../styles/Carousel.css";

const Carousel = ({ photos }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function nextPhoto() {
    if (imageIndex < photos.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  function prevPhoto() {
    if (imageIndex === 0) {
      setImageIndex(photos.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  const currentImage = photos[imageIndex];

  return (
    <div className="Carousel">
      <button className="Carousel-button Carousel-previous" onClick={prevPhoto}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className="Carousel-button Carousel-next" onClick={nextPhoto}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
      <img className="Carousel-image" src={currentImage.url} />
      <div className="Carousel-caption">
        <span>
          {imageIndex + 1}. {currentImage.caption}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
