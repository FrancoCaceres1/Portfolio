/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ResizeButton from "../.././components/resizeButton/ResizeButton.jsx";
import RowButtons from "../rowButtons/RowButtons.jsx";
import CenterButtons from "../centerButtons/CenterButtons.jsx";
import CircleButtons from "../circleButtons/CircleButtons.jsx";
import styles from "./Gameboy.module.scss";

const Gameboy = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/home";
  const isContact = location.pathname === "/contact";
  const isSettings = location.pathname === "/settings";

  Gameboy.propTypes = {
    handleAnimation: PropTypes.func.isRequired,
    click: PropTypes.bool.isRequired,
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    handleDownload: PropTypes.func.isRequired,
    handleLanguageChange: PropTypes.func.isRequired,
    language: PropTypes.number.isRequired,
    selected: PropTypes.number.isRequired,
    handleSelect: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired,
    color: PropTypes.number.isRequired,
    handleColorChange: PropTypes.func.isRequired,
    setStart: PropTypes.func.isRequired,
  };

  const handleNavigation = (value) => {
    if (isHome || isContact || isSettings) {
      if (value === "up" && props.option > 1) {
        isSettings && props.setSelected(0);
        props.setOption(props.option - 1);
        props.setSelectedOption(props.selectedOption - 1);
      } else if (value === "down" && props.option < 4) {
        if (isSettings && props.option < 2) {
          props.setSelected(0);
          props.setOption(props.option + 1);
          props.setSelectedOption(props.selectedOption + 1);
        } else if (isContact && props.option < 3) {
          props.setOption(props.option + 1);
          props.setSelectedOption(props.selectedOption + 1);
        } else if (isHome) {
          props.setOption(props.option + 1);
          props.setSelectedOption(props.selectedOption + 1);
        }
      }
    }
  };

  const handleChangeOption = (value) => {
    if (isSettings && props.selected === 2) {
      value === "r" &&
        (props.color < 4) & props.handleColorChange(props.color + 1);
      value === "l" &&
        (props.color > 1) & props.handleColorChange(props.color - 1);
    } else {
      value === "r" &&
        (props.language === 1) & props.handleLanguageChange("es", 2);
      value === "l" &&
        (props.language === 2) & props.handleLanguageChange("en", 1);
    }
  };

  const handleRedirect = (url) => {
    if (isHome) {
      const navigationRoutes = {
        1: "/projects",
        2: "/about",
        3: "/contact",
        4: "/skills",
      };
      const route = navigationRoutes[props.option];
      if (route) {
        navigate(route);
      }
    }
    if (isContact) {
      window.open(url, "_blank");
    }
  };

  const handleClick = () => {
    props.handleAnimation(true);
    props.setStart(true);
    setTimeout(() => {
      navigate("/home");
    }, "1150");
  };

  const handleBack = () => {
    props.handleAnimation(false);
    window.history.back();
  };

  const handleSelect = () => {
    navigate("/home");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <section className={styles.sectionController}>
      <div className={styles.controllersContainer}>
        <ResizeButton />
        <div className={styles.controllers1}>
          <RowButtons
            handleChangeOption={handleChangeOption}
            handleNavigation={handleNavigation}
            selected={props.selected}
            handleScrollStart={props.handleScrollStart}
            handleScrollStop={props.handleScrollStop}
          />
        </div>
        <div className={styles.controllers2}>
          <CenterButtons
            handleSettings={handleSettings}
            handleSelect={handleSelect}
            handleClick={handleClick}
            color={props.color}
            click={props.click}
          />
        </div>
        <div className={styles.controllers3}>
          <CircleButtons
            handleBack={handleBack}
            handleRedirect={handleRedirect}
            setSelected={props.setSelected}
            selected={props.selected}
            option={props.option}
            handleDownload={props.handleDownload}
            selectedOption={props.selectedOption}
            handleSelect={props.handleSelect}
          />
        </div>
      </div>
    </section>
  );
};

export default Gameboy;
