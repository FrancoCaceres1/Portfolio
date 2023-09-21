/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Download from "../.././assets/images/download.png";
import ButtonA from "../.././assets/images/a-button.png";
import styles from "./DownloadButton.module.scss";

const DownloadButton = (props) => {
  const location = useLocation();
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
          <img className={styles.downloadImage} src={Download} alt="download" />
          DOWNLOAD CV
          <img className={styles.AButton} src={ButtonA} alt="a-button" />
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
          <img className={styles.downloadImage} src={Download} alt="download" />
          DOWNLOAD CV
          <img className={styles.AButton} src={ButtonA} alt="a-button" />
        </button>
      )}
    </div>
  );
};

export default DownloadButton;
