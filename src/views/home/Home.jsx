/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ButtonA from "../.././assets/images/a-button.png";
import Config from "../.././assets/images/config.png";
import BackButtton from "../.././components/backButton/BackButton.jsx";
import styles from "./Home.module.scss";

const Home = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  Home.propTypes = {
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    handleAnimation: PropTypes.func.isRequired,
  };

  useEffect(() => {
    props.setSelectedOption(1);
    props.setOption(1);
  }, []);

  const handleHover = (value) => {
    const optionMap = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    };

    if (optionMap[value]) {
      props.setSelectedOption(optionMap[value]);
      props.setOption(optionMap[value]);
    }
  };

  const handleNavigate = (value) => {
    value === "/settings"
      ? navigate(value)
      : setTimeout(() => {
          navigate(value);
        }, "150");
  };

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
            onMouseEnter={() => handleHover("1")}
            onClick={() => handleNavigate("/projects")}
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
            onMouseEnter={() => handleHover("2")}
            onClick={() => handleNavigate("/about")}
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
            onMouseEnter={() => handleHover("3")}
            onClick={() => handleNavigate("/contact")}
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
            onMouseEnter={() => handleHover("4")}
            onClick={() => handleNavigate("/skills")}
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
        <button className={styles.configContainer} onClick={() => handleNavigate("/settings")}>
          <img src={Config} alt="config" />
        </button>
      </div>
    </section>
  );
};

export default Home;
