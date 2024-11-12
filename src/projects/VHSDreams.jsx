import React from "react";

export const vhsLink = "https://www.github.com/kylemcparland/midterm";

export const vhsPhotos = [
  {
    url: "images/VHSDreams/1.gif",
    caption: "",
  },
  {
    url: "images/VHSDreams/2.png",
    caption: "",
  },
  {
    url: "images/VHSDreams/3.gif",
    caption: "",
  },
  {
    url: "images/VHSDreams/4.gif",
    caption: "",
  },
  {
    url: "images/VHSDreams/5.png",
    caption: "",
  },
];

export const VHSDreams = () => {
  return (
    <div>
      <span>
        Node.js &#x2022; Express &#x2022; jQuery &#x2022; Socket.io &#x2022;
        OMDB API &#x2022; PostgreSQL
      </span>
      <p>
        <i>VHS Dreams</i> is a multi-page application where users can browse and
        purchase movies from an online storefront. The app dynamically pulls
        movie data, including <strong>posters</strong> and current{" "}
        <strong>Rotten Tomatoes</strong> scores from the{" "}
        <a
          href="https://www.omdbapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OMDb API
        </a>
        . All other data is stored locally in a PostgreSQL database. Users can
        filter listings, favourite movies, and contact the admin directly via a
        real-time chat powered by{" "}
        <a href="https://socket.io/" target="_blank" rel="noopener noreferrer">
          Socket.io
        </a>
        .
        <br />
        <br />
        My key takeaway from this project was gaining proficiency with{" "}
        <strong>jQuery</strong> for dynamic front-end interactions and
        implementing multi-page, user-specific routing with{" "}
        <strong>Express</strong>. This experience improved my ability to build
        responsive, user-centric applications and handle efficient client-server
        routing.
      </p>
    </div>
  );
};
