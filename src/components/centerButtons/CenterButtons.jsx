/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CenterButtons.module.scss";

const CenterButtons = (props) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isHome = location.pathname === "/home";

  CenterButtons.propTypes = {
    handleSelect: PropTypes.func.isRequired,
    handleSettings: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    click: PropTypes.bool.isRequired,
    color: PropTypes.number.isRequired,
  };

  return (
    <div className={styles.centerButtons2}>
      <span className={styles.select}>
        <button
          className={`${styles.buttonsCenter} ${
            props.color === 1
              ? styles.blue
              : props.color === 2
              ? styles.red
              : props.color === 3
              ? styles.orange
              : props.color === 4
              ? styles.purple
              : styles.blue
          }`}
          onClick={
            !isHome && !isLandingPage
              ? props.handleSelect
              : isHome
              ? props.handleSettings
              : props.handleClick
          }
        ></button>
        <span
          className={
            props.color === 1
              ? styles.selectTextBlue
              : props.color === 2
              ? styles.selectTextRed
              : props.color === 3
              ? styles.selectTextOrange
              : props.color === 4
              ? styles.selectTextPurple
              : styles.selectTextBlue
          }
        >
          SELECT
        </span>
      </span>
      <span className={styles.start}>
        <button
          className={`${styles.buttonsCenter} ${
            props.color === 1
              ? styles.blue
              : props.color === 2
              ? styles.red
              : props.color === 3
              ? styles.orange
              : props.color === 4
              ? styles.purple
              : styles.blue
          }`}
          onClick={isLandingPage ? props.handleClick : null}
        ></button>
        <span
          className={
            props.color === 1
              ? styles.selectTextBlue
              : props.color === 2
              ? styles.selectTextRed
              : props.color === 3
              ? styles.selectTextOrange
              : props.color === 4
              ? styles.selectTextPurple
              : styles.selectTextBlue
          }
        >
          START
        </span>
      </span>
    </div>
  );
};

export default CenterButtons;
