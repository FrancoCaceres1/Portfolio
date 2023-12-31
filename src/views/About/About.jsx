/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import DownloadButton from "../../components/downloadButton/DownloadButton.jsx";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
import styles from "./About.module.scss";

const About = (props) => {
  const pRef = useRef(null);
  const { t } = useTranslation();

  About.propTypes = {
    setPRef: PropTypes.func.isRequired,
    handleDownload: PropTypes.func.isRequired,
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    showArrowDown: PropTypes.bool.isRequired,
    showArrowUp: PropTypes.bool.isRequired,
  };

  useEffect(() => {
    props.setPRef(pRef.current);
  }, [props]);

  return (
    <section className={styles.sectionAbout}>
      <div className={styles.infoContainer}>
        <div className={styles.aboutContainer}>
          <h1>{t("about.title")}</h1>
          <div className={styles.textContainer} ref={pRef}>
            <p>
            {t("about.text")}
            </p>
            <DownloadButton handleDownload={props.handleDownload} />
          </div>
        </div>
        <ScrollButtons
          handleScrollStart={props.handleScrollStart}
          handleScrollStop={props.handleScrollStop}
          showArrowDown={props.showArrowDown}
          showArrowUp={props.showArrowUp}
        />
      </div>
    </section>
  );
};

export default About;
