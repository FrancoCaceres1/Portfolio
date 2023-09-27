/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ButtonA from "../.././assets/images/buttons/a-button.png";
import Config from "../.././assets/images/icons/config.png";
import C from "../.././assets/images/skills/c.png";
import CPlus from "../.././assets/images/skills/c-plus.png";
import Js from "../.././assets/images/skills/js.png";
import Ts from "../.././assets/images/skills/ts.png";
import Webpack from "../.././assets/images/skills/webpack.png";
import PostgreSql from "../.././assets/images/skills/postgresql.png";
import MySql from "../.././assets/images/skills/mysql.png";
import Css from "../.././assets/images/skills/css.png";
import Html from "../.././assets/images/skills/html.png";
import Node from "../.././assets/images/skills/node.png";
import Sequelize from "../.././assets/images/skills/sequelize.png";
import Express from "../.././assets/images/skills/express.png";
import Mui from "../.././assets/images/skills/mui.png";
import Sass from "../.././assets/images/skills/sass.png";
import Php from "../.././assets/images/skills/php.png";
import ReactJs from "../.././assets/images/skills/react.png";
import LinkedIn from "../.././assets/images/icons/linkedin.png";
import Github from "../.././assets/images/icons/github.png";
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

  const preloadImages = (imageUrls) => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  };

  useEffect(() => {
    props.setSelectedOption(1);
    props.setOption(1);
    const imageUrls = [
      LinkedIn,
      Github,
      C,
      ReactJs,
      Sass,
      Express,
      Mui,
      Php,
      Sequelize,
      Node,
      Html,
      CPlus,
      Js,
      Ts,
      Css,
      PostgreSql,
      Webpack,
      MySql,
    ];
    preloadImages(imageUrls);
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
            <span className={styles.hyphen}>-</span>
            {t("home.projects")}
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
            <span className={styles.hyphen}>-</span>
            {t("home.contact")}
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
            <span className={styles.hyphen}>-</span>
            {t("home.skills")}
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
        <button
          className={styles.configContainer}
          onClick={() => props.handleNavigate("/settings")}
        >
          <img src={Config} alt="config" />
        </button>
      </div>
    </section>
  );
};

export default Home;
