import React from "react";
import "../styles/Article.css";

const Article = () => {
  return (
    <div className="Article">
      <img className="Article-image" src="images/headshot.jpg" />
      <div className="Article-body">
        <p>
          <i>Hello!</i> My name is <strong>Kyle McParland</strong> & I am a
          full-stack developer from Toronto, Ontario. As a recent graduate of
          the{" "}
          <a
            href="https://www.lighthouselabs.ca/en/web-development"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lighthouse Labs
          </a>{" "}
          30-Week Web Development Program, I specialize in building both the
          front-end and back-end of applications, using{" "}
          <strong>JavaScript</strong> technologies like <strong>Node.js</strong>
          , <strong>Express</strong>, and <strong>React</strong> - alongside
          relational databases such as <strong>PostgreSQL</strong>.
          <br />
          <br />I find immense joy in creating clean, snappy, and dynamic web
          designs, while maintaining modular, DRY, and scalable code
          behind-the-scenes.
          <br />
          <a
            href="https://www.linkedin.com/in/kyle-mcparland-9aa877103"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            I am actively seeking a position
          </a>{" "}
          where I can grow{" "}
          <img className="Article-body-image" src="images/logotest2.png" />
          alongside talented professionals, collaborate on meaningful solutions,
          and continue to challenge myself and expand my abilities as a
          developer. - <b>Please check out some of my work below!</b>
        </p>
      </div>
    </div>
  );
};

export default Article;
