/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { imgLoader } from "../../imagesLoader/imgLoader.js";
import styles from "./DownloadButton.module.scss";

const DownloadButton = (props) => {
  const location = useLocation();
  const { t } = useTranslation();
  const { imageUrls } = imgLoader();
  const isAbout = location.pathname === "/about";
  const isSkills = location.pathname === "/skills";

  DownloadButton.propTypes = {
    handleDownload: PropTypes.func.isRequired,
    handleHover: PropTypes.func,
    option: PropTypes.number,
    selectedOption: PropTypes.number,
  };

  return (
    <div className={styles.downloadContainer}>
      {isAbout || isSkills ? (
        <button className={styles.downloadCV} onClick={props.handleDownload}>
          <img
            className={styles.downloadImage}
            src={imageUrls[3]}
            alt="download"
          />
          {t("download.title")}
          <img className={styles.AButton} src={imageUrls[1]} alt="a-button" />
        </button>
      ) : (
        <button
          className={
            props.selectedOption === 3 || props.option === 3
              ? styles.downloadCV
              : styles.hidden
          }
          onClick={props.handleDownload}
          onMouseEnter={() => props.handleHover("3")}
        >
          <img
            className={styles.downloadImage}
            src={imageUrls[3]}
            alt="download"
          />
          {t("download.title")}
          <img className={styles.AButton} src={imageUrls[1]} alt="a-button" />
        </button>
      )}
    </div>
  );
};

export default DownloadButton;
