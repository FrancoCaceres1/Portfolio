import { useState, useEffect } from "react";
import Start from "../.././assets/images/start.png";
import PixelCharacter from "../.././components/pixelCharacter/PixelCharacter.jsx";
import styles from "./LandingPage.module.scss";

const LandingPage = (handleClick) => {
  const [startImageClass, setStartImageClass] = useState(styles.startImg);

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
          WELCOME
          <span className={styles.subtitleLanding}>
            Franco&apos;s portfolio
          </span>
        </h1>
        <div className={styles.startImgContainer}>
          <button
            className={styles.startButton}
            onClick={handleClick.handleClick}
          >
            <img
              className={startImageClass}
              src={Start}
              alt="pixel-play-button"
            />
          </button>
          <h2 className={styles.pressStart}>press start</h2>
        </div>
        <PixelCharacter click={handleClick.click} />
      </div>
    </section>
  );
};

export default LandingPage;
