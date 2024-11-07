import React from "react";

export const tweeterPhotos = [
  {
    url: "images/T-1.gif",
    caption:
      "Tweet whatever you like and Tweeter will generate a Username and Handle for you!",
  },
  {
    url: "images/T-2.png",
    caption: "Even the Tweets have responsive design!",
  },
];

export const tweeterLink = "https://github.com/kylemcparland/tweeter";

export const Tweeter = () => {
  return (
    <div>
      <span>
        <strong>JS, jQuery, Express, SASS, Node.js</strong>
      </span>
      <p>
        Tweeter is a streamlined, single-page web application that emulates the
        core functionalities of Twitter. It was built to hone proficiency in
        front-end technologies such as HTML, CSS, JavaScript, jQuery, and AJAX
        -- as well as back-end development with Node.js and Express.
      </p>
    </div>
  );
};
