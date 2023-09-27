/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import BackButtton from "../.././components/backButton/BackButton.jsx";
import DownRow from "../.././assets/images/buttons/down-row.png";
import UpRow from "../.././assets/images/buttons/up-row.png";
import styles from "./ScrollButtons.module.scss";

const ScrollButtons = (props) => {
  const location = useLocation();
  const isAbout = location.pathname === "/about";
  const isSkills = location.pathname === "/skills";

  ScrollButtons.propTypes = {
    handleScrollStart: PropTypes.func,
    handleScrollStop: PropTypes.func,
    showArrowDown: PropTypes.bool,
    showArrowUp: PropTypes.bool,
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.scrollButtons}>
      <div className={styles.backButton}>
        <BackButtton />
      </div>
      {isAbout || isSkills ? (
        <div className={styles.scrollButtonsContainer}>
          {props.showArrowUp && (
            <button
              onMouseDown={() => props.handleScrollStart("up")}
              onMouseUp={props.handleScrollStop}
              onMouseLeave={props.handleScrollStop}
              onTouchStart={() => props.handleScrollStart("up")}
              onTouchEnd={props.handleScrollStop}
              onTouchMove={props.handleScrollStop}
              onTouchCancel={props.handleScrollStop}
              onContextMenu={handleContextMenu}
            >
              <img className={styles.arrow} src={UpRow} alt="up-row" />
            </button>
          )}
          <button
            onMouseDown={() => props.handleScrollStart("down")}
            onMouseUp={props.handleScrollStop}
            onMouseLeave={props.handleScrollStop}
            onTouchStart={() => props.handleScrollStart("down")}
            onTouchEnd={props.handleScrollStop}
            onTouchMove={props.handleScrollStop}
            onTouchCancel={props.handleScrollStop}
            onContextMenu={handleContextMenu}
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
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default ScrollButtons;
