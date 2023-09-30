/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { imgLoader } from "../../imagesLoader/imgLoader.js";
import styles from "./DownloadButton.module.scss";

const DownloadButton = (props) => {
  const location = useLocation();
  const { t } = useTranslation();
  const { imageUrls } = imgLoader();
  const isContact = location.pathname === "/contact";

  DownloadButton.propTypes = {
    handleDownload: PropTypes.func.isRequired,
    handleHover: PropTypes.func,
    option: PropTypes.number,
    selectedOption: PropTypes.number,
  };

  return (
    <div className={styles.downloadContainer}>
      <button
        className={
          (isContact && props.selectedOption != 3) ||
          (isContact && props.option != 3)
            ? styles.hidden
            : styles.downloadCV
        }
        onClick={props.handleDownload}
        onMouseEnter={isContact ? () => props.handleHover("3") : null}
      >
        <img
          className={styles.downloadImage}
          src={imageUrls[3]}
          alt="download"
        />
        {t("download.title")}
        <img className={styles.AButton} src={imageUrls[1]} alt="a-button" />
      </button>
    </div>
  );
};

export default DownloadButton;
