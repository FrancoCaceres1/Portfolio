/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { CgZeit } from "react-icons/cg";
import styles from "./RowButtons.module.scss";

const RowButtons = (props) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isHome = location.pathname === "/home";
  const isContact = location.pathname === "/contact";
  const isSettings = location.pathname === "/settings";

  RowButtons.propTypes = {
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    handleChangeOption: PropTypes.func.isRequired,
    handleNavigation: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
  };

  return (
    <div className={styles.rowButtons}>
      <div className={styles.sideButtons}>
        <button
          className={styles.buttonLeft}
          onClick={
            (isSettings && props.selected === 1) || props.selected === 2
              ? () => props.handleChangeOption("l")
              : null
          }
        >
          <CgZeit className={`${styles.buttonImg} ${styles.left}`} />
        </button>
      </div>
      <div className={styles.centerButtons}>
        <button
          className={styles.buttonUp}
          onClick={() => props.handleNavigation("up")}
          onMouseDown={() =>
            !isHome &&
            !isContact &&
            !isLandingPage &&
            !isSettings &&
            props.handleScrollStart("up")
          }
          onMouseUp={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
          onMouseLeave={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
          onTouchStart={() =>
            !isHome &&
            !isContact &&
            !isLandingPage &&
            !isSettings &&
            props.handleScrollStart("up")
          }
          onTouchEnd={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
          onTouchMove={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
          onTouchCancel={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
        >
          <CgZeit className={`${styles.buttonImg} ${styles.up}`} />
        </button>
        <span className={styles.emptyCenter}>
          <div className={`${styles.innerSquare} ${styles.topLeft}`}></div>
          <div className={`${styles.innerSquare} ${styles.topRight}`}></div>
          <div className={`${styles.innerSquare} ${styles.bottomLeft}`}></div>
          <div className={`${styles.innerSquare} ${styles.bottomRight}`}></div>
        </span>
        <button
          className={styles.buttonDown}
          onClick={() => props.handleNavigation("down")}
          onMouseDown={() =>
            !isHome &&
            !isContact &&
            !isLandingPage &&
            !isSettings &&
            props.handleScrollStart("down")
          }
          onMouseUp={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
          onMouseLeave={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
          onTouchStart={() =>
            !isHome &&
            !isContact &&
            !isLandingPage &&
            !isSettings &&
            props.handleScrollStart("down")
          }
          onTouchEnd={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
          onTouchMove={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
          onTouchCancel={
            !isHome && !isContact && !isLandingPage
              ? props.handleScrollStop
              : null
          }
        >
          <CgZeit className={`${styles.buttonImg} ${styles.down}`} />
        </button>
      </div>
      <div className={styles.sideButtons}>
        <button
          className={styles.buttonRight}
          onClick={
            (isSettings && props.selected === 1) || props.selected === 2
              ? () => props.handleChangeOption("r")
              : null
          }
        >
          <CgZeit className={`${styles.buttonImg} ${styles.right}`} />
        </button>
      </div>
    </div>
  );
};

export default RowButtons;
