/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CgZeit } from "react-icons/cg";
import styles from "./Gameboy.module.scss";

const Gameboy = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";
  const isHome = location.pathname === "/home";

  Gameboy.propTypes = {
    handleAnimation: PropTypes.func.isRequired,
    click: PropTypes.bool.isRequired,
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
  };

  const handleBack = () => {
    props.handleAnimation(false);
    window.history.back();
  };

  const handleClick = () => {
    props.handleAnimation(true);
    setTimeout(() => {
      navigate("/home");
    }, "1150");
  };

  const handleNavigation = (value) => {
    if (value == "up") {
      if (props.option > 1) {
        props.setOption(props.option - 1);
        props.setSelectedOption(props.selectedOption - 1);
      }
    }
    if (value == "down") {
      if (props.option < 3) {
        props.setOption(props.option + 1);
        props.setSelectedOption(props.selectedOption + 1);
      }
    }
  };

  return (
    <section className={styles.sectionController}>
      <div className={styles.controllersContainer}>
        <div className={styles.controllers1}>
          <div className={styles.rowButtons}>
            <div className={styles.sideButtons}>
              <button className={styles.buttonLeft}>
                <CgZeit className={`${styles.buttonImg} ${styles.left}`} />
              </button>
            </div>
            <div className={styles.centerButtons}>
              <button className={styles.buttonUp} onClick={() => handleNavigation("up")}>
                <CgZeit className={`${styles.buttonImg} ${styles.up}`} />
              </button>
              <span className={styles.emptyCenter}>
                <div
                  className={`${styles.innerSquare} ${styles.topLeft}`}
                ></div>
                <div
                  className={`${styles.innerSquare} ${styles.topRight}`}
                ></div>
                <div
                  className={`${styles.innerSquare} ${styles.bottomLeft}`}
                ></div>
                <div
                  className={`${styles.innerSquare} ${styles.bottomRight}`}
                ></div>
              </span>
              <button className={styles.buttonDown} onClick={() => handleNavigation("down")}>
                <CgZeit className={`${styles.buttonImg} ${styles.down}`} />
              </button>
            </div>
            <div className={styles.sideButtons}>
              <button className={styles.buttonRight}>
                <CgZeit className={`${styles.buttonImg} ${styles.right}`} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.controllers2}>
          <div className={styles.centerButtons2}>
            <span className={styles.select}>
              {isHome || props.click ? (
                <>
                  <button className={styles.buttonsCenter}></button>
                </>
              ) : (
                <>
                  <button
                    className={styles.buttonsCenter}
                    onClick={handleClick}
                  ></button>
                </>
              )}
              <span className={styles.selectText}>SELECT</span>
            </span>
            <span className={styles.start}>
              {isHome || props.click ? (
                <>
                  <button className={styles.buttonsCenter}></button>
                </>
              ) : (
                <>
                  <button
                    className={styles.buttonsCenter}
                    onClick={handleClick}
                  ></button>
                </>
              )}
              <span className={styles.startText}>START</span>
            </span>
          </div>
        </div>
        <div className={styles.controllers3}>
          <div className={styles.circleButtonContainer}>
            <div className={styles.circleButtonContainer1}>
              {isLandingPage ? (
                <button className={styles.circleButton1}>B</button>
              ) : (
                <button className={styles.circleButton1} onClick={handleBack}>
                  B
                </button>
              )}
            </div>
            <div className={styles.circleButtonContainer2}>
              <button className={styles.circleButton2}>A</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gameboy;
