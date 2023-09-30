/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./PixelCharacter.module.scss";

const PixelCharacter = (props) => {
  const images = [
    props.imageUrls[34],
    props.imageUrls[35],
    props.imageUrls[34],
    props.imageUrls[36],
  ];
  const sideImages = [
    props.imageUrls[38],
    props.imageUrls[37],
    props.imageUrls[38],
    props.imageUrls[37],
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  PixelCharacter.propTypes = {
    click: PropTypes.bool.isRequired,
    imageUrls: PropTypes.array.isRequired,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.pixelCharacterContainer}>
      <div className={styles.onGrass}>
        {props.click ? (
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
        <img
          className={styles.pixelArtImg}
          src={props.imageUrls[40]}
          alt="pixel-arrow"
        />
      </div>
      <div className={styles.grassContainer}>
        <img
          className={styles.grassImg}
          src={props.imageUrls[39]}
          alt="pixel-grass"
        />
      </div>
    </section>
  );
};

export default PixelCharacter;
