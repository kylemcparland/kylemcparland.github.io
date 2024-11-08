import React from "react";

export const photoLabsLink = "https://www.github.com/kylemcparland/photolabs";

export const photoLabsPhotos = [
  {
    url: "images/PL/1.gif",
    caption:
      "React's state management system enables persistent favourites across the page!",
  },
  {
    url: "images/PL/2.png",
    caption: "Click on a photo to open a detailed photo modal.",
  },
  { url: "images/PL/3.png", caption: "Screenshot of PhotoLabs homepage." },
  {
    url: "images/PL/4.png",
    caption: "Your favourites have a pop-up modal too!.",
  },
  {
    url: "images/PL/5.gif",
    caption: "Dynamically sort photos by topic... Or explore all photos!",
  },
];

export const PhotoLabs = () => {
  return (
    <div>
      <span>
        JS &#x2022; React &#x2022; Express &#x2022; Node.js &#x2022; SASS
        &#x2022; PostgreSQL
      </span>
      <p>
        PhotoLabs is a full-stack, React-based single-page application (SPA)
        that enables users to dynamically explore and interact with photos.
        Users can sort images by topic and mark them as favourites, utilizing
        React's state management system. This project focuses on the front-end,
        client-side user experience, and integrates various technologies
        including React, PostgreSQL, Node.js, and Express.
        <br />
        <br />
        The coolest thing I learned while working on this project was how to
        utilize useState and useEffect. Connecting the fav-button component to
        state was SO satisfying and the way it persists across the page made the
        app feel so snappy!
      </p>
    </div>
  );
};
