/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import styles from "./CircleButtons.module.scss";

const CircleButtons = (props) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";
  const isSettings = location.pathname === "/settings";
  const isSkills = location.pathname === "/skills";
  const isHome = location.pathname === "/home";
  const isProjects = location.pathname === "/projects";
  const isProject1 = location.pathname === "/project-1";
  const isProject2 = location.pathname === "/project-2";
  const isProject3 = location.pathname === "/project-3";
  const isProject4 = location.pathname === "/project-4";

  CircleButtons.propTypes = {
    handleBack: PropTypes.func.isRequired,
    handleRedirect: PropTypes.func.isRequired,
    option: PropTypes.number.isRequired,
    selectedOption: PropTypes.number.isRequired,
    handleDownload: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
    handleSelect: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired,
    setHidden: PropTypes.func.isRequired,
    hidden: PropTypes.bool.isRequired,
    setProjectOptions: PropTypes.func.isRequired,
    projectOptions: PropTypes.number.isRequired,
    handleNavigate: PropTypes.func.isRequired,
  };

  const handleShow = () => {
    props.setHidden(false);
    props.setSelected(0);
    props.setProjectOptions(5);
  };

  const handleHidding = () => {
    props.handleSelect(4);
    props.setHidden(true);
  };

  return (
    <div className={styles.circleButtonContainer}>
      <div className={styles.circleButtonContainer1}>
        <button
          className={styles.circleButton1}
          onClick={
            isLandingPage
              ? null
              : (isSettings && props.selected > 0) ||
                (isProjects && props.selected > 0 && props.selected != 4)
              ? () => {
                  props.setSelected(0);
                  props.setProjectOptions(5);
                }
              : isProjects && props.selected === 4
              ? handleShow
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
              : isProject1
              ? () =>
                  props.handleRedirect("https://soy-puebla-deploy.vercel.app/")
              : isProject2
              ? () =>
                  props.handleRedirect(
                    "https://pi-countries-api-flax.vercel.app/"
                  )
              : isProject3
              ? () =>
                  props.handleRedirect("https://proyecto-final-utn.vercel.app/")
              : isProject4
              ? () =>
                  props.handleRedirect(
                    "https://bright-kangaroo-442885.netlify.app/"
                  )
              : isContact && props.option === 3
              ? props.handleDownload
              : isContact && props.option === 2
              ? () => props.handleRedirect("https://github.com/FrancoCaceres1")
              : isContact && props.option === 1
              ? () =>
                  props.handleRedirect(
                    "https://www.linkedin.com/in/franco-c%C3%A1ceres-2731a0273/"
                  )
              : isProjects && props.selected === 1 && props.projectOptions === 5
              ? () =>
                  props.handleRedirect("https://soy-puebla-deploy.vercel.app/")
              : isProjects && props.selected === 2 && props.projectOptions === 5
              ? () =>
                  props.handleRedirect(
                    "https://pi-countries-api-flax.vercel.app/"
                  )
              : isProjects && props.selected === 3 && props.projectOptions === 5
              ? () =>
                  props.handleRedirect("https://proyecto-final-utn.vercel.app/")
              : isProjects && props.selected === 4 && props.projectOptions === 5
              ? () =>
                  props.handleRedirect(
                    "https://bright-kangaroo-442885.netlify.app/"
                  )
              : isProjects && props.selected === 1 && props.projectOptions === 6
              ? () =>
                  props.handleRedirect(
                    "https://github.com/PuebladelMar/SoyPuebla"
                  )
              : isProjects && props.selected === 2 && props.projectOptions === 6
              ? () =>
                  props.handleRedirect(
                    "https://github.com/FrancoCaceres1/proyecto_final-Henry"
                  )
              : isProjects && props.selected === 3 && props.projectOptions === 6
              ? () =>
                  props.handleRedirect(
                    "https://github.com/FrancoCaceres1/proyecto-final-UTN"
                  )
              : isProjects && props.selected === 1 && props.projectOptions === 7
              ? () => props.handleNavigate("/project-1")
              : isProjects && props.selected === 2 && props.projectOptions === 7
              ? () => props.handleNavigate("/project-2")
              : isProjects && props.selected === 3 && props.projectOptions === 7
              ? () => props.handleNavigate("/project-3")
              : isProjects && props.selected === 4 && props.projectOptions === 7
              ? () => props.handleNavigate("/project-4")
              : (isSettings && props.selected === 0) ||
                (isProjects && props.selected === 0 && props.option != 4)
              ? () => props.handleSelect(props.selectedOption)
              : isProjects && props.selected === 0 && props.option === 4
              ? handleHidding
              : isHome
              ? props.handleRedirect
              : null
          }
        >
          A
        </button>
      </div>
    </div>
  );
};

export default CircleButtons;
