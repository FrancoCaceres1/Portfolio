/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import DownloadButton from "../../components/downloadButton/DownloadButton.jsx";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
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
                <img src={Js} alt="JavaScript" />
                <h3>JavaScript</h3>
              </span>
              <span>
                <img src={Ts} alt="TypeScript" />
                <h3>TypeScript</h3>
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
                <img src={MySql} alt="MySql" />
                <h3>MySQL</h3>
              </span>
              <span>
                <img src={Php} alt="PHP" />
                <h3>PHP</h3>
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
                <img src={Mui} alt="MaterialUI" />
                <h3>MaterialUI</h3>
              </span>
              <span>
                <img src={Css} alt="CSS" />
                <h3>CSS</h3>
              </span>
              <span>
                <img src={Html} alt="HTML" />
                <h3>HTML</h3>
              </span>
              <span>
                <img src={C} alt="C" />
                <h3>C</h3>
              </span>
              <span>
                <img src={CPlus} alt="C++" />
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
