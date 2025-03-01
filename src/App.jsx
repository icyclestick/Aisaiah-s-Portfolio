import { LargeFooter } from "./components/LargeFooter";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import "./App.css";
import completeArch from "./assets/complete-arch-final.svg";
import shootingStar from "./assets/shooting-star.svg";
import loopingCircle from "./assets/looping-projects.svg";
import arrowDown from "./assets/arrow-down-projects.svg";
import halfCircleDiamond from "./assets/half-circle-diamond.svg";
import positiveDome from "./assets/half-arch-positive.svg";
import snakeIcon from "./assets/snake-negative.svg";
import extraSun from "./assets/extra-sun.svg";
import { Marquee } from "./components/Marquee";
import Projects from "./components/Projects";
import lightRay from "./assets/light-ray.svg";
import { CustomCursor } from "./components/CustomCursor";

function App() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <NavBar shootingStar={shootingStar} />
      <section className="homepage-hero">
        <img loading="eager" src={completeArch} alt="dome" className="complete-arch" />
        <div className="looping-projects">
          <a href="" className="link-block">
            <img
              src={loopingCircle}
              alt="projects"
              className="looping-circle"
            />
            <img src={arrowDown} alt="down" className="arrow-down" />
          </a>
        </div>
      </section>

      <Marquee
        halfCircleDiamond={halfCircleDiamond}
        positiveDome={positiveDome}
        snakeIcon={snakeIcon}
        shootingStar={shootingStar}
      />
      <Projects />

      <section className="extra-container-static w-container">
        <button onClick={scrollToTop} className="link-block-2 w-inline-block">
          CLICK ME!
          <img
            src={extraSun}
            loading="lazy"
            alt="extra-sun"
            className="extra-extra static"
          />
        </button>
      </section>

      <Footer lightRay={lightRay} />

      <LargeFooter positiveDome={positiveDome} />

      <CustomCursor />
    </>
  );
}

export default App;
