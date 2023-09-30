/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ScrollButtons from "../../../components/scrollButtons/ScrollButtons.jsx";
import styles from "./Pdm.module.scss";

const Pdm = (props) => {
  const pRef = useRef(null);
  const { t } = useTranslation();

  Pdm.propTypes = {
    setPRef: PropTypes.func.isRequired,
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    handleRedirect: PropTypes.func.isRequired,
    showArrowDown: PropTypes.bool.isRequired,
    showArrowUp: PropTypes.bool.isRequired,
    imageUrls: PropTypes.array.isRequired,
  };

  useEffect(() => {
    props.setPRef(pRef.current);
  }, [props]);

  return (
    <section className={styles.sectionProject}>
      <div className={styles.infoContainer}>
        <div className={styles.projectContainer}>
          <h1>PUEBLA DEL MAR</h1>
          <div className={styles.textContainer} ref={pRef}>
            <span>
              <img src={props.imageUrls[30]} alt="puebla-del-mar" />
            </span>
            <p>{t("project1.information")}</p>
            <h1 className={styles.technologies}>
              {t("project1.technologies")}
            </h1>
            <section className={styles.iconsContainer}>
              <span>
                <img src={props.imageUrls[11]} alt="JavaScript" />
                <h3>JavaScript</h3>
              </span>
              <span>
                <img src={props.imageUrls[24]} alt="React-js" />
                <h3>React</h3>
              </span>
              <span>
                <img src={props.imageUrls[18]} alt="Node-js" />
                <h3>Node</h3>
              </span>
              <span>
                <img src={props.imageUrls[20]} alt="Express-js" />
                <h3>Express</h3>
              </span>
              <span>
                <img src={props.imageUrls[19]} alt="Sequelize" />
                <h3>Sequelize</h3>
              </span>
              <span>
                <img src={props.imageUrls[14]} alt="PostgreSql" />
                <h3>PostgreSQL</h3>
              </span>
              <span>
                <img src={props.imageUrls[21]} alt="MaterialUI" />
                <h3>MaterialUI</h3>
              </span>
              <span>
                <img src={props.imageUrls[16]} alt="CSS" />
                <h3>CSS</h3>
              </span>
              <span>
                <img src={props.imageUrls[17]} alt="HTML" />
                <h3>HTML</h3>
              </span>
            </section>
            <div className={styles.visitContainer}>
              <button
                className={styles.visitButton}
                onClick={() =>
                  props.handleRedirect("https://soy-puebla-deploy.vercel.app/")
                }
              >
                <img
                  className={styles.wwwImage}
                  src={props.imageUrls[33]}
                  alt="www"
                />
                {t("project1.visit")}
                <img
                  className={styles.AButton}
                  src={props.imageUrls[1]}
                  alt="a-button"
                />
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

export default Pdm;
