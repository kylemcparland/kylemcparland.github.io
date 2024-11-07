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

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollDown />
      <Header />
      <Article />
      <br />
      <br />
      {/* <Marquee /> */}
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
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
      below <br />
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
