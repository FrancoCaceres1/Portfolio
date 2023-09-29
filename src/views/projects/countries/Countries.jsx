/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ScrollButtons from "../../../components/scrollButtons/ScrollButtons.jsx";
import soyPuebla from "../../.././assets/images/projects/countries-api.png";
import Js from "../../.././assets/images/skills/js.png";
import PostgreSql from "../../.././assets/images/skills/postgresql.png";
import Css from "../../.././assets/images/skills/css.png";
import Html from "../../.././assets/images/skills/html.png";
import Node from "../../.././assets/images/skills/node.png";
import Sequelize from "../../.././assets/images/skills/sequelize.png";
import Express from "../../.././assets/images/skills/express.png";
import ReactJs from "../../.././assets/images/skills/react.png";
import Www from "../../.././assets/images/icons/www.png";
import ButtonA from "../../.././assets/images/buttons/a-button.png";
import styles from "./Countries.module.scss";

const Countries = (props) => {
  const pRef = useRef(null);
  const { t } = useTranslation();

  Countries.propTypes = {
    setPRef: PropTypes.func.isRequired,
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    handleRedirect: PropTypes.func.isRequired,
    showArrowDown: PropTypes.bool.isRequired,
    showArrowUp: PropTypes.bool.isRequired,
  };

  useEffect(() => {
    props.setPRef(pRef.current);
  }, [props]);

  return (
    <section className={styles.sectionProject}>
      <div className={styles.infoContainer}>
        <div className={styles.projectContainer}>
          <h1>{t("project2.title")}</h1>
          <div className={styles.textContainer} ref={pRef}>
            <span>
              <img src={soyPuebla} alt="puebla-del-mar" />
            </span>
            <p>
            {t("project2.information")}
            </p>
            <h1 className={styles.technologies}>{t("project1.technologies")}</h1>
            <section className={styles.iconsContainer}>
              <span>
                <img src={Js} alt="JavaScript" />
                <h3>JavaScript</h3>
              </span>
              <span>
                <img src={ReactJs} alt="React-js" />
                <h3>React</h3>
              </span>
              <span>
                <img src={Node} alt="Node-js" />
                <h3>Node</h3>
              </span>
              <span>
                <img src={Express} alt="Express-js" />
                <h3>Express</h3>
              </span>
              <span>
                <img src={Sequelize} alt="Sequelize" />
                <h3>Sequelize</h3>
              </span>
              <span>
                <img src={PostgreSql} alt="PostgreSql" />
                <h3>PostgreSQL</h3>
              </span>
              <span>
                <img src={Css} alt="CSS" />
                <h3>CSS</h3>
              </span>
              <span>
                <img src={Html} alt="HTML" />
                <h3>HTML</h3>
              </span>
            </section>
            <div className={styles.visitContainer}>
              <button
                className={styles.visitButton}
                onClick={() =>
                  props.handleRedirect(
                    "https://pi-countries-api-flax.vercel.app/"
                  )
                }
              >
                <img className={styles.wwwImage} src={Www} alt="www" />
                {t("project1.visit")}
                <img className={styles.AButton} src={ButtonA} alt="a-button" />
              </button>
            </div>
          </div>
        </div>
        <ScrollButtons
          handleScrollStart={props.handleScrollStart}
          handleScrollStop={props.handleScrollStop}
          showArrowDown={props.showArrowDown}
          showArrowUp={props.showArrowUp}
        />
      </div>
    </section>
  );
};

export default Countries;
