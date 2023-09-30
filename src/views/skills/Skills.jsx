/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import DownloadButton from "../../components/downloadButton/DownloadButton.jsx";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
import styles from "./Skills.module.scss";

const Skills = (props) => {
  const pRef = useRef(null);
  const { t } = useTranslation();

  Skills.propTypes = {
    setPRef: PropTypes.func.isRequired,
    handleDownload: PropTypes.func.isRequired,
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    showArrowDown: PropTypes.bool.isRequired,
    showArrowUp: PropTypes.bool.isRequired,
    imageUrls: PropTypes.array.isRequired,
  };

  useEffect(() => {
    props.setPRef(pRef.current);
  }, []);

  return (
    <section className={styles.sectionSkills}>
      <div className={styles.infoContainer}>
        <div className={styles.skillsContainer}>
          <h1>{t("skills.title")}</h1>
          <div className={styles.textContainer} ref={pRef}>
            <section className={styles.iconsContainer}>
              <span>
                <img src={props.imageUrls[11]} alt="JavaScript" />
                <h3>JavaScript</h3>
              </span>
              <span>
                <img src={props.imageUrls[12]} alt="TypeScript" />
                <h3>TypeScript</h3>
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
                <img src={props.imageUrls[15]} alt="MySql" />
                <h3>MySQL</h3>
              </span>
              <span>
                <img src={props.imageUrls[23]} alt="PHP" />
                <h3>PHP</h3>
              </span>
              <span>
                <img src={props.imageUrls[13]} alt="Webpack" />
                <h3>Webpack</h3>
              </span>
              <span>
                <img src={props.imageUrls[22]} alt="SASS" />
                <h3>Sass</h3>
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
              <span>
                <img src={props.imageUrls[9]} alt="C" />
                <h3>C</h3>
              </span>
              <span>
                <img src={props.imageUrls[10]} alt="C++" />
                <h3>C++</h3>
              </span>
            </section>
            <DownloadButton handleDownload={props.handleDownload} />
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

export default Skills;
