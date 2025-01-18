import React, { useRef } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import MobileHeader from "./components/MobileHeader";
// import Marquee from "./components/Marquee";
import Article from "./components/Article";
import Project from "./components/Project";
import ParallaxText from "./components/ParallaxText";
import ScrollDown from "./components/ScrollDown";
import Footer from "./components/Footer";

// PHOTOLABS:
import {
  PhotoLabs,
  photoLabsLink,
  photoLabsPhotos,
} from "./projects/PhotoLabs";

// TWEETER:
import { Tweeter, tweeterLink, tweeterPhotos } from "./projects/Tweeter";

// VHS DREAMS:
import { VHSDreams, vhsLink, vhsPhotos } from "./projects/VHSDreams";

// EVERSTRIDE:
import {
  Everstride,
  everstrideLink,
  everstridePhotos,
} from "./projects/Everstride";

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

      {/* <div className="Mobile-header">
        <MobileHeader />
      </div> */}

      <div className="Article-ref" ref={articleRef}>
        <Article />
      </div>

      {/* EVERSTRIDE */}
      <br className="break" />
      <ParallaxText text="EVERSTRIDE" backwards={false} speed={3} />
      <ParallaxText text="EVERSTRIDE" backwards={true} speed={3} />
      <br className="break" />
      <Project
        description={<Everstride />}
        link={everstrideLink}
        photos={everstridePhotos}
        title="Everstride"
      />

      {/* VHS DREAMS */}
      <br className="break" />
      <ParallaxText text="VHS DREAMS" backwards={false} speed={3} />
      <ParallaxText text="VHS DREAMS" backwards={true} speed={3} />
      <br className="break" />
      <Project
        description={<VHSDreams />}
        link={vhsLink}
        photos={vhsPhotos}
        title="VHS Dreams"
      />

      {/* PHOTOLABS */}
      <br className="break" />
      <ParallaxText text="PHOTOLABS" backwards={false} speed={3} />
      <ParallaxText text="PHOTOLABS" backwards={true} speed={3} />
      <br className="break" />
      <Project
        description={<PhotoLabs />}
        link={photoLabsLink}
        photos={photoLabsPhotos}
        title="PhotoLabs"
      />

      {/* TWEETER */}
      <br className="break" />
      <ParallaxText text="TWEETER" backwards={false} speed={3} />
      <ParallaxText text="TWEETER" backwards={true} speed={3} />
      <br className="break" />
      <Project
        description={<Tweeter />}
        link={tweeterLink}
        photos={tweeterPhotos}
        title="Tweeter"
      />

      <Footer />
    </div>
  );
}

export default App;
