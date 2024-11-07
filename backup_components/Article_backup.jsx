import React from "react";
import "../styles/Article.css";

const Article = () => {
  return (
    <div className="Article">
      <img className="Article-image" src="images/headshot.jpg" />
      <div className="Article-body">
        <p className="Article-body-text">
          Hello, my name is <strong>Kyle Mcparland</strong> and I a full-stack
          web developer from Toronto, Ontario. Skills include: <u>React</u>,
          Javascript, Ruby + Rails, CSS & HTML. I graduated the Lighthouse Labs
          30-Week Web Development program in 2025. I have discovered a passion
          for programming and web development. I love data structures!
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <img className="Article-body-image" src="images/logotest2.png" />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Article;


// .Article {
//   /* FLEX BOX */
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   /* SIZE */
//   height: 600px;
//   width: 100%;

//   /* STYLE */
//   background-color: #6d3cdc;
//   color: black;
// }

// .Article-image {
//   margin-left: 15vw;
//   height: 349px;
//   /* border-radius: 100%; */
//   border-top-left-radius: 25px;
//   border-bottom-left-radius: 25px;
//   /* border: .6rem solid black; */
// }

// .Article-body {
//   background-color: white;

//   /* margin-left: 15vw;
//   margin-right: 15vw; */
//   /* background-color: pink; */
//   display: flex;
//   align-items: center;

//   /* height: fit-content; */
//   width: 600px;
//   min-width: 600px;
//   margin-right: 15vw;
//   /* margin-left: 1.5vw; */
//   /* border-radius: 15px; */
//   border-top-right-radius: 25px;
//   border-bottom-right-radius: 25px;
//   padding: 2em;

//   font-family: "Work Sans", sans-serif;
//   font-optical-sizing: auto;
//   font-style: normal;
//   font-weight: 400;
//   /* font-size: 1.8vw; */
//   font-size: 17px;
//   /* letter-spacing: -0.015em; */
//   line-height: 140%;
//   /* transform: scaleX(.9); */
// }

// .Article-body-image {
//   height: 80px;
//   float: right;
//   margin-right: 15px;
// }

// .Article-body-text {
//   /* margin: 0; */
// }
