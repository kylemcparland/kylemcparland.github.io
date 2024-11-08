import React from "react";
import Carousel from "./Carousel";
import "../styles/Project.css";

const Project = ({ description, link, photos, title }) => {
  return (
    <div className="Project">
      <div className="Project-container">
        <div className="Project-header">
          <h1 className="Project-header-title">{title}</h1>
        </div>
        <div className="Project-body">
          {description}
          <div className="Project-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="Project-button">
                {/* <i className="fa-brands fa-github"></i> */}
                View on GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
      <Carousel photos={photos} />
    </div>
  );
};

export default Project;
