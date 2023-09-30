/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
import styles from "./Settings.module.scss";

const Settings = (props) => {
  const { t } = useTranslation();

  Settings.propTypes = {
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
    imageUrls: PropTypes.array.isRequired,
  };

  useEffect(() => {
    props.setSelectedOption(1);
    props.setOption(1);
    props.setSelected(0);
  }, []);

  return (
    <section className={styles.sectionSkills}>
      <div className={styles.infoContainer}>
        <div className={styles.settingsContainer}>
          <h1>{t("settings.title")}</h1>
          <div className={styles.textContainer}>
            <div
              className={styles.languageContainer}
              onMouseEnter={
                props.selected === 0 ? () => props.handleHover("1") : null
              }
            >
              <div
                className={
                  props.selectedOption === 1 || props.option === 1
                    ? styles.selected
                    : styles.option
                }
                onClick={
                  props.selected === 0 || props.selected === 1
                    ? () => props.handleSelect(1)
                    : null
                }
              >
                <span className={styles.line}>-</span>
                {t("settings.language")}
                {props.selected === 1 && t("settings.selection")}
                <span
                  className={
                    props.selectedOption === 1 || props.option === 1
                      ? styles.buttonAContainer
                      : styles.buttonAContainerHidden
                  }
                >
                  <img
                    src={
                      props.selected != 1
                        ? props.imageUrls[1]
                        : props.imageUrls[2]
                    }
                    alt="a-button"
                    className={styles.buttonAImage}
                  />
                </span>
              </div>
              {props.selected === 1 && (
                <section className={styles.languageOptions}>
                  <button
                    className={
                      props.language === 1 ? styles.select : styles.noSelect
                    }
                    onClick={() => props.handleLanguageChange("en", 1)}
                  >
                    {t("settings.english")}
                  </button>
                  <button
                    className={
                      props.language === 2 ? styles.select : styles.noSelect
                    }
                    onClick={() => props.handleLanguageChange("es", 2)}
                  >
                    {t("settings.spanish")}
                  </button>
                </section>
              )}
            </div>
            <div
              className={styles.languageContainer}
              onMouseEnter={
                props.selected === 0 ? () => props.handleHover("2") : null
              }
            >
              <div
                className={
                  props.selectedOption === 2 || props.option === 2
                    ? styles.selected
                    : styles.option
                }
                onClick={
                  props.selected === 0 || props.selected === 2
                    ? () => props.handleSelect(2)
                    : null
                }
              >
                <span className={styles.line}>-</span>
                {t("settings.color")}
                {props.selected === 2 && (
                  <>
                    <span className={styles.arrow}>&gt;</span>
                    <div
                      className={`${styles.colorContainer} ${
                        props.color === 1
                          ? styles.backgroundBlue
                          : props.color === 2
                          ? styles.backgroundRed
                          : props.color === 3
                          ? styles.backgroundOrange
                          : props.color === 4
                          ? styles.backgroundPurple
                          : styles.backgroundBlue
                      }`}
                    ></div>
                  </>
                )}
                <span
                  className={
                    props.selectedOption === 2 || props.option === 2
                      ? styles.buttonAContainer
                      : styles.buttonAContainerHidden
                  }
                >
                  <img
                    src={
                      props.selected != 2
                        ? props.imageUrls[1]
                        : props.imageUrls[2]
                    }
                    alt="a-button"
                    className={styles.buttonAImage}
                  />
                </span>
              </div>
              {props.selected === 2 && (
                <section className={styles.languageOptions}>
                  <button
                    className={
                      props.color === 1
                        ? styles.optionBackgroundBlue
                        : styles.noBackgroundBlue
                    }
                    onClick={() => props.handleColorChange(1)}
                  ></button>
                  <button
                    className={
                      props.color === 2
                        ? styles.optionBackgroundRed
                        : styles.noBackgroundRed
                    }
                    onClick={() => props.handleColorChange(2)}
                  ></button>
                  <button
                    className={
                      props.color === 3
                        ? styles.optionBackgroundOrange
                        : styles.noBackgroundOrange
                    }
                    onClick={() => props.handleColorChange(3)}
                  ></button>
                  <button
                    className={
                      props.color === 4
                        ? styles.optionBackgroundPurple
                        : styles.noBackgroundPurple
                    }
                    onClick={() => props.handleColorChange(4)}
                  ></button>
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

export default Settings;
