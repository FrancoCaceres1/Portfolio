/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Start from "../.././assets/images/buttons/start.png";
import ButtonA from "../.././assets/images/buttons/a-button.png";
import Config from "../.././assets/images/icons/config.png";
import ButtonB from "../.././assets/images/buttons/b-button.png";
import DownRow from "../.././assets/images/buttons/down-row.png";
import UpRow from "../.././assets/images/buttons/up-row.png";
import Download from "../.././assets/images/icons/download.png";
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
  };

  const preloadImages = (imageUrls) => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
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
    const imageUrls = [Config, ButtonA, ButtonB, Download, UpRow, DownRow];
    preloadImages(imageUrls);
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
              src={Start}
              alt="pixel-play-button"
            />
          </button>
          <h2 className={styles.pressStart}>{t("landing.button")}</h2>
        </div>
        <PixelCharacter click={props.click} />
      </div>
    </section>
  );
};

export default LandingPage;
