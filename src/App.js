import React, { useRef } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Article from "./components/Article";
import Project from "./components/Project";
import ParallaxText from "./components/ParallaxText";
import ScrollDown from "./components/ScrollDown";

// PHOTOLABS:
import {
  PhotoLabs,
  photoLabsLink,
  photoLabsPhotos,
} from "./projects/PhotoLabs";

// TWEETER:
import { Tweeter, tweeterLink, tweeterPhotos } from "./projects/Tweeter";
import { VHSDreams, vhsLink, vhsPhotos } from "./projects/VHSDreams";

function App() {
  // Function to scroll to <Article> FROM <Navbar>
  const articleRef = useRef(null);
  const scrollToArticle = () => {
    if (articleRef.current) {
      articleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToArticle={scrollToArticle} />
      <ScrollDown />
      <Header />
      <div className="Article-ref" ref={articleRef}>
        <Article />
      </div>
      <br />
      <br />
      <ParallaxText text="VHS DREAMS" backwards={false} speed={3} />
      <ParallaxText text="VHS DREAMS" backwards={true} speed={3} />
      <br />
      <br />
      <Project
        description={<VHSDreams />}
        link={vhsLink}
        photos={vhsPhotos}
        title="VHS Dreams"
      />
      <br />
      <br />
      <ParallaxText text="PHOTOLABS" backwards={false} speed={3} />
      <ParallaxText text="PHOTOLABS" backwards={true} speed={3} />
      <br />
      <br />
      <Project
        description={<PhotoLabs />}
        link={photoLabsLink}
        photos={photoLabsPhotos}
        title="PhotoLabs"
      />
      <br />
      <br />
      <ParallaxText text="TWEETER" backwards={false} speed={3} />
      <ParallaxText text="TWEETER" backwards={true} speed={3} />
      <br />
      <br />
      <Project
        description={<Tweeter />}
        link={tweeterLink}
        photos={tweeterPhotos}
        title="Tweeter"
      />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      far below <br />
    </div>
  );
}

export default App;
