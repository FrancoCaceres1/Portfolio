/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import BackButtton from "../.././components/backButton/BackButton.jsx";
import DownRow from "../.././assets/images/down-row.png";
import UpRow from "../.././assets/images/up-row.png";
import styles from "./ScrollButtons.module.scss";

const ScrollButtons = (props) => {
  ScrollButtons.propTypes = {
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    showArrowDown: PropTypes.bool.isRequired,
    showArrowUp: PropTypes.bool.isRequired,
  };

  return (
    <div className={styles.scrollButtons}>
    <div className={styles.backButton}>
    <BackButtton/>
    </div>
    <div className={styles.scrollButtonsContainer}>
    {props.showArrowUp && (
      <button
        onMouseDown={() => props.handleScrollStart("up")}
        onMouseUp={props.handleScrollStop}
        onMouseLeave={props.handleScrollStop}
      >
        <img className={styles.arrow} src={UpRow} alt="up-row" />
      </button>
    )}
    <button
      onMouseDown={() => props.handleScrollStart("down")}
      onMouseUp={props.handleScrollStop}
      onMouseLeave={props.handleScrollStop}
    >
      <img
        className={
          !props.showArrowDown ? `${styles.arrowDown}` : `${styles.arrow}`
        }
        src={DownRow}
        alt="down-row"
      />
    </button>
    </div>
  </div>
  )
};

export default ScrollButtons;