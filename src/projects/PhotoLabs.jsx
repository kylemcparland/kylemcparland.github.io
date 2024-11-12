import React from "react";

export const photoLabsLink = "https://www.github.com/kylemcparland/photolabs";

export const photoLabsPhotos = [
  {
    url: "images/PL/1.gif",
    caption:
      "React's state management system enables persistent favourites across the application.",
  },
  {
    url: "images/PL/2.png",
    caption: "View details: Click on a photo to open a detailed photo modal.",
  },
  {
    url: "images/PL/3.png",
    caption: "The homepage showcases a curated selection of photos.",
  },
  {
    url: "images/PL/4.png",
    caption: "Access your saved favourites via a quick pop-up modal.",
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
        React &#x2022; Node.js &#x2022; Express &#x2022; SASS &#x2022;
        PostgreSQL
      </span>
      <p>
        <i>PhotoLabs</i> is a React-based, single-page application that allows
        users to explore and interact with a collection of images. Users can
        filter images by topic and mark favourites, all within a responsive UI
        built with SASS. The app integrates a PostgreSQL database for persistent
        data storage, with Node.js and Express handling the server-side logic.
        <br />
        <br />
        My key takeaway from this project was utilizing React's{" "}
        <strong>useState</strong> and <strong>useEffect</strong> hooks to manage
        and persist state across sessions. One of the highlights was
        implementing the real-time favorite button functionality, which
        significantly enhanced my understanding of React and state management in
        web development.
      </p>
    </div>
  );
};
