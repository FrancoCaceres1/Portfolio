/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ButtonA from "../.././assets/images/a-button.png";
import ButtonB from "../.././assets/images/b-button.png";
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
            <div className={styles.languageContainer}>
              <div
                className={
                  props.selectedOption === 1 || props.option === 1
                    ? styles.selected
                    : styles.option
                }
                onMouseEnter={() => props.handleHover("1")}
                onClick={() => props.handleSelect(1)}
              >
                <span>-</span>
                {t("settings.language")}
                {props.selected === 1 && t("settings.selection")}
                {props.selected != 1 ? (
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
                ) : (
                  <span
                    className={
                      props.selectedOption === 1 || props.option === 1
                        ? styles.buttonAContainer
                        : styles.buttonAContainerHidden
                    }
                  >
                    <img
                      src={ButtonB}
                      alt="a-button"
                      className={styles.buttonAImage}
                    />
                  </span>
                )}
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
            <div className={styles.languageContainer}>
              <div
                className={
                  props.selectedOption === 2 || props.option === 2
                    ? styles.selected
                    : styles.option
                }
                onMouseEnter={() => props.handleHover("2")}
                onClick={() => props.handleSelect(2)}
              >
                <span>-</span>
                {t("settings.language")}
                {props.selected === 2 && t("settings.selection")}
                {props.selected != 2 ? (
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
                ) : (
                  <span
                    className={
                      props.selectedOption === 2 || props.option === 2
                        ? styles.buttonAContainer
                        : styles.buttonAContainerHidden
                    }
                  >
                    <img
                      src={ButtonB}
                      alt="a-button"
                      className={styles.buttonAImage}
                    />
                  </span>
                )}
              </div>
              {props.selected === 2 && (
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
          </div>
        </div>
        <ScrollButtons />
      </div>
    </section>
  );
};

export default Settings;