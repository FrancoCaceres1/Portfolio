import { useState, useEffect } from "react";
import PixelArt1 from "../.././assets/images/character-1.png";
import PixelArt2 from "../.././assets/images/character-run-1.png";
import PixelArt3 from "../.././assets/images/character-run-2.png";
import Grass1 from "../.././assets/images/grass-1.png";
import Arrow from "../.././assets/images/arrow.png";
import Start from "../.././assets/images/start.png";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  const images = [PixelArt1, PixelArt2, PixelArt1, PixelArt3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startImageClass, setStartImageClass] = useState(styles.startImg);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartImageClass((prevClass) =>
        prevClass === styles.startImg ? styles.startImgShadow : styles.startImg
      );
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.sectionLanding}>
      <div className={styles.contentLandingContainer}>
        <h1 className={styles.titleLanding}>
          WELCOME<span className={styles.subtitleLanding}>Franco&apos;s portfolio</span>
        </h1>
        <div className={styles.startImgContainer}>
          <button className={styles.startButton}>
            <img className={startImageClass} src={Start} />
          </button>
          <h2 className={styles.pressStart}>press start</h2>
        </div>
        <div className={styles.pixelCharacterContainer}>
          <div className={styles.onGrass}>
            <img
              className={styles.pixelartImg}
              src={images[currentIndex]}
              alt={`Character ${currentIndex + 1}`}
            />
            <img className={styles.pixelartImg} src={Arrow} />
          </div>
          <div className={styles.grassContainer}>
            <img className={styles.grassImg} src={Grass1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
