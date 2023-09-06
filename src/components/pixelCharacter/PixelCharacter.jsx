/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import PixelArt1 from "../.././assets/images/character-1.png";
import PixelArt2 from "../.././assets/images/character-run-1.png";
import PixelArt3 from "../.././assets/images/character-run-2.png";
import PixelArt4 from "../.././assets/images/character-run-side.png";
import PixelArt5 from "../.././assets/images/character-side.png";
import Grass1 from "../.././assets/images/grass-1.png";
import Arrow from "../.././assets/images/arrow.png";
import styles from "./PixelCharacter.module.scss";

const PixelCharacter = (click) => {
  const images = [PixelArt1, PixelArt2, PixelArt1, PixelArt3];
  const sideImages = [PixelArt5, PixelArt4, PixelArt5, PixelArt4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.pixelCharacterContainer}>
      <div className={styles.onGrass}>
        {click.click ? (
          <Fragment>
            <img
              className={styles.pixelArtImgSide}
              src={sideImages[currentIndex]}
              alt={`pixel-side-character ${currentIndex + 1}`}
            />
            <img
              className={styles.pixelArtImgHidden}
              src={sideImages[currentIndex]}
              alt={`pixel-side-character ${currentIndex + 1}`}
            />
          </Fragment>
        ) : (
          <img
            className={styles.pixelArtImg}
            src={images[currentIndex]}
            alt={`pixel-character ${currentIndex + 1}`}
          />
        )}
        <img className={styles.pixelArtImg} src={Arrow} alt="pixel-arrow" />
      </div>
      <div className={styles.grassContainer}>
        <img className={styles.grassImg} src={Grass1} alt="pixel-grass" />
      </div>
    </section>
  );
};

export default PixelCharacter;
