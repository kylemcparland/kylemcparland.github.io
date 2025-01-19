import React from "react";

export const everstrideLink = "https://github.com/kylemcparland/everstride";
export const everstrideWebsite = "https://everstride.vercel.app/";

export const everstridePhotos = [
  {
    url: "images/Everstride/1E-add-progress.gif",
    caption:
      "No Strava app? No problem! Manually add your steps to progress on your quest!",
  },
  {
    url: "images/Everstride/8E-strava.png",
    caption:
      "With your Strava account connected, simply visit the page and see how far you've come!",
  },
  {
    url: "images/Everstride/2E-avatar.png",
    caption: "Customize your avatar to stand out from your friends!",
  },
  {
    url: "images/Everstride/3E-complete-quest.gif",
    caption:
      "Completing a quest leads to a choice - and the roll of a dice! Make your choice wisely!",
  },
  {
    url: "images/Everstride/4E-map.png",
    caption:
      "The world map tracks your overall progress! Your location is reflected in your backdrop!",
  },
  {
    url: "images/Everstride/5E-add-friend.gif",
    caption:
      "Get social: add friends! No scrolling required - the page will change dynamically!",
  },
  {
    url: "images/Everstride/6E-store.png",
    caption:
      "Purchase new equipment using your hard-earned gold gained from quests!",
  },
  {
    url: "images/Everstride/7E-stripe.png",
    caption:
      "Or make a secure payment with Stripe to earn gold the old fashioned way!",
  },
];

export const Everstride = () => {
  return (
    <div>
      <span>
        Next.js &#x2022; PostgreSQL &#x2022; Strava API &#x2022; Stripe API
      </span>
      <p>
        <i>Everstride</i> is a single-page application that gamifies the user's
        exercise data and translates it into a social,{" "}
        <strong>DnD-style adventure</strong>. Utilizing the{" "}
        <a
          href="https://developers.strava.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Strava API
        </a>
        , the user's <strong>daily step goals</strong> become dynamic quests
        that can earn them gold to buy equipment to customize their in-game{" "}
        <strong>Avatar</strong>. Additionally, the{" "}
        <a
          href="https://docs.stripe.com/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe API
        </a>{" "}
        allows users to skip the run and earn their gold through secure
        payments.
        <br />
        <br />
        This project was a culmination of everything I've come to know and love
        about web development. I dove head-first into an exciting new framework
        with <strong>Next.js</strong> and explored powerful APIs like{" "}
        <strong>Strava</strong> & <strong>Stripe</strong>. I utilized both
        client-side and server-side functionality to create an engaging
        front-end that responds dynamically to the user. I crafted a robust
        back-end that handled data efficiently while maintaining a DRY and
        modular design for scalability. Finally, I built it all on top of a
        normalized database that made the most out of my <strong>SQL</strong> &{" "}
        <strong>ERD</strong> abilities.
      </p>
    </div>
  );
};
