import { useState, useEffect } from "react";
import PixelArt1 from "../.././assets/images/character-1.png";
import PixelArt2 from "../.././assets/images/character-run-1.png";
import PixelArt3 from "../.././assets/images/character-run-2.png";
import Grass1 from "../.././assets/images/grass-1.png";
import Arrow from "../.././assets/images/arrow.png";
import Start from "../.././assets/images/start.png";
import "./_LandingPage.module.scss";

const LandingPage = () => {
  const images = [PixelArt1, PixelArt2, PixelArt1, PixelArt3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startImageClass, setStartImageClass] = useState("start-img");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartImageClass((prevClass) =>
        prevClass === "start-img" ? "start-img-shadow" : "start-img"
      );
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-landing">
      <div className="content-landing-container">
        <h1 className="title-landing">
          WELCOME<span className="subtitle-landing">Franco&apos;s portfolio</span>
        </h1>
        <div className="start-img-container">
          <button className="start-button">
            <img className={startImageClass} src={Start} />
          </button>
          <h2 className="press-start">press start</h2>
        </div>
        <div className="pixel-character-container">
          <div className="on-grass">
            <img
              className="pixelart-img"
              src={images[currentIndex]}
              alt={`Character ${currentIndex + 1}`}
            />
            <img className="pixelart-img" src={Arrow} />
          </div>
          <div className="grass-container">
            <img className="grass-img" src={Grass1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
