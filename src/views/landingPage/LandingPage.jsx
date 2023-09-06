/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Start from "../.././assets/images/start.png";
import PixelCharacter from "../.././components/pixelCharacter/PixelCharacter.jsx";
import styles from "./LandingPage.module.scss";

const LandingPage = (props) => {
  const navigate = useNavigate();
  const [startImageClass, setStartImageClass] = useState(styles.startImg);

  LandingPage.propTypes = {
    handleAnimation: PropTypes.func.isRequired,
    click: PropTypes.bool.isRequired,
  };

  const handleClick = () => {
    props.handleAnimation(true);
    setTimeout(() => {
      navigate("/home");
    }, "1150");
  };

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
          {props.click ? (
            <button className={styles.startButton}>
              <img
                className={startImageClass}
                src={Start}
                alt="pixel-play-button"
              />
            </button>
          ) : (
            <button className={styles.startButton} onClick={handleClick}>
              <img
                className={startImageClass}
                src={Start}
                alt="pixel-play-button"
              />
            </button>
          )}
          <h2 className={styles.pressStart}>press start</h2>
        </div>
        <PixelCharacter click={props.click} />
      </div>
    </section>
  );
};

export default LandingPage;
