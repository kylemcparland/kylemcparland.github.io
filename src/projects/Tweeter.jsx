import React from "react";

export const tweeterPhotos = [
  {
    url: "images/Tweeter/1.gif",
    caption:
      "New tweet in the feed: User's tweet instantly appears alongside others in real time.",
  },
  {
    url: "images/Tweeter/2.gif",
    caption:
      "The interface adjusts seamlessly to fit mobile screens for on-the-go tweeting.",
  },
  {
    url: "images/Tweeter/3.gif",
    caption: "Drawing a blank? How about a Simpsons quote?",
  },
  {
    url: "images/Tweeter/4.gif",
    caption: "Character limit warning: Error messages are clear and concise.",
  },
  {
    url: "images/Tweeter/5.png",
    caption:
      "Trying to send an empty tweet also triggers an error, reminding the user to add content.",
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
        with <strong>jQuery</strong> and <strong>Flexbox</strong> while adhering
        to given design specifications. I focused on creating semantic,
        accessible HTML/CSS layouts and used jQuery to manipulate the DOM, bind
        event handlers, and implement AJAX for real-time updates.
      </p>
    </div>
  );
};
