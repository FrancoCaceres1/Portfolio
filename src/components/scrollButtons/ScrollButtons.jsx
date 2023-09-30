/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { imgLoader } from "../../imagesLoader/imgLoader.js";
import BackButtton from "../.././components/backButton/BackButton.jsx";
import styles from "./ScrollButtons.module.scss";

const ScrollButtons = (props) => {
  const location = useLocation();
  const { imageUrls } = imgLoader();
  const isAbout = location.pathname === "/about";
  const isSkills = location.pathname === "/skills";
  const isProject1 = location.pathname === "/project-1";
  const isProject2 = location.pathname === "/project-2";
  const isProject3 = location.pathname === "/project-3";
  const isProject4 = location.pathname === "/project-4";

  ScrollButtons.propTypes = {
    handleScrollStart: PropTypes.func,
    handleScrollStop: PropTypes.func,
    showArrowDown: PropTypes.bool,
    showArrowUp: PropTypes.bool,
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.scrollButtons}>
      <div className={styles.backButton}>
        <BackButtton />
      </div>
      {isAbout ||
      isSkills ||
      isProject1 ||
      isProject2 ||
      isProject3 ||
      isProject4 ? (
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
              <img className={styles.arrow} src={imageUrls[4]} alt="up-row" />
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
              src={imageUrls[5]}
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
