/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CircleButtons.module.scss";

const CircleButtons = (props) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";
  const isSettings = location.pathname === "/settings";
  const isSkills = location.pathname === "/skills";
  const isProjects = location.pathname === "/projects";

  CircleButtons.propTypes = {
    handleBack: PropTypes.func.isRequired,
    handleRedirect: PropTypes.func.isRequired,
    option: PropTypes.number.isRequired,
    selectedOption: PropTypes.number.isRequired,
    handleDownload: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
    handleSelect: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired,
  };

  return (
    <div className={styles.circleButtonContainer}>
      <div className={styles.circleButtonContainer1}>
        <button
          className={styles.circleButton1}
          onClick={
            isLandingPage
              ? null
              : isSettings || isProjects && props.selected > 0
              ? () => props.setSelected(0)
              : props.handleBack
          }
        >
          B
        </button>
      </div>
      <div className={styles.circleButtonContainer2}>
        <button
          className={styles.circleButton2}
          onClick={
            isAbout || isSkills
              ? props.handleDownload
              : isContact && props.option === 3
              ? props.handleDownload
              : isContact && props.option === 2
              ? () => props.handleRedirect("https://github.com/FrancoCaceres1")
              : isContact && props.option === 1
              ? () =>
                  props.handleRedirect(
                    "https://www.linkedin.com/in/franco-c%C3%A1ceres-2731a0273/"
                  )
              : isSettings || isProjects
              ? () => props.handleSelect(props.selectedOption)
              : props.handleRedirect
          }
        >
          A
        </button>
      </div>
    </div>
  );
};

export default CircleButtons;
