/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import DownloadButton from "../../components/downloadButton/DownloadButton.jsx";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
import LinkedIn from "../.././assets/images/icons/linkedin.png";
import Github from "../.././assets/images/icons/github.png";
import ButtonA from "../.././assets/images/buttons/a-button.png";
import styles from "./Contact.module.scss";

const Contact = (props) => {
  const { t } = useTranslation();

  Contact.propTypes = {
    handleDownload: PropTypes.func.isRequired,
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    handleHover: PropTypes.func.isRequired,
  };

  useEffect(() => {
    props.setSelectedOption(1);
    props.setOption(1);
  }, []);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className={styles.sectionContact}>
      <div className={styles.infoContainer}>
        <div className={styles.contactContainer}>
          <h1>{t("contact.title")}</h1>
          <div className={styles.textContainer}>
            <button
              className={
                props.selectedOption === 1 || props.option === 1
                  ? styles.option
                  : styles.hidden
              }
              onClick={() =>
                handleRedirect(
                  "https://www.linkedin.com/in/franco-c%C3%A1ceres-2731a0273/"
                )
              }
              onMouseEnter={() => props.handleHover("1")}
            >
              <img className={styles.iconImage} src={LinkedIn} alt="linkedin" />
              LINKEDIN
              <img className={styles.AButton} src={ButtonA} alt="a-button" />
            </button>
            <button
              className={
                props.selectedOption === 2 || props.option === 2
                  ? styles.option
                  : styles.hidden
              }
              onClick={() =>
                handleRedirect("https://github.com/FrancoCaceres1")
              }
              onMouseEnter={() => props.handleHover("2")}
            >
              <img className={styles.iconImage} src={Github} alt="github" />
              GITHUB
              <img className={styles.AButton} src={ButtonA} alt="a-button" />
            </button>
            <DownloadButton
              handleDownload={props.handleDownload}
              handleHover={props.handleHover}
              option={props.option}
              selectedOption={props.selectedOption}
            />
          </div>
        </div>
        <ScrollButtons />
      </div>
    </section>
  );
};

export default Contact;
