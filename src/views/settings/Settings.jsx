/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../.././language/LanguageContext.jsx";
import { useTranslation } from "react-i18next";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
import styles from "./Settings.module.scss";

const Settings = (props) => {
  const pRef = useRef(null);
  const { changeLanguage } = useLanguage();
  const { t } = useTranslation();

  Settings.propTypes = {
    setPRef: PropTypes.func.isRequired,
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    showArrowDown: PropTypes.bool.isRequired,
    showArrowUp: PropTypes.bool.isRequired,
  };

  useEffect(() => {
    props.setPRef(pRef.current);
  }, []);

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <section className={styles.sectionSkills}>
      <div className={styles.infoContainer}>
        <div className={styles.skillsContainer}>
          <h1>{t("settings.title")}</h1>
          <div className={styles.textContainer} ref={pRef}>
            <button onClick={() => handleLanguageChange("en")}>{t("settings.english")}</button>
            <button onClick={() => handleLanguageChange("es")}>{t("settings.spanish")}</button>
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

export default Settings;
