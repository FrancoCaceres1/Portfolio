/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import DownloadButton from "../../components/downloadButton/DownloadButton.jsx";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
import LinkedIn from "../.././assets/images/linkedin.png";
import Github from "../.././assets/images/github.png";
import ButtonA from "../.././assets/images/a-button.png";
import styles from "./Contact.module.scss";

const Contact = (props) => {
  const pRef = useRef(null);

  Contact.propTypes = {
    setPRef: PropTypes.func.isRequired,
    handleDownload: PropTypes.func.isRequired,
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    showArrowDown: PropTypes.bool.isRequired,
    showArrowUp: PropTypes.bool.isRequired,
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
  };

  useEffect(() => {
    props.setPRef(pRef.current);
    props.setSelectedOption(1);
    props.setOption(1);
  }, []);

  const handleHover = (value) => {
    const optionMap = {
      1: 1,
      2: 2,
      3: 3,
    };

    if (optionMap[value]) {
      props.setSelectedOption(optionMap[value]);
      props.setOption(optionMap[value]);
    }
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className={styles.sectionContact}>
      <div className={styles.infoContainer}>
        <h1>CONTACT ME</h1>
        <div className={styles.textContainer} ref={pRef}>
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
            onMouseEnter={() => handleHover("1")}
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
            onClick={() => handleRedirect("https://github.com/FrancoCaceres1")}
            onMouseEnter={() => handleHover("2")}
          >
            <img className={styles.iconImage} src={Github} alt="github" />
            GITHUB
            <img className={styles.AButton} src={ButtonA} alt="a-button" />
          </button>
          <DownloadButton
            handleDownload={props.handleDownload}
            handleHover={handleHover}
            option={props.option}
            selectedOption={props.selectedOption}
          />
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

export default Contact;
