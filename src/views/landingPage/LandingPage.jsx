/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import PixelCharacter from "../.././components/pixelCharacter/PixelCharacter.jsx";
import styles from "./LandingPage.module.scss";

const LandingPage = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  LandingPage.propTypes = {
    handleAnimation: PropTypes.func.isRequired,
    click: PropTypes.bool.isRequired,
    setStart: PropTypes.func.isRequired,
    start: PropTypes.bool.isRequired,
    imageUrls: PropTypes.array.isRequired,
  };

  const handleClick = () => {
    props.handleAnimation(true);
    props.setStart(true);
    setTimeout(() => {
      navigate("/home");
    }, "1150");
  };

  useEffect(() => {
    props.setStart(false);
  }, []);

  return (
    <section className={styles.sectionLanding}>
      <div className={styles.contentLandingContainer}>
        <h1 className={styles.titleLanding}>
          {t("landing.title")}
          <span className={styles.subtitleLanding}>{t("landing.text")}</span>
        </h1>
        <div className={styles.startImgContainer}>
          <button
            className={styles.startButton}
            onClick={!props.click ? handleClick : null}
          >
            <img
              className={!props.start ? styles.startImg : styles.startImgShadow}
              src={props.imageUrls[6]}
              alt="pixel-play-button"
            />
          </button>
          <h2 className={styles.pressStart}>{t("landing.button")}</h2>
        </div>
        <PixelCharacter click={props.click} imageUrls={props.imageUrls}/>
      </div>
    </section>
  );
};

export default LandingPage;
