import React from "react";

export const tweeterPhotos = [
  {
    url: "images/Tweeter/1.gif",
    caption:
      "Tweet whatever you like and Tweeter will generate a Username and Handle for you!",
  },
  {
    url: "images/Tweeter/2.gif",
    caption: "",
  },
  {
    url: "images/Tweeter/3.gif",
    caption: "",
  },
  {
    url: "images/Tweeter/4.gif",
    caption: "",
  },
  {
    url: "images/Tweeter/5.png",
    caption: "",
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
