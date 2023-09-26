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
  const isAbout = location.pathname === "/about";
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

  const handleSelect = () => {
    navigate("/home");
  };

  const handleNavigation = (value) => {
    if (isHome || isContact || isSettings) {
      if (value === "up" && props.option > 1) {
        isSettings && props.setSelected(0);
        props.setOption(props.option - 1);
        props.setSelectedOption(props.selectedOption - 1);
      } else if (value === "down" && props.option < 4) {
        if (isSettings && props.option < 2) {
          props.setSelected(0)
          props.setOption(props.option + 1);
          props.setSelectedOption(props.selectedOption + 1);
        } else if (isContact && props.option < 3){
          props.setOption(props.option + 1);
          props.setSelectedOption(props.selectedOption + 1);
        } else if (isHome){
          props.setOption(props.option + 1);
          props.setSelectedOption(props.selectedOption + 1);
        }
      }
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

  const handleChangeLanguage = (value) => {
    value === "r" &&
      (props.language === 1) & props.handleLanguageChange("es", 2);
    value === "l" &&
      (props.language === 2) & props.handleLanguageChange("en", 1);
  };

  return (
    <section className={styles.sectionController}>
      <div className={styles.controllersContainer}>
        <div className={styles.controllers1}>
          <div className={styles.rowButtons}>
            <div className={styles.sideButtons}>
              {isSettings && props.selected === 1 ? (
                <button
                  className={styles.buttonLeft}
                  onClick={() => handleChangeLanguage("l")}
                >
                  <CgZeit className={`${styles.buttonImg} ${styles.left}`} />
                </button>
              ) : (
                <button className={styles.buttonLeft}>
                  <CgZeit className={`${styles.buttonImg} ${styles.left}`} />
                </button>
              )}
            </div>
            <div className={styles.centerButtons}>
              <button
                className={styles.buttonUp}
                onClick={() => handleNavigation("up")}
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
              >
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
              <button
                className={styles.buttonDown}
                onClick={() => handleNavigation("down")}
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
              >
                <CgZeit className={`${styles.buttonImg} ${styles.down}`} />
              </button>
            </div>
            <div className={styles.sideButtons}>
              {isSettings && props.selected === 1 ? (
                <button
                  className={styles.buttonRight}
                  onClick={() => handleChangeLanguage("r")}
                >
                  <CgZeit className={`${styles.buttonImg} ${styles.right}`} />
                </button>
              ) : (
                <button className={styles.buttonRight}>
                  <CgZeit className={`${styles.buttonImg} ${styles.right}`} />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.controllers2}>
          <div className={styles.centerButtons2}>
            <span className={styles.select}>
              {!isHome && !isLandingPage ? (
                <>
                  <button
                    className={styles.buttonsCenter}
                    onClick={handleSelect}
                  ></button>
                </>
              ) : isHome || props.click ? (
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
              ) : isSettings && props.selected > 0 ? (
                <button
                  className={styles.circleButton1}
                  onClick={() => props.setSelected(0)}
                >
                  B
                </button>
              ) : (
                <button className={styles.circleButton1} onClick={handleBack}>
                  B
                </button>
              )}
            </div>
            <div className={styles.circleButtonContainer2}>
              {isAbout ? (
                <button
                  className={styles.circleButton2}
                  onClick={props.handleDownload}
                >
                  A
                </button>
              ) : isContact && props.option === 3 ? (
                <button
                  className={styles.circleButton2}
                  onClick={props.handleDownload}
                >
                  A
                </button>
              ) : isContact && props.option === 2 ? (
                <button
                  className={styles.circleButton2}
                  onClick={() => {
                    handleRedirect("https://github.com/FrancoCaceres1");
                  }}
                >
                  A
                </button>
              ) : isContact && props.option === 1 ? (
                <button
                  className={styles.circleButton2}
                  onClick={() => {
                    handleRedirect(
                      "https://www.linkedin.com/in/franco-c%C3%A1ceres-2731a0273/"
                    );
                  }}
                >
                  A
                </button>
              ) : isSettings ? (
                <button
                  className={styles.circleButton2}
                  onClick={() => props.handleSelect(props.selectedOption)}
                >
                  A
                </button>
              ) : (
                <button
                  className={styles.circleButton2}
                  onClick={handleRedirect}
                >
                  A
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gameboy;
