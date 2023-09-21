/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ButtonB from "../.././assets/images/b-button.png";
import styles from "./BackButton.module.scss";

const BackButtton = (props) => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const { t } = useTranslation();

  BackButtton.propTypes = {
    handleAnimation: PropTypes.func,
  };

  const handleNavigate = () => {
    if (isHome) {
      props.handleAnimation(false);
    }
    window.history.back();
  };

  return (
    <div className={styles.buttonBContainer}>
      <button className={styles.buttonB} onClick={handleNavigate}>
        <span className={styles.backText}>{t("back.title")}</span>
        <img src={ButtonB} alt="b-button" className={styles.buttonBImage} />
      </button>
    </div>
  );
};

export default BackButtton;
