/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ButtonA from "../.././assets/images/a-button.png";
import Config from "../.././assets/images/config.png";
import BackButtton from "../.././components/backButton/BackButton.jsx";
import styles from "./Home.module.scss";

const Home = (props) => {
  const { t } = useTranslation();

  Home.propTypes = {
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    handleAnimation: PropTypes.func.isRequired,
    handleNavigate: PropTypes.func.isRequired,
    handleHover: PropTypes.func.isRequired,
  };

  useEffect(() => {
    props.setSelectedOption(1);
    props.setOption(1);
  }, []);

  return (
    <section className={styles.sectionHome}>
      <div className={styles.optionsContainer}>
        <h1>{t("home.title")}</h1>
        <ol className={styles.list}>
          <li
            className={
              props.selectedOption === 1 || props.option === 1
                ? styles.selected
                : styles.option
            }
            onMouseEnter={() => props.handleHover("1")}
            onClick={() => props.handleNavigate("/projects")}
          >
            <span className={styles.hyphen}>-</span>{t("home.projects")}
            <span
              className={
                props.selectedOption === 1 || props.option === 1
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
          <li
            className={
              props.selectedOption === 2 || props.option === 2
                ? styles.selected
                : styles.option
            }
            onMouseEnter={() => props.handleHover("2")}
            onClick={() => props.handleNavigate("/about")}
          >
            <span className={styles.hyphen}>-</span>
            {t("home.about")}
            <span
              className={
                props.selectedOption === 2 || props.option === 2
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
          <li
            className={
              props.selectedOption === 3 || props.option === 3
                ? styles.selected
                : styles.option
            }
            onMouseEnter={() => props.handleHover("3")}
            onClick={() => props.handleNavigate("/contact")}
          >
            <span className={styles.hyphen}>-</span>{t("home.contact")}
            <span
              className={
                props.selectedOption === 3 || props.option === 3
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
          <li
            className={
              props.selectedOption === 4 || props.option === 4
                ? styles.selected
                : styles.option
            }
            onMouseEnter={() => props.handleHover("4")}
            onClick={() => props.handleNavigate("/skills")}
          >
            <span className={styles.hyphen}>-</span>{t("home.skills")}
            <span
              className={
                props.selectedOption === 4 || props.option === 4
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
        </ol>
      </div>
      <div className={styles.backButtonContainer}>
        <span className={styles.backContainer}>
          <BackButtton handleAnimation={props.handleAnimation} />
        </span>
        <button className={styles.configContainer} onClick={() => props.handleNavigate("/settings")}>
          <img src={Config} alt="config" />
        </button>
      </div>
    </section>
  );
};

export default Home;
