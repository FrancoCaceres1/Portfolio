/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { imgLoader } from "../.././imagesLoader/imgLoader.js";
import styles from "./Warning.module.scss";

const Warning = (props) => {
  const { t } = useTranslation();
  const { imageUrls } = imgLoader();

  Warning.propTypes = {
    setShowWarning: PropTypes.func.isRequired,
    handleLanguageChange: PropTypes.func.isRequired,
    language: PropTypes.number.isRequired,
  };

  return (
    <section className={styles.sectionWarning}>
      <div className={styles.warningContainer}>
        <div className={styles.infoContainer}>
          <h1>{t("warning.title")}</h1>
          <p>{t("warning.text1")}</p>
          <p>{t("warning.text2")}</p>
          <br />
          <p>{t("warning.text3")}</p>
        </div>
        <div className={styles.optionContainer}>
          <section className={styles.languages}>
            <button className={props.language === 1 ? styles.selected : styles.noSelected} onClick={() => props.handleLanguageChange("en", 1)}>
              {t("warning.button2")}
            </button>
            <button className={props.language === 2 ? styles.selected : styles.noSelected} onClick={() => props.handleLanguageChange("es", 2)}>
              ES
            </button>
          </section>
          <button className={styles.accept} onClick={() => props.setShowWarning(false)}>
            {t("warning.button1")}
          </button>
          <img src={imageUrls[43]} alt="warning" />
        </div>
      </div>
    </section>
  );
};

export default Warning;
