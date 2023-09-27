/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PixelArt1 from "../../assets/images/character/character-1.png";
import PixelArt2 from "../../assets/images/character/character-run-1.png";
import PixelArt3 from "../../assets/images/character/character-run-2.png";
import PixelArt4 from "../../assets/images/character/character-run-side.png";
import PixelArt5 from "../../assets/images/character/character-side.png";
import Grass from "../../assets/images/stage/grass-2.png";
import Arrow from "../../assets/images/stage/arrow.png";
import Start from "../../assets/images/buttons/start.png";
import styles from "./Loading.module.scss";

const Loading = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const preloadImages = (imageUrls) => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  };

  useEffect(() => {
    const imageUrls = [
      PixelArt1,
      PixelArt2,
      PixelArt3,
      PixelArt4,
      PixelArt5,
      Grass,
      Arrow,
      Start,
    ];
    preloadImages(imageUrls);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.sectionLoading}>
      <div className={styles.loadingContainer}>
        <h1>
          {currentIndex === 1
            ? "loading..."
            : currentIndex === 2
            ? "loading."
            : currentIndex === 3
            ? "loading.."
            : "loading.."}
        </h1>
        <span></span>
      </div>
    </section>
  );
};

export default Loading;
