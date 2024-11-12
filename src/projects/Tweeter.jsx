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
      <span>Node.js &#x2022; Express &#x2022; jQuery &#x2022; SASS</span>
      <p>
        <i>Tweeter</i> is a single-page web application that mimics core Twitter
        functionalities, focusing on a dynamic, interactive user interface.
        Users can post and view tweets in real time, with the front-end built
        using JS & jQuery, and the back-end powered by Node.js & Express. The
        app uses AJAX for seamless, real-time updates without page refreshes,
        and SASS for maintainable styling.
        <br />
        <br />
        My key takeaway from this project was learning to build responsive UIs
        with <strong>jQuery</strong> and Flexbox while adhering to given design
        specifications. I focused on creating semantic, accessible HTML/CSS
        layouts and used <strong>jQuery</strong> to manipulate the DOM, bind
        event handlers, and implement AJAX for real-time updates.
      </p>
    </div>
  );
};
