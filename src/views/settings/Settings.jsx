/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../.././language/LanguageContext.jsx";
import { useTranslation } from "react-i18next";
import ButtonA from "../.././assets/images/a-button.png";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
import styles from "./Settings.module.scss";

const Settings = (props) => {
  const { changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [language, setLanguage] = useState(1);

  Settings.propTypes = {
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    handleHover: PropTypes.func.isRequired,
  };

  useEffect(() => {
    props.setSelectedOption(1);
    props.setOption(1);
  }, []);

  const handleSelect = (value) => {
    const optionMap = {
      1: 1,
      2: 2,
      3: 3,
    };

    if (optionMap[value]) {
      selected === value ? setSelected(0) : setSelected(optionMap[value]);
    }
  };

  const handleLanguageChange = (newLanguage, value) => {
    changeLanguage(newLanguage);
    const optionMap = {
      1: 1,
      2: 2,
      3: 3,
    };

    if (optionMap[value]) {
      setLanguage(optionMap[value]);
    }
  };

  return (
    <section className={styles.sectionSkills}>
      <div className={styles.infoContainer}>
        <div className={styles.settingsContainer}>
          <h1>{t("settings.title")}</h1>
          <div className={styles.textContainer}>
            <div
              className={
                props.selectedOption === 1 || props.option === 1
                  ? styles.selected
                  : styles.option
              }
              onMouseEnter={() => props.handleHover("1")}
              onClick={() => handleSelect(1)}
            >
              <span>-</span>
              {t("settings.language")}
              {selected != 1 && (
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
              )}
              {selected === 1 && (
                <section className={styles.languageOptions}>
                  <button
                    className={(language === 1) ? styles.select : styles.noSelect}
                    onClick={() => handleLanguageChange("en", 1)}
                  >
                    {t("settings.english")}
                  </button>
                  <button
                    className={(language === 2) ? styles.select : styles.noSelect}
                    onClick={() => handleLanguageChange("es", 2)}
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
