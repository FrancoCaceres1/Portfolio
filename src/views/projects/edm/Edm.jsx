/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ScrollButtons from "../../../components/scrollButtons/ScrollButtons.jsx";
import soyPuebla from "../../.././assets/images/projects/festival.png";
import Js from "../../.././assets/images/skills/js.png";
import Css from "../../.././assets/images/skills/css.png";
import Html from "../../.././assets/images/skills/html.png";
import Webpack from "../../.././assets/images/skills/webpack.png";
import Sass from "../../.././assets/images/skills/sass.png";
import Www from "../../.././assets/images/icons/www.png";
import ButtonA from "../../.././assets/images/buttons/a-button.png";
import styles from "./Edm.module.scss";

const Edm = (props) => {
  const pRef = useRef(null);
  const { t } = useTranslation();

  Edm.propTypes = {
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
          <h1>ROCK&EDM</h1>
          <div className={styles.textContainer} ref={pRef}>
            <span>
              <img src={soyPuebla} alt="puebla-del-mar" />
            </span>
            <p>
              Aplicación que tenía por objetivo consolidar todas las tecnologías
              front end aprendidas. En este proyecto debía crear una landing
              page usando SASS y Webpack. Es una aplicación simple y una de las
              primeras que realice.
            </p>
            <h1 className={styles.technologies}>TECHNOLOGIES</h1>
            <section className={styles.iconsContainer}>
              <span>
                <img src={Js} alt="JavaScript" />
                <h3>JavaScript</h3>
              </span>
              <span>
                <img src={Webpack} alt="Webpack" />
                <h3>Webpack</h3>
              </span>
              <span>
                <img src={Sass} alt="SASS" />
                <h3>Sass</h3>
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
                  props.handleRedirect("https://bright-kangaroo-442885.netlify.app/")
                }
              >
                <img className={styles.wwwImage} src={Www} alt="www" />
                VISITAR
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

export default Edm;
