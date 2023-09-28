/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ButtonA from "../.././assets/images/buttons/a-button.png";
import ButtonB from "../.././assets/images/buttons/b-button.png";
import soyPuebla from "../.././assets/images/projects/soy-puebla-1.png";
import Countries from "../.././assets/images/projects/countries-api-1.png";
import Rym from "../.././assets/images/projects/rym-api-1.png";
import Edm from "../.././assets/images/projects/festival-1.png";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
import styles from "./Projects.module.scss";

const Projects = (props) => {
  const { t } = useTranslation();

  Projects.propTypes = {
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    handleHover: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
    setSelected: PropTypes.func.isRequired,
    language: PropTypes.number.isRequired,
    setLanguage: PropTypes.func.isRequired,
    handleLanguageChange: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    handleColorChange: PropTypes.func.isRequired,
    color: PropTypes.number.isRequired,
  };

  useEffect(() => {
    props.setSelectedOption(1);
    props.setOption(1);
    props.setSelected(0);
  }, []);

  return (
    <section className={styles.sectionProjects}>
      <div className={styles.infoContainer}>
        <div className={styles.settingsContainer}>
          <h1>{t("projects.title")}</h1>
          <div className={styles.textContainer}>
            <div
              className={styles.languageContainer}
              onMouseEnter={() => props.handleHover("1")}
            >
              <div
                className={
                  props.selectedOption === 1 || props.option === 1
                    ? styles.selected
                    : styles.option
                }
                onClick={() => props.handleSelect(1)}
              >
                <span className={styles.line}>-</span>
                PUEBLA DEL MAR
                <span
                  className={
                    props.selectedOption === 1 || props.option === 1
                      ? styles.buttonAContainer
                      : styles.buttonAContainerHidden
                  }
                >
                  <img
                    src={props.selected != 1 ? ButtonA : ButtonB}
                    alt="a-button"
                    className={styles.buttonAImage}
                  />
                </span>
              </div>
              {props.selected === 1 && (
                <section className={styles.languageOptions}>
                  <div>
                    <img src={soyPuebla} alt="soy-puebla" />
                    <ul>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        VISIT
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        REPO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        INFO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              )}
            </div>
            <div
              className={styles.languageContainer}
              onMouseEnter={() => props.handleHover("2")}
            >
              <div
                className={
                  props.selectedOption === 2 || props.option === 2
                    ? styles.selected
                    : styles.option
                }
                onClick={() => props.handleSelect(2)}
              >
                <span className={styles.line}>-</span>
                COUNTRIES API
                <span
                  className={
                    props.selectedOption === 2 || props.option === 2
                      ? styles.buttonAContainer
                      : styles.buttonAContainerHidden
                  }
                >
                  <img
                    src={props.selected != 2 ? ButtonA : ButtonB}
                    alt="a-button"
                    className={styles.buttonAImage}
                  />
                </span>
              </div>
              {props.selected === 2 && (
                <section className={styles.languageOptions}>
                  <div>
                    <img src={Countries} alt="soy-puebla" />
                    <ul>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        VISIT
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        REPO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        INFO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              )}
            </div>
            <div
              className={styles.languageContainer}
              onMouseEnter={() => props.handleHover("3")}
            >
              <div
                className={
                  props.selectedOption === 3 || props.option === 3
                    ? styles.selected
                    : styles.option
                }
                onClick={() => props.handleSelect(3)}
              >
                <span className={styles.line}>-</span>
                R&M API
                <span
                  className={
                    props.selectedOption === 3 || props.option === 3
                      ? styles.buttonAContainer
                      : styles.buttonAContainerHidden
                  }
                >
                  <img
                    src={props.selected != 3 ? ButtonA : ButtonB}
                    alt="a-button"
                    className={styles.buttonAImage}
                  />
                </span>
              </div>
              {props.selected === 3 && (
                <section className={styles.languageOptions}>
                  <div>
                    <img src={Rym} alt="soy-puebla" />
                    <ul>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        VISIT
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        REPO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        INFO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              )}
            </div>
            <div
              className={styles.languageContainer}
              onMouseEnter={() => props.handleHover("4")}
            >
              <div
                className={
                  props.selectedOption === 4 || props.option === 4
                    ? styles.selected
                    : styles.option
                }
                onClick={() => props.handleSelect(4)}
              >
                <span className={styles.line}>-</span>
                ROCK&EDM
                <span
                  className={
                    props.selectedOption === 4 || props.option === 4
                      ? styles.buttonAContainer
                      : styles.buttonAContainerHidden
                  }
                >
                  <img
                    src={props.selected != 4 ? ButtonA : ButtonB}
                    alt="a-button"
                    className={styles.buttonAImage}
                  />
                </span>
              </div>
              {props.selected === 4 && (
                <section className={styles.languageOptions}>
                  <div>
                    <img src={Edm} alt="soy-puebla" />
                    <ul>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        VISIT
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        REPO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li>
                        <span className={styles.hyphen}>-</span>
                        INFO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={ButtonA}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
        <ScrollButtons />
      </div>
    </section>
  );
};

export default Projects;
